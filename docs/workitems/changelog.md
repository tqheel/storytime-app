# Changelog

All notable changes to the Storytime App will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4] - 2025-10-16 - af90f68cf705e327c23d539a092c8f7b0b38aefe

### Added
- **Complete Mr. Rogers Theme Integration**: Applied Mr. Rogers design philosophy and color scheme across all visual elements throughout the entire application
- **Custom AI vs Internet Component Styling**: Created dedicated Mr. Rogers-themed CSS file (`ai-vs-internet-rogers.component.css`) with complete visual redesign using the neighborhood color palette
- **Local Chart.js Package**: Installed Chart.js as a local npm dependency for better reliability and consistency

### Changed
- **Removed External CDN Dependencies**: Eliminated all CDN references including Tailwind CSS and Chart.js, replacing with local packages and custom CSS
- **Chart.js Import Method**: Converted from CDN script loading to proper ES6 module import for immediate initialization and better performance
- **Global Theme Application**: Imported Mr. Rogers theme CSS globally to ensure consistent styling across all components  
- **Visual Element Conversion**: Replaced all Tailwind utility classes with custom Mr. Rogers-themed styles, maintaining functionality while enhancing visual cohesion
- **Color Scheme Standardization**: Applied consistent Mr. Rogers color palette (cardigan red, neighborhood blue, warm grays) to charts, timelines, and interactive elements

### Removed
- **Tailwind CSS Dependencies**: Completely removed Tailwind CSS, PostCSS, and Autoprefixer packages in favor of pure custom CSS
- **External Build Dependencies**: Simplified build process by removing unnecessary external CSS framework dependencies
- **CDN Script Loading**: Eliminated dynamic script loading mechanism for Chart.js in favor of direct imports

### Technical Details
- Replaced Tailwind CSS framework with pure custom CSS using Mr. Rogers design system
- Updated global `styles.css` to only include Mr. Rogers theme imports
- Refactored AI vs Internet component template to use semantic CSS classes instead of utility classes
- Converted Chart.js from `this.loadScript('https://cdn.jsdelivr.net/npm/chart.js')` to `import Chart from 'chart.js/auto'`
- Simplified component initialization by removing async script loading delays
- Maintained all chart functionality and interactive features while applying neighborhood-inspired styling
- Improved build performance by eliminating CSS framework processing overhead and external script dependencies
- Application is now completely self-contained with zero external runtime dependencies

## [0.0.3] - 2025-10-13 - Commit: 74017c7

### Added
- **Mr. Rogers Design Philosophy**: Comprehensive design system inspired by Fred Rogers' gentle, warm, and accessible approach
- **Mr. Rogers Theme Stylesheet**: Complete CSS framework with warm colors (cardigan red, neighborhood blue, sunshine yellow), gentle typography, and rounded corners reflecting Rogers' welcoming nature
- **Neighborhood Iconography**: CSS-based icons representing iconic elements from Mr. Rogers' Neighborhood including the Trolley, Daniel Tiger, King Friday XIII, and Fred Rogers himself
- **Fred Rogers Portrait**: Placeholder SVG illustration of Fred Rogers in his iconic cardigan sweater for the home page
- **Animated Interactions**: Gentle hover effects and entrance animations that reflect Rogers' patient, unhurried approach
- **Accessibility Features**: Enhanced focus states and inclusive design principles following Rogers' values

### Changed
- **Home Page Redesign**: Complete visual transformation applying Mr. Rogers design philosophy while maintaining existing functionality
- **Typography System**: Switched to Georgia serif font for body text and Inter for headings, creating a more literary, conversational feel
- **Color Palette**: Replaced generic gradients with warm, comforting colors inspired by Rogers' neighborhood and cardigan
- **Component Structure**: Moved inline styles to external CSS files for better maintainability and extensibility
- **Card Interactions**: Enhanced story cards with neighborhood-inspired styling and gentler hover effects

### Technical Details
- Created `mr-rogers-theme.css` with comprehensive design system and CSS custom properties
- Added `mr-rogers-icons.css` with animated CSS-based iconography
- Implemented placeholder system for Fred Rogers imagery with respectful styling
- Refactored home component to use external stylesheets following project architecture patterns
- Applied gentle entrance animations with staggered timing for welcoming user experience
- Maintained responsive design principles with mobile-first approach

### Design Philosophy
This version embodies Fred Rogers' approach to communication: transforming complex topics into gentle, accessible narratives through warm visual design, patient interactions, and inclusive accessibility features that welcome all neighbors to the digital neighborhood.

## [0.0.2] - 2025-10-13

### Changed
- Completely redesigned home page with card-based interface, removing Angular boilerplate content
- Removed Angular logo, "Hello, storytime-web" greeting, and development documentation sidebar
- Implemented modern card-style layout for story navigation with consistent sizing and styling

### Added
- New "Storytime" brand title with gradient styling and Fred Rogers-inspired subtitle
- Story cards with emoji indicators, titles, and detailed descriptions
- Interactive hover effects that enlarge cards and show full content with scrolling
- CSS text truncation with ellipsis for cards that exceed standard height
- Responsive grid layout that adapts from multi-column to single-column on mobile
- Enhanced visual design with shadows, transitions, and improved accessibility

### Technical Details
- Redesigned home component template with clean, semantic HTML structure
- Implemented CSS Grid for responsive card layout
- Added hover state management with transform scaling and scrollable content
- Removed signal import and simplified component class structure
- Updated styling to use modern CSS features like -webkit-line-clamp for text truncation

## [0.0.1] - 2025-10-13
**Git Commit:** f7d3639

### Added
- Initial implementation of the Storytime App as an Angular single-page application
- Home page component with Angular logo, "Hello, storytime-web" greeting, and social links
- AI vs Internet analysis page displaying content from Google Gemini-generated HTML file
- Navigation link with gradient styling on home page that routes to AI vs Internet analysis
- Complete preservation of original CSS styling and JavaScript functionality from source HTML
- Interactive Chart.js visualizations showing Internet and Generative AI adoption rates
- Timeline navigation with smooth scrolling functionality
- Responsive design supporting mobile and desktop viewing
- Angular routing system with lazy-loaded components
- Comprehensive user adoption analysis comparing Internet (1993-2015) vs Generative AI (2022-2024)

### Technical Details
- Created separate Angular components for modular architecture
- Implemented Angular Router for single-page application navigation
- Preserved TailwindCSS styling and Chart.js functionality
- Added TypeScript type safety for component interactions
- Updated package.json version from 0.0.0 to 0.0.1

### Documentation
- Added comprehensive README.md with getting started instructions
- Included prerequisites, installation steps, and available npm scripts
- Documented version features and technical implementation details