# Sliderator

Convert Markdown documents to PowerPoint presentations with ease.

## Overview

Sliderator is a command-line tool that automatically converts Markdown files into PowerPoint presentations. It uses the `python-pptx` library to generate slides from markdown headers and content, with support for template-based styling.

## Features

- ✅ Convert Markdown files to PowerPoint (.pptx) format
- ✅ Support for template files to maintain consistent styling
- ✅ Automatic slide generation from markdown headers (H1-H4)
- ✅ Bullet point conversion from markdown lists
- ✅ Table and blockquote support
- ✅ Command-line interface with flexible options
- ✅ Cross-platform compatibility (Windows, macOS, Linux)

## Installation

### Prerequisites

- Python 3.7 or higher
- pip package manager

### Install Dependencies

```bash
cd sliderator
pip install -r requirements.txt
```

### Make Script Executable (Unix/macOS)

```bash
chmod +x sliderator.py
```

## Usage

### Basic Usage

Convert a markdown file to PowerPoint:

```bash
python sliderator.py input.md
```

This creates `input.pptx` in the same directory.

### Specify Output File

```bash
python sliderator.py input.md -o presentation.pptx
```

### Use a Template

Apply consistent styling using a PowerPoint template:

```bash
python sliderator.py input.md -t template.pptx -o output.pptx
```

### Command-Line Options

```
sliderator.py [-h] [-o OUTPUT] [-t TEMPLATE] [-v] input_file

positional arguments:
  input_file            Input Markdown file path

optional arguments:
  -h, --help            show this help message and exit
  -o OUTPUT, --output OUTPUT
                        Output PowerPoint file path (default: input filename with .pptx extension)
  -t TEMPLATE, --template TEMPLATE
                        PowerPoint template file for styling and formatting
  -v, --verbose         Enable verbose output
```

## Examples

### Convert AI Best Practices Content

```bash
# From the storytime-app root directory
python sliderator/sliderator.py content/ai/ai-best-practices-slide-deck.md -o presentations/ai-best-practices.pptx
```

### Convert MVP Framework Content

```bash
python sliderator/sliderator.py content/mvps/mvp-with-frameworks-slide-deck.md -o presentations/mvp-frameworks.pptx
```

### Using a Corporate Template

```bash
python sliderator/sliderator.py content/ai/ai-best-practices-slide-deck.md -t templates/corporate-template.pptx -o presentations/ai-corporate.pptx
```

## Markdown Structure

Sliderator converts markdown content using these rules:

### Headers → Slides

Each header creates a new slide:

```markdown
# Main Title Slide (H1)
## Section Header (H2)
### Subsection (H3)
#### Detail Slide (H4)
```

### Lists → Bullet Points

Markdown lists become PowerPoint bullet points:

```markdown
## Key Benefits
- Increased productivity
- Reduced costs
- Better user experience
- Faster time-to-market
```

### Content Elements

- **Paragraphs**: Added as text content
- **Blockquotes**: Formatted with quotation marks
- **Tables**: Converted to plain text representation
- **Bold/Italic**: Preserved in text formatting

### Example Markdown Structure

```markdown
# Project Overview

## Problem Statement
- Market research shows 73% of users struggle with current solutions
- Existing tools are too complex for non-technical users
- Average setup time is 2+ hours

## Our Solution
We've developed a simplified approach that:
- Reduces setup time to under 15 minutes
- Provides intuitive user interface
- Requires no technical expertise

## Next Steps
1. Complete user testing by end of Q1
2. Finalize product roadmap
3. Begin development sprint planning
```

## Template Usage

### Creating Templates

1. Create a PowerPoint file with your desired:
   - Color scheme
   - Fonts
   - Logo/branding
   - Slide layouts

2. Save as `.pptx` file

3. Use with `-t template.pptx` option

### Template Best Practices

- Include at least 2 slide layouts:
  - Title slide (layout 0)
  - Title and content slide (layout 1)
- Set consistent fonts and colors
- Add company branding elements
- Test with sample content first

## Output Structure

Generated presentations include:

- **Title Slides**: For H1 headers (title only)
- **Content Slides**: For H2-H4 headers with bullet points
- **Consistent Formatting**: Font sizes based on header level
- **Automatic Bullets**: Added to list items

## Troubleshooting

### Common Issues

**Import Errors**
```
Error: Required libraries not installed
```
**Solution**: Run `pip install -r requirements.txt`

**File Not Found**
```
❌ Error: Input file not found: file.md
```
**Solution**: Check file path and ensure file exists

**Template Loading Issues**
```
Warning: Could not load template template.pptx
```
**Solution**: Verify template file exists and is a valid .pptx file

### Verbose Mode

For detailed error information:

```bash
python sliderator.py input.md -v
```

## Dependencies

- **python-pptx**: PowerPoint file generation
- **markdown**: Markdown parsing and HTML conversion
- **beautifulsoup4**: HTML parsing and content extraction
- **lxml**: XML processing (required by BeautifulSoup)

## File Structure

```
sliderator/
├── sliderator.py      # Main conversion script
├── requirements.txt   # Python dependencies
└── README.md         # This documentation
```

## Advanced Usage

### Batch Processing

Convert multiple files:

```bash
# Shell script example
for file in content/*/*.md; do
    python sliderator/sliderator.py "$file" -t corporate-template.pptx -o "presentations/$(basename "$file" .md).pptx"
done
```

### Integration with Build Systems

Add to Makefile:

```makefile
presentations: sliderator/sliderator.py
	python sliderator/sliderator.py content/ai/ai-best-practices-slide-deck.md -o dist/ai-presentation.pptx
	python sliderator/sliderator.py content/mvps/mvp-with-frameworks-slide-deck.md -o dist/mvp-presentation.pptx
```

## Contributing

To contribute to Sliderator:

1. Fork the repository
2. Create a feature branch
3. Add your improvements
4. Test with various markdown files
5. Submit a pull request

## License

This project is part of the Storytime App and follows the same licensing terms.

## Version History

- **v1.0.0**: Initial release with basic markdown to PowerPoint conversion
- Features: CLI interface, template support, bullet points, multiple header levels

---

*Generated by Sliderator - Converting ideas into presentations, one markdown file at a time.* 📊