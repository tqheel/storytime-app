import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KioskService } from '../services/kiosk.service';
import { KioskOverlayComponent } from '../components/kiosk-overlay.component';

interface FrameworkSection {
  title: string;
  content: string[];
}

@Component({
  selector: 'app-mvp-frameworks',
  imports: [RouterLink, CommonModule, KioskOverlayComponent],
  template: `
    <div class="mvp-frameworks-container">
      <header class="frameworks-header">
        <h1 class="frameworks-title">MVP Research & Analysis</h1>
        <p class="frameworks-subtitle">Frameworks, Metrics, and Real-World Case Studies</p>
        <div class="frameworks-nav">
          <a routerLink="/home" class="frameworks-back-btn">
            ← Back to Home
          </a>
        </div>
      </header>

      <section class="frameworks-introduction">
        <div class="intro-card">
          <h2 class="intro-title">Understanding MVP at Scale</h2>
          <p class="intro-text">
            Building on our gentle introduction to MVP, let's explore the frameworks, metrics, and real-world stories
            that help teams make thoughtful decisions. These tools help us understand what customers truly need,
            measure our progress, and learn from both successes and challenges.
          </p>
        </div>
      </section>

      <!-- Frameworks Section -->
      <section class="frameworks-main-content">
        <h2 class="section-header">📐 Supporting Frameworks</h2>
        
        <div class="cards-grid">
          <!-- JTBD Framework Card -->
          <div class="framework-card" (click)="openKioskMode('jtbd-framework')">
            <div class="card-icon">🎯</div>
            <h3 class="card-title">Jobs-to-be-Done (JTBD)</h3>
            <p class="card-preview">
              Understand what customers are truly "hiring" your product to do - the functional, emotional, and social jobs they need accomplished...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- NABC Framework Card -->
          <div class="framework-card" (click)="openKioskMode('nabc-framework')">
            <div class="card-icon">🧭</div>
            <h3 class="card-title">NABC Framework</h3>
            <p class="card-preview">
              A structured approach to articulate your value proposition: Need, Approach, Benefits, and Competition...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- A/B Testing Card -->
          <div class="framework-card" (click)="openKioskMode('ab-testing')">
            <div class="card-icon">🧪</div>
            <h3 class="card-title">A/B Experimentation</h3>
            <p class="card-preview">
              Compare different versions of features to learn what works best through data-driven experimentation...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Metrics Card -->
          <div class="framework-card" (click)="openKioskMode('mvp-metrics')">
            <div class="card-icon">📊</div>
            <h3 class="card-title">Common Metrics</h3>
            <p class="card-preview">
              Customer acquisition, engagement, satisfaction, revenue, and product performance metrics that guide MVP decisions...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>
        </div>
      </section>

      <!-- Success Stories Section -->
      <section class="case-studies-section success-stories">
        <h2 class="section-header">✨ Success Stories: Learning from Wins</h2>
        
        <div class="cards-grid">
          <!-- Dropbox Card -->
          <div class="case-study-card success-card" (click)="openKioskMode('case-dropbox')">
            <div class="card-icon">📦</div>
            <h3 class="card-title">Dropbox: The Video MVP</h3>
            <p class="card-preview">
              Drew Houston created a 3-minute demo video before building the product, generating 75,000 signups overnight...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Buffer Card -->
          <div class="case-study-card success-card" (click)="openKioskMode('case-buffer')">
            <div class="card-icon">📱</div>
            <h3 class="card-title">Buffer: The Two-Page Test</h3>
            <p class="card-preview">
              Joel Gascoigne validated demand with just two landing pages before writing a single line of code...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Airbnb Card -->
          <div class="case-study-card success-card" (click)="openKioskMode('case-airbnb')">
            <div class="card-icon">🏠</div>
            <h3 class="card-title">Airbnb: Air Mattresses to Billions</h3>
            <p class="card-preview">
              Started by renting air mattresses during a design conference, turning personal pain into a global marketplace...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>
        </div>
      </section>

      <!-- Failure Stories Section -->
      <section class="case-studies-section failure-stories">
        <h2 class="section-header">📚 Learning from Challenges</h2>
        
        <div class="cards-grid">
          <!-- Quibi Card -->
          <div class="case-study-card failure-card" (click)="openKioskMode('case-quibi')">
            <div class="card-icon">📺</div>
            <h3 class="card-title">Quibi: $1.75B Lesson</h3>
            <p class="card-preview">
              Raised massive funding before launch, built full product without MVP validation, shut down after 6 months...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Google Glass Card -->
          <div class="case-study-card failure-card" (click)="openKioskMode('case-google-glass')">
            <div class="card-icon">👓</div>
            <h3 class="card-title">Google Glass: The Social Barrier</h3>
            <p class="card-preview">
              Advanced technology met social resistance - privacy concerns and "Glasshole" phenomenon prevented adoption...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Segway Card -->
          <div class="case-study-card failure-card" (click)="openKioskMode('case-segway')">
            <div class="card-icon">🛴</div>
            <h3 class="card-title">Segway: Revolution That Wasn't</h3>
            <p class="card-preview">
              Promised to transform urban mobility but sold only 6,000 units in first year instead of projected 100,000...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>
        </div>
      </section>

      <section class="frameworks-closing">
        <div class="closing-card">
          <p class="closing-quote">
            "The most successful MVPs combine rigorous customer research with rapid experimentation, 
            using frameworks as complementary tools rather than standalone methodologies."
          </p>
          <p class="closing-attribution">— MVP Best Practices</p>
        </div>
      </section>

      <!-- Kiosk Mode Overlay -->
      <app-kiosk-overlay></app-kiosk-overlay>
    </div>
  `,
  styleUrls: ['./mvp-frameworks.component.css', '../shared/kiosk.css']
})
export class MvpFrameworksComponent {
  
  constructor(private kioskService: KioskService) {}

  private frameworkSections = new Map<string, FrameworkSection>([
    ['jtbd-framework', {
      title: 'Jobs-to-be-Done (JTBD) Framework',
      content: [
        '**Understanding the Core**: JTBD helps identify what customers are truly "hiring" your product to do. It focuses on the underlying job or need that drives purchase decisions, not just features or demographics.',
        '**Three Types of Jobs**:\n• Functional Job: The practical task users need to accomplish\n• Emotional Job: How users want to feel when using the product\n• Social Job: How users want to be perceived by others',
        '**The JTBD Process**:\n1. Job Discovery: Interview customers about their struggles and goals\n2. Job Statement: "When I [situation], I want to [motivation], so I can [expected outcome]"\n3. Outcome Definition: Define what success looks like\n4. Solution Design: Build MVP features that best complete the job',
        '**In MVP Development**: Use JTBD to identify real problems, prioritize core features, segment users by job similarity (not demographics), and measure how well your MVP completes the job. This ensures you\'re solving genuine customer needs rather than building features nobody wants.'
      ]
    }],
    ['nabc-framework', {
      title: 'Need, Approach, Benefits, Competition (NABC)',
      content: [
        '**Need**: What problem are you solving? Who has this problem? How important is solving this problem? What\'s the market size and urgency? Your MVP must address a real, urgent need.',
        '**Approach**: What\'s your unique solution? How does it differ from alternatives? What\'s your core technology or methodology? Why is your approach better? Focus your MVP on the core differentiating approach.',
        '**Benefits**: What specific value do you deliver? What are the quantifiable benefits? How do you measure success? What\'s the return on investment for users? Define and track key benefits delivery.',
        '**Competition**: Who are your direct and indirect competitors? What are existing alternatives? What\'s your competitive advantage? How will you maintain your position? Ensure your MVP has clear competitive advantage.',
        '**Using NABC**: This framework provides structure for articulating and validating your business proposition. Walk through each element deliberately, ensuring your MVP addresses all four dimensions with evidence, not assumptions.'
      ]
    }],
    ['ab-testing', {
      title: 'A/B Experimentation for MVPs',
      content: [
        '**What is A/B Testing**: Comparing two versions of a product feature to determine which performs better. Instead of guessing what users want, you let real data guide your decisions.',
        '**The 7-Step Process**:\n1. Hypothesis Formation: Define what you want to test and why\n2. Metric Selection: Choose key performance indicators\n3. Test Design: Create control (A) and variant (B) versions\n4. Sample Size: Determine statistically significant sample\n5. Test Execution: Run test for predetermined period\n6. Analysis: Evaluate results objectively\n7. Implementation: Apply winning variant or iterate',
        '**Types of MVP Tests**:\n• Interface Testing: Different layouts, colors, buttons\n• Feature Testing: Alternative implementations\n• Flow Testing: Different onboarding or conversion flows\n• Content Testing: Various messaging or value propositions',
        '**Best Practices**: Test one variable at a time, ensure statistical significance before making decisions, consider qualitative feedback alongside quantitative data, and document learnings to share across your organization. Small, focused tests compound into big insights.'
      ]
    }],
    ['mvp-metrics', {
      title: 'Common Metrics for MVP Assessment',
      content: [
        '**Customer Acquisition Metrics**:\n• Customer Acquisition Cost (CAC): Total marketing spend ÷ new customers\n• Conversion Rate: Percentage who become customers\n• Sign-up Rate: Percentage who register\n• Time to First Value: How quickly users experience value',
        '**Engagement Metrics**:\n• Daily/Monthly Active Users (DAU/MAU): Usage frequency\n• Session Duration: Time spent in product\n• Feature Adoption Rate: Percentage using key features\n• User Retention Rate: Percentage who return over time',
        '**Satisfaction Metrics**:\n• Net Promoter Score (NPS): Likelihood to recommend\n• Customer Satisfaction Score (CSAT): Direct satisfaction rating\n• Customer Effort Score (CES): Ease of use\n• User Feedback Quality: Qualitative insights',
        '**Business Metrics**:\n• Monthly Recurring Revenue (MRR): Predictable income\n• Average Revenue Per User (ARPU): Revenue per customer\n• Lifetime Value (LTV): Total expected revenue\n• Growth Rate: Month-over-month or year-over-year',
        '**Leading vs. Lagging**: Leading indicators (engagement, feature adoption) predict future performance. Lagging indicators (revenue, market share) confirm past decisions. Balance both types for complete picture.'
      ]
    }],
    ['case-dropbox', {
      title: 'Dropbox: The Video MVP Success',
      content: [
        '**The Challenge**: In 2008, file synchronization across devices was a pain point many people experienced but few solutions existed. Explaining cloud sync to non-technical users was difficult.',
        '**The MVP Approach**: Drew Houston created a 3-minute demo video showing Dropbox functionality before building the complete product. The video demonstrated file syncing across devices—a concept many found hard to understand without seeing it.',
        '**Jobs-to-be-Done**:\n• Functional Job: Access files from anywhere\n• Emotional Job: Feel confident about file availability\n• Social Job: Appear organized and professional\nJob Statement: "When I\'m working across multiple devices, I want to access my files seamlessly, so I can be productive anywhere without worrying about versions."',
        '**NABC Framework**:\n• Need: File synchronization pain, version control issues\n• Approach: Seamless cloud sync with drag-and-drop\n• Benefits: Automatic sync, universal access, easy sharing\n• Competition: Email attachments, USB drives, FTP, early cloud storage',
        '**The Results**: The video generated 75,000 signups overnight before the product even existed. This validated massive market demand. Dropbox grew from 100,000 to 4 million users in 15 months, eventually IPO\'ing in 2018 with $10+ billion valuation.',
        '**Key Lesson**: A video MVP can validate demand without building the product. Simple demonstrations can communicate complex technical concepts. Early user feedback shaped development priorities and ensured they built what users actually wanted.'
      ]
    }],
    ['case-buffer', {
      title: 'Buffer: The Two-Page Landing Test',
      content: [
        '**The Challenge**: Social media management was time-consuming and maintaining consistent posting schedules was difficult for individuals and small businesses.',
        '**The MVP Approach**: Joel Gascoigne created a two-page landing site: one describing the product, another with pricing plans. Users who clicked "Plan" saw a "You caught us before we\'re ready" message with email signup. No actual product existed.',
        '**Jobs-to-be-Done**:\n• Functional Job: Schedule social media posts efficiently\n• Emotional Job: Feel organized and in control\n• Social Job: Maintain professional, consistent brand\nJob Statement: "When I want consistent social media presence, I want to schedule posts in advance, so I can save time while maintaining engagement."',
        '**NABC Framework**:\n• Need: Time-consuming social media, inconsistent posting\n• Approach: Simple scheduling interface for multiple platforms\n• Benefits: Time savings, consistent posting, better timing\n• Competition: Manual posting, basic tools, enterprise solutions',
        '**The Results**: The landing page validated demand before building anything. Generated 100+ email signups in first 7 weeks. Clear willingness to pay was demonstrated through pricing page clicks. Eventually achieved product-market fit and scaled to millions of users.',
        '**Key Lessons**: "Fake doors" can validate demand effectively. Pricing validation is crucial early in the process—people saying they\'ll pay is different from actually paying. Simple landing pages can test complex product concepts with minimal investment.'
      ]
    }],
    ['case-airbnb', {
      title: 'Airbnb: From Air Mattresses to Billions',
      content: [
        '**The Origin**: In 2007, founders Brian Chesky and Joe Gebbia couldn\'t afford San Francisco rent. During a design conference when hotels were fully booked, they decided to rent out air mattresses in their apartment.',
        '**The MVP Approach**: Created simple website "Air Bed & Breakfast" with photos of their apartment and air mattresses. No payment processing, booking system, or user profiles—just basic contact information exchange. Extremely minimal but solved a real problem.',
        '**Jobs-to-be-Done**:\n• Functional Job: Find affordable, unique accommodation\n• Emotional Job: Feel like a local, not a tourist\n• Social Job: Connect with local community and culture\nJob Statement: "When I need accommodation in expensive cities, I want authentic local experiences, so I can travel affordably while connecting with culture."',
        '**NABC Framework**:\n• Need: Expensive hotels, lack of unique experiences, unused space monetization\n• Approach: Peer-to-peer accommodation marketplace\n• Benefits: Lower costs, unique spaces, local connections, extra income for hosts\n• Competition: Hotels, hostels, vacation rentals, Craigslist',
        '**A/B Testing Evolution**: As they grew, they tested professional vs. user-generated photos (professional won significantly), different verification and review systems (trust was crucial), various fee structures, and different search and discovery mechanisms.',
        '**The Results**: First booking generated $80 revenue—validation! The personal pain point indicated broader market need. Grew to global platform with millions of listings. Public company valued at $100+ billion at peak.',
        '**Key Lessons**: Personal pain points can indicate broader market needs. Simple MVP can validate complex marketplace concepts. Trust and safety features are crucial for peer-to-peer platforms. Geographic expansion validated model scalability—what works in SF could work everywhere.'
      ]
    }],
    ['case-quibi', {
      title: 'Quibi: The $1.75 Billion Learning Experience',
      content: [
        '**The Concept**: Launched in 2020 as mobile-first video streaming platform for short-form premium content (7-10 minutes), targeting mobile generation during commutes and breaks. Founded by Hollywood veterans Jeffrey Katzenberg and Meg Whitman.',
        '**The Problem**: Raised $1.75 billion before launch and built full-featured product without traditional MVP validation. Assumed market need based on mobile video consumption trends without actually testing with real users.',
        '**Flawed JTBD Analysis**:\nAssumed Job: "When I have short free time, I want high-quality entertainment, so I can be entertained during commutes or breaks."\nActual Problems:\n• Misunderstood mobile viewing habits (people prefer user-generated content)\n• Ignored social aspects of mobile video (sharing, comments)\n• Launched during COVID when commutes disappeared',
        '**Inadequate NABC**:\n• Need: ASSUMED need for premium short-form content (never validated)\n• Approach: High-budget professional content in 10-minute episodes\n• Benefits: Premium quality, mobile-optimized, quick consumption\n• Competition: Severely underestimated YouTube, TikTok, Instagram, Netflix',
        '**Limited Testing**: Downloaded strongly initially due to massive marketing spend, but high churn rate after free trials. Never tested whether people actually wanted professional short-form content vs. user-generated content they could share.',
        '**The Results**: Only 500,000 paying subscribers at peak (target was 7.4 million). High churn rate after free trials ended. Low user engagement and retention. Shut down after just 6 months, losing $1.75+ billion investment.',
        '**Critical Lessons**: Large funding doesn\'t replace MVP validation—money can\'t buy product-market fit. Market timing matters (COVID killed commute use case). User behavior assumptions need real-world testing. Professional content doesn\'t always beat user-generated content. Platform preferences are deeply ingrained and hard to change. Should have started with small MVP to test core assumptions.'
      ]
    }],
    ['case-google-glass', {
      title: 'Google Glass: When Technology Meets Society',
      content: [
        '**The Vision**: Google Glass aimed to create mainstream augmented reality wearable computing. Launched Explorer Program in 2013 at $1,500, envisioning a future where information overlay enhanced daily life.',
        '**The MVP Approach**: Released Glass to selected developers and early adopters through invitation-only Explorer Program before mass market release. This was meant to be the MVP phase but missed critical social validation.',
        '**Misaligned JTBD**:\nIntended Job: "When I want information or need to capture moments, I want hands-free computing, so I can stay connected while remaining present."\nActual Issues:\n• Overestimated need for constant information access\n• Ignored social discomfort and privacy concerns\n• Underestimated negative social perception ("Glasshole" phenomenon)',
        '**Incomplete NABC**:\n• Need: ASSUMED universal desire for ambient computing\n• Approach: Head-mounted display with voice and touch\n• Benefits: Hands-free computing, instant information, POV recording\n• Competition: Underestimated satisfaction with smartphones and smartwatches (less obtrusive)',
        '**Social Acceptance Failure**: High initial interest from tech enthusiasts but strong negative public reaction. Privacy concerns (always-on camera), social stigma (obvious when recording), limited practical use cases emerged, etiquette questions in social settings.',
        '**The Results**: Explorer Program had participation but public backlash was severe. Banned in bars, restaurants, movie theaters. Media coined "Glasshole" term for users. Consumer version canceled in 2015. Pivoted to enterprise use only.',
        '**Critical Lessons**: Social acceptance is crucial for wearable technology—technical capabilities mean nothing if people won\'t wear it. Privacy concerns can override all other benefits. Technology readiness ≠ market readiness. Explorer programs need broader social context testing, not just tech enthusiast feedback. Some technologies are "before their time" but may never have their time if social barriers are fundamental.'
      ]
    }],
    ['case-segway', {
      title: 'Segway: Revolutionary Technology, Limited Adoption',
      content: [
        '**The Promise**: Launched in 2001 as revolutionary personal transportation device. Inventor Dean Kamen and investors (including Steve Jobs initially) believed it would transform cities. Promised to replace cars for short trips.',
        '**The MVP Problem**: Developed full product with extensive R&D before launch, with limited real-world testing outside controlled environments. Massive hype before launch created unrealistic expectations.',
        '**Misunderstood JTBD**:\nAssumed Job: "When I need to travel short distances in cities, I want efficient personal transportation, so I can move faster than walking while avoiding car traffic."\nActual Problems:\n• Overestimated urban transportation pain points (walking wasn\'t that bad)\n• Ignored embarrassment and safety concerns\n• Underestimated social perception of riders',
        '**Overconfident NABC**:\n• Need: ASSUMED universal desire for personal transportation improvement\n• Approach: Gyroscopic self-balancing electric platform\n• Benefits: Faster than walking, no parking, environmentally friendly\n• Competition: Severely underestimated satisfaction with walking, bikes, public transit',
        '**Real-World Reality**: High price point ($5,000) limited market access. Learning curve and safety concerns deterred adoption. Social perception issues (looked silly to most people). Infrastructure wasn\'t designed for Segways (sidewalk? bike lane? street?). Weather limitations (rain, snow unusable).',
        '**The Results**: Projected 100,000 units first year, actually sold only 6,000—94% below projection. Never achieved mainstream personal transportation adoption. Found niche success in tourism and security markets. Company eventually acquired after years of struggles.',
        '**Critical Lessons**: Revolutionary technology doesn\'t guarantee market acceptance—people need to actually want it. High development costs can prevent MVP iteration and course correction. Real-world usage differs dramatically from controlled testing. Infrastructure and social factors massively affect transportation adoption. Sometimes the "problem" you\'re solving isn\'t actually a problem people have. Should have tested with real users in real environments early, at much smaller scale.'
      ]
    }]
  ]);

  openKioskMode(sectionId: string): void {
    const section = this.frameworkSections.get(sectionId);
    if (section) {
      const allSections = Array.from(this.frameworkSections.entries()).map(([id, data]) => ({
        id,
        title: data.title,
        text: data.content.join('\n\n')
      }));
      
      const currentIndex = allSections.findIndex(s => s.id === sectionId);
      this.kioskService.openKioskModeWithNavigation(allSections, currentIndex);
    }
  }
}
