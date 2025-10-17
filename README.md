# Storytime App

## Introduction
The Storytime App is a visual storytelling presentation app. The inspiration for this app is Fred Rogers and his children's program, "[Mr. Rogers' Neighborhood](https://www.misterrogers.org/)". The app displays difficult concepts and displays them in a whimsical, easy to understand style and format.

Fred Rogers's style was to take complex topics and transform them into gentle, accessible narratives that honored children's intelligence while respecting their emotional development. He would often use simple analogies, visual aids like pictures and models, and personal anecdotes to make abstract concepts concrete. When explaining historical events or difficult subjects, Rogers would focus on the human elements - the feelings, relationships, and universal experiences that children could relate to. He believed in speaking truthfully but age-appropriately, using a calm, unhurried pace that allowed children time to process information. His storytelling approach emphasized reassurance and understanding, often addressing children's fears and curiosities with patience and warmth, making learning feel safe and meaningful rather than overwhelming.

This app will reflect this style, and will incorporate visual elements from "Mr. Rogers' Neighborhood" in order to present various different topics. This app is a tribute to Fred in order to express my appreciation for all the hours that he gave me when he was talking directly to me as a child, via the medium of television.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Running the Application
1. Navigate to the web application directory:
   ```bash
   cd storytime-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:4200`

The application will automatically reload when you make changes to the source files.

### Available Scripts
- `npm start` - Starts the development server
- `npm run build` - Builds the app for production
- `npm test` - Runs unit tests
- `npm run watch` - Builds the app in watch mode

## Deployment

The Storytime App is automatically deployed to GitHub Pages whenever changes are pushed to the `master` branch.

### Live Site
The application is available at: [https://tqheel.github.io/storytime-app/](https://tqheel.github.io/storytime-app/)

### Automated Deployment
The deployment process is handled by a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Builds the Angular application with the correct base href (`/storytime-app/`)
2. Creates a `404.html` file (copy of `index.html`) to enable SPA routing on GitHub Pages
3. Deploys the built files to GitHub Pages

### Manual Deployment
If you need to trigger a deployment manually:
1. Go to the [Actions tab](https://github.com/tqheel/storytime-app/actions) in the GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the `master` branch

### GitHub Pages Setup
To enable GitHub Pages for this repository:
1. Go to repository Settings → Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. The site will be automatically deployed on the next push to `master`

## Versions
### version 0.0.7
- **AI Best Practices Story Component**: Comprehensive interactive guide for working responsibly with generative AI tools
- **Broad Audience Focus**: Content designed for novices, non-technical users, and senior leaders - no technical expertise required
- **9 Educational Cards**: Effective Prompts, Custom Instructions, Key Definitions, Use Cases, Enterprise Tool Comparison, Ethics, Common Pitfalls, Security, and Conclusion
- **Enterprise AI Tools Comparison**: Detailed analysis comparing ChatGPT Enterprise, Microsoft 365 Copilot, GitHub Copilot Enterprise, and AWS Q
- **Practical Guidance**: Real-world examples of how to write better prompts, set up custom instructions, and choose the right AI tool
- **Simple Definitions**: Complex AI terms (LLM, tokens, context windows, hallucinations) explained in accessible language
- **Ethical Framework**: Comprehensive coverage of responsible AI use including privacy, security, bias awareness, and transparency
- **Business Use Cases**: Specific examples for business leaders, non-technical professionals, and everyday tasks
- **Fred Rogers Philosophy**: Gentle, patient teaching style making AI accessible without overwhelming technical jargon
- **Full Kiosk Support**: Presentation-ready mode with keyboard and mouse navigation for sharing insights with teams

### version 0.0.6
- **MVP Story Component**: Interactive educational story about Minimum Viable Product using Fred Rogers' storytelling approach
- **Enhanced Kiosk Navigation**: Multi-section navigation with left/right arrows for exploring complex content sequentially
- **Full Keyboard Support**: Arrow keys navigate between sections, ESC key exits - complete keyboard accessibility
- **Mouse Click Navigation**: Large, discoverable arrow buttons with pulsing animations guide users through content
- **8 Interactive Cards**: What is MVP, Four Key Parts, The Journey, Real Examples, Why Kind, Questions, Mindset, Conclusion
- **Progressive Learning**: Content organized for gradual understanding of complex product development concepts
- **Real-World Examples**: Wright Brothers, Amazon, Instagram stories showing MVP in action
- **Fred Rogers Philosophy**: Gentle, accessible narrative emphasizing kindness, patience, and learning from mistakes

### version 0.0.5
- **Reusable Kiosk Mode Framework**: Built comprehensive presentation system that any future story can easily implement
- **Interactive Story Presentation**: Added full-screen kiosk mode for AI vs Internet story with large, meeting-room-friendly fonts
- **Click-to-Present Functionality**: Made all story content cards clickable for seamless transition to presentation mode
- **Widescreen Optimized Display**: Created responsive kiosk layout optimized for distance viewing on large displays and projectors
- **Enhanced User Interaction**: Added visual hover effects and intuitive navigation with ESC key and click-to-close functionality
- **Developer-Friendly Architecture**: Created reusable components, services, and documentation for easy kiosk implementation in future stories
- **Meeting Room Ready**: Designed presentation mode specifically for storytelling in conference rooms and educational settings

