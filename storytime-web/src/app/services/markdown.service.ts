import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  
  constructor(private sanitizer: DomSanitizer) {
    // Configure marked options
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  /**
   * Parse markdown content and return sanitized HTML
   * @param markdown The markdown string to parse
   * @returns Sanitized HTML as SafeHtml
   */
  parse(markdown: string): SafeHtml {
    // Parse markdown to HTML
    const rawHtml = marked.parse(markdown) as string;
    
    // Sanitize the HTML to prevent XSS attacks
    const cleanHtml = DOMPurify.sanitize(rawHtml);
    
    // Return as SafeHtml for Angular
    return this.sanitizer.sanitize(1, cleanHtml) || '';
  }

  /**
   * Parse markdown content and return sanitized HTML string (not SafeHtml)
   * @param markdown The markdown string to parse
   * @returns Sanitized HTML as string
   */
  parseToString(markdown: string): string {
    // Parse markdown to HTML
    const rawHtml = marked.parse(markdown) as string;
    
    // Sanitize the HTML to prevent XSS attacks
    return DOMPurify.sanitize(rawHtml);
  }
}
