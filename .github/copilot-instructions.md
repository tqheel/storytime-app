# Copilot Instructions for Storytime App

## Project Overview
Storytime App is an educational Angular SPA inspired by Fred Rogers' gentle storytelling approach. It presents complex topics through whimsical, accessible narratives. Currently implements an interactive comparison of Internet vs AI adoption rates.

## Architecture & Structure

### Key Directories
- `storytime-web/` - Angular 20 application (main codebase)
- `content/` - Source HTML files for story content (e.g., Google Gemini generated content)
- `docs/workitems/` - Project documentation and changelog

### Component Architecture Pattern
Components follow a **content preservation pattern** where external HTML/CSS/JS is integrated into Angular:

```typescript
// Pattern: External script loading in AfterViewInit
ngAfterViewInit(): void {
  this.loadScript('https://cdn.tailwindcss.com');
  this.loadScript('https://cdn.jsdelivr.net/npm/chart.js').then(() => {
    this.initializeCharts();
  });
}
```

### Routing Convention
Uses lazy-loaded components with descriptive paths:
```typescript
{
  path: 'ai-vs-internet',
  loadComponent: () => import('./ai-vs-internet/ai-vs-internet.component').then(m => m.AiVsInternetComponent)
}
```

## Critical Development Patterns

### Content Integration Workflow
1. Place source content in `content/[topic-name]/` directory
2. Create Angular component that preserves original styling/functionality
3. Use `loadScript()` pattern for external dependencies (Chart.js, TailwindCSS)
4. Implement navigation methods for smooth scrolling and section highlighting

### Styling Strategy
- **Inline styles in component template** for component-specific CSS variables
- **External CSS file** for shared utility classes and responsive design
- **Preserve original color schemes** from source content (e.g., indigo for Internet, emerald for AI)

### Data Visualization Pattern
Charts use Chart.js with specific data structures:
```typescript
const narrativeData = [
  { x: 0, y: 14 },    // x: years from start, y: users in millions
  { x: 2, y: 36 }
];
```

## Development Commands
From `storytime-web/` directory:
- `npm start` - Development server (port 4200)
- `npm run build` - Production build  
- `npm test` - Run Karma tests
- `npm run watch` - Watch mode builds

## Version Management
- Update `storytime-web/package.json` version field
- Document changes in `docs/workitems/changelog.md` following Keep a Changelog format
- Update main `README.md` versions section with feature descriptions
- Increment package.json file to stay in-sync with changelog.
- Newest changelog entry should be at the top of the file.
- Only show the latest changelog entry in the README.md file.
- When the version has been commited, update the changelog with the Git commit ID.

## Fred Rogers Design Philosophy
All content should reflect Rogers' approach:
- Transform complex topics into gentle, accessible narratives
- Use visual aids and concrete analogies
- Focus on human elements and relatable experiences
- Maintain patience, warmth, and reassurance in presentation