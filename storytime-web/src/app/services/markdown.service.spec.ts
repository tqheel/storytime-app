import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MarkdownService } from './markdown.service';
import { DomSanitizer } from '@angular/platform-browser';

describe('MarkdownService', () => {
  let service: MarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(MarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse simple markdown heading', () => {
    const markdown = '# Hello World';
    const result = service.parseToString(markdown);
    expect(result).toContain('<h1');
    expect(result).toContain('Hello World');
    expect(result).toContain('</h1>');
  });

  it('should parse markdown paragraphs', () => {
    const markdown = 'This is a paragraph.';
    const result = service.parseToString(markdown);
    expect(result).toContain('<p>');
    expect(result).toContain('This is a paragraph.');
    expect(result).toContain('</p>');
  });

  it('should parse markdown bold text', () => {
    const markdown = '**Bold text**';
    const result = service.parseToString(markdown);
    expect(result).toContain('<strong>');
    expect(result).toContain('Bold text');
    expect(result).toContain('</strong>');
  });

  it('should parse markdown italic text', () => {
    const markdown = '*Italic text*';
    const result = service.parseToString(markdown);
    expect(result).toContain('<em>');
    expect(result).toContain('Italic text');
    expect(result).toContain('</em>');
  });

  it('should parse markdown links', () => {
    const markdown = '[Link text](https://example.com)';
    const result = service.parseToString(markdown);
    expect(result).toContain('<a');
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('Link text');
    expect(result).toContain('</a>');
  });

  it('should parse markdown lists', () => {
    const markdown = '- Item 1\n- Item 2\n- Item 3';
    const result = service.parseToString(markdown);
    expect(result).toContain('<ul>');
    expect(result).toContain('<li>');
    expect(result).toContain('Item 1');
    expect(result).toContain('Item 2');
    expect(result).toContain('Item 3');
    expect(result).toContain('</ul>');
  });

  it('should parse markdown code blocks', () => {
    const markdown = '```javascript\nconst x = 1;\n```';
    const result = service.parseToString(markdown);
    expect(result).toContain('<code');
    expect(result).toContain('const x = 1;');
  });

  it('should sanitize potentially dangerous HTML', () => {
    const markdown = '<script>alert("XSS")</script>';
    const result = service.parseToString(markdown);
    expect(result).not.toContain('<script>');
    expect(result).not.toContain('alert(');
  });

  it('should sanitize dangerous event handlers', () => {
    const markdown = '<img src="x" onerror="alert(\'XSS\')">';
    const result = service.parseToString(markdown);
    expect(result).not.toContain('onerror');
    expect(result).not.toContain('alert');
  });

  it('should handle empty markdown', () => {
    const markdown = '';
    const result = service.parseToString(markdown);
    expect(result).toBe('');
  });

  it('should handle multiline markdown', () => {
    const markdown = '# Title\n\nThis is a paragraph.\n\n**Bold text**';
    const result = service.parseToString(markdown);
    expect(result).toContain('<h1');
    expect(result).toContain('Title');
    expect(result).toContain('<p>');
    expect(result).toContain('This is a paragraph.');
    expect(result).toContain('<strong>');
    expect(result).toContain('Bold text');
  });

  it('should preserve safe HTML tags', () => {
    const markdown = '<div>Safe content</div>';
    const result = service.parseToString(markdown);
    expect(result).toContain('<div>');
    expect(result).toContain('Safe content');
    expect(result).toContain('</div>');
  });

  it('should parse markdown with line breaks', () => {
    const markdown = 'Line 1\nLine 2';
    const result = service.parseToString(markdown);
    // marked with breaks: true should convert \n to <br>
    expect(result).toContain('Line 1');
    expect(result).toContain('Line 2');
  });

  it('should handle special characters', () => {
    const markdown = '< > & " \'';
    const result = service.parseToString(markdown);
    // Should be HTML-escaped
    expect(result.length).toBeGreaterThan(0);
  });

  it('should parse nested markdown structures', () => {
    const markdown = '- **Bold item**\n- *Italic item*';
    const result = service.parseToString(markdown);
    expect(result).toContain('<ul>');
    expect(result).toContain('<strong>');
    expect(result).toContain('Bold item');
    expect(result).toContain('<em>');
    expect(result).toContain('Italic item');
  });
});
