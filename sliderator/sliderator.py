#!/usr/bin/env python3
"""
Sliderator - Convert Markdown documents to PowerPoint presentations

A command-line tool for converting Markdown files to PowerPoint presentations
using the python-pptx library. Supports template-based styling and automatic
slide generation from markdown headers and content.
"""

import argparse
import os
import sys
import re
from pathlib import Path
from typing import List, Dict, Optional

try:
    import markdown
    from bs4 import BeautifulSoup
    from pptx import Presentation
    from pptx.util import Inches, Pt
    from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
    from pptx.dml.color import RGBColor
except ImportError as e:
    print(f"Error: Required libraries not installed. Run: pip install -r requirements.txt")
    print(f"Missing: {e}")
    sys.exit(1)


class SlideData:
    """Data structure for slide content"""
    def __init__(self, title: str, content: List[str], level: int = 1):
        self.title = title
        self.content = content
        self.level = level
        self.slide_type = "content" if content else "title"


class MarkdownParser:
    """Parse Markdown content into slide data structures"""
    
    def __init__(self):
        self.md = markdown.Markdown(extensions=['tables', 'fenced_code'])
    
    def parse_file(self, filepath: Path) -> List[SlideData]:
        """Parse markdown file and return list of slide data"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            return self.parse_content(content)
        except FileNotFoundError:
            raise FileNotFoundError(f"Markdown file not found: {filepath}")
        except Exception as e:
            raise Exception(f"Error reading markdown file: {e}")
    
    def parse_content(self, content: str) -> List[SlideData]:
        """Parse markdown content string into slide data"""
        # Convert markdown to HTML for easier parsing
        html = self.md.convert(content)
        soup = BeautifulSoup(html, 'html.parser')
        
        slides = []
        current_slide = None
        
        # Process all elements in order
        for element in soup.find_all(['h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'p', 'blockquote', 'table']):
            if element.name in ['h1', 'h2', 'h3', 'h4']:
                # Start new slide
                if current_slide:
                    slides.append(current_slide)
                
                title = element.get_text().strip()
                # Remove slide numbers if present (e.g., "## Slide 15: Title" -> "Title")
                title = re.sub(r'^Slide\s+\d+:\s*', '', title, flags=re.IGNORECASE)
                
                level = int(element.name[1])
                current_slide = SlideData(title=title, content=[], level=level)
            
            elif current_slide and element.name in ['ul', 'ol']:
                # Add bullet points
                for li in element.find_all('li'):
                    bullet_text = li.get_text().strip()
                    if bullet_text:
                        current_slide.content.append(bullet_text)
            
            elif current_slide and element.name == 'p':
                # Add paragraph content
                text = element.get_text().strip()
                if text and not text.startswith('---'):  # Skip markdown separators
                    current_slide.content.append(text)
            
            elif current_slide and element.name == 'blockquote':
                # Add quoted content
                text = element.get_text().strip()
                if text:
                    current_slide.content.append(f'"{text}"')
            
            elif current_slide and element.name == 'table':
                # Convert simple tables to text
                rows = []
                for tr in element.find_all('tr'):
                    cells = [td.get_text().strip() for td in tr.find_all(['td', 'th'])]
                    if cells:
                        rows.append(' | '.join(cells))
                if rows:
                    current_slide.content.extend(rows)
        
        # Add the last slide
        if current_slide:
            slides.append(current_slide)
        
        return slides


class PresentationGenerator:
    """Generate PowerPoint presentations from slide data"""
    
    def __init__(self, template_path: Optional[Path] = None):
        self.template_path = template_path
    
    def create_presentation(self, slides: List[SlideData], output_path: Path) -> None:
        """Create PowerPoint presentation from slide data"""
        # Load template or create new presentation
        if self.template_path and self.template_path.exists():
            try:
                prs = Presentation(str(self.template_path))
                print(f"Using template: {self.template_path}")
            except Exception as e:
                print(f"Warning: Could not load template {self.template_path}: {e}")
                print("Creating presentation without template...")
                prs = Presentation()
        else:
            prs = Presentation()
        
        # Clear existing slides if using template
        if self.template_path and len(prs.slides) > 0:
            # Keep the layouts but remove content slides
            for i in range(len(prs.slides) - 1, -1, -1):
                if i > 0:  # Keep first slide as reference
                    slide_id = prs.slides[i].slide_id
                    prs.part.drop_rel(prs.slides._sldIdLst[i].rId)
                    del prs.slides._sldIdLst[i]
        
        # Add slides
        for slide_data in slides:
            self._add_slide(prs, slide_data)
        
        # Save presentation
        try:
            prs.save(str(output_path))
            print(f"✅ Presentation saved successfully: {output_path}")
        except Exception as e:
            raise Exception(f"Error saving presentation: {e}")
    
    def _add_slide(self, prs: Presentation, slide_data: SlideData) -> None:
        """Add a single slide to the presentation"""
        # Choose slide layout
        if slide_data.content:
            # Title and Content layout (usually index 1)
            layout_idx = min(1, len(prs.slide_layouts) - 1)
        else:
            # Title Only layout (usually index 0)
            layout_idx = 0
        
        slide_layout = prs.slide_layouts[layout_idx]
        slide = prs.slides.add_slide(slide_layout)
        
        # Set title
        if slide.shapes.title:
            slide.shapes.title.text = slide_data.title
            
            # Style title based on heading level
            title_font = slide.shapes.title.text_frame.paragraphs[0].font
            if slide_data.level == 1:
                title_font.size = Pt(36)
            elif slide_data.level == 2:
                title_font.size = Pt(32)
            elif slide_data.level == 3:
                title_font.size = Pt(28)
            else:
                title_font.size = Pt(24)
        
        # Add content
        if slide_data.content and len(slide.placeholders) > 1:
            content_placeholder = slide.placeholders[1]
            text_frame = content_placeholder.text_frame
            text_frame.clear()
            
            for i, content_item in enumerate(slide_data.content):
                if i == 0:
                    # Use existing paragraph
                    p = text_frame.paragraphs[0]
                else:
                    # Add new paragraph
                    p = text_frame.add_paragraph()
                
                p.text = content_item
                p.level = 0
                
                # Set bullet point
                p.font.size = Pt(18)
                
                # Add bullet for list items
                if not content_item.startswith(('•', '-', '*')):
                    p.text = f"• {content_item}"


class Sliderator:
    """Main application class"""
    
    def __init__(self):
        self.parser = MarkdownParser()
        self.generator = None
    
    def convert(self, input_path: Path, output_path: Path, template_path: Optional[Path] = None) -> None:
        """Convert markdown file to PowerPoint presentation"""
        print(f"📄 Reading markdown file: {input_path}")
        
        # Parse markdown
        slides = self.parser.parse_file(input_path)
        print(f"📊 Generated {len(slides)} slides")
        
        # Create presentation
        self.generator = PresentationGenerator(template_path)
        self.generator.create_presentation(slides, output_path)
        
        print("🎉 Conversion completed successfully!")


def main():
    """Command line interface"""
    parser = argparse.ArgumentParser(
        description="Convert Markdown documents to PowerPoint presentations",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  sliderator.py input.md
  sliderator.py input.md -o presentation.pptx
  sliderator.py input.md -t template.pptx -o output.pptx
  sliderator.py content/ai/ai-best-practices-slide-deck.md -o ai-slides.pptx
        """
    )
    
    parser.add_argument(
        'input_file',
        type=Path,
        help='Input Markdown file path'
    )
    
    parser.add_argument(
        '-o', '--output',
        type=Path,
        help='Output PowerPoint file path (default: input filename with .pptx extension)'
    )
    
    parser.add_argument(
        '-t', '--template',
        type=Path,
        help='PowerPoint template file for styling and formatting'
    )
    
    parser.add_argument(
        '-v', '--verbose',
        action='store_true',
        help='Enable verbose output'
    )
    
    args = parser.parse_args()
    
    # Validate input file
    if not args.input_file.exists():
        print(f"❌ Error: Input file not found: {args.input_file}")
        sys.exit(1)
    
    if not args.input_file.suffix.lower() in ['.md', '.markdown']:
        print(f"⚠️  Warning: Input file doesn't have .md or .markdown extension")
    
    # Set default output path
    if not args.output:
        args.output = args.input_file.with_suffix('.pptx')
    
    # Validate template file
    if args.template and not args.template.exists():
        print(f"❌ Error: Template file not found: {args.template}")
        sys.exit(1)
    
    # Create output directory if needed
    args.output.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        # Convert file
        app = Sliderator()
        app.convert(
            input_path=args.input_file,
            output_path=args.output,
            template_path=args.template
        )
        
        print(f"\n📁 Output location: {args.output.absolute()}")
        
    except Exception as e:
        print(f"❌ Error during conversion: {e}")
        if args.verbose:
            import traceback
            traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()