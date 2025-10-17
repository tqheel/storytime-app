import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KioskService } from '../services/kiosk.service';
import { KioskOverlayComponent } from '../components/kiosk-overlay.component';

interface MvpSection {
  title: string;
  content: string[];
}

@Component({
  selector: 'app-mvp-story',
  imports: [RouterLink, CommonModule, KioskOverlayComponent],
  template: `
    <div class="mvp-story-container">
      <header class="mvp-header">
        <h1 class="mvp-title">The Story of Building Something Meaningful</h1>
        <p class="mvp-subtitle">Understanding Minimum Viable Product Through Fred Rogers' Gentle Wisdom</p>
        <div class="mvp-nav">
          <a routerLink="/home" class="mvp-back-btn">
            ← Back to Home
          </a>
        </div>
      </header>

      <section class="mvp-introduction">
        <div class="intro-card">
          <h2 class="intro-title">Hello, Neighbor!</h2>
          <p class="intro-text">
            Today, we're going to talk about something really special - how people build new things in a thoughtful, caring way. 
            We call it a "Minimum Viable Product," or MVP for short. But don't let those big words worry you. 
            It's really just about starting small and learning as you go.
          </p>
        </div>
      </section>

      <section class="mvp-main-content">
        <h2 class="section-header">The Journey of MVP</h2>
        
        <div class="cards-grid">
          <!-- What is MVP Card -->
          <div class="mvp-card" (click)="openKioskMode('what-is-mvp')">
            <div class="card-icon">🌱</div>
            <h3 class="card-title">What is an MVP?</h3>
            <p class="card-preview">
              Imagine you want to build a tree house for your friends. You could spend months planning every detail...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Four Key Parts Card -->
          <div class="mvp-card" (click)="openKioskMode('four-parts')">
            <div class="card-icon">🧩</div>
            <h3 class="card-title">The Four Key Parts</h3>
            <p class="card-preview">
              Minimum, Viable, Product, and Learning - each part has its own special meaning...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- The Journey Card -->
          <div class="mvp-card" (click)="openKioskMode('the-journey')">
            <div class="card-icon">🚶</div>
            <h3 class="card-title">The MVP Journey</h3>
            <p class="card-preview">
              Seven steps to bring your dream to life, one thoughtful step at a time...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Real Examples Card -->
          <div class="mvp-card" (click)="openKioskMode('real-examples')">
            <div class="card-icon">✈️</div>
            <h3 class="card-title">Real World Examples</h3>
            <p class="card-preview">
              From the Wright Brothers to Instagram, see how MVP changed the world...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Why MVP is Kind Card -->
          <div class="mvp-card" (click)="openKioskMode('why-kind')">
            <div class="card-icon">💝</div>
            <h3 class="card-title">Why MVP Is Kind</h3>
            <p class="card-preview">
              MVP respects people's time, your energy, and makes room for mistakes...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Common Questions Card -->
          <div class="mvp-card" (click)="openKioskMode('questions')">
            <div class="card-icon">❓</div>
            <h3 class="card-title">Common Questions</h3>
            <p class="card-preview">
              What if people don't like it? How do I know when it's ready?...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- The MVP Mindset Card -->
          <div class="mvp-card" (click)="openKioskMode('mindset')">
            <div class="card-icon">🧠</div>
            <h3 class="card-title">The MVP Mindset</h3>
            <p class="card-preview">
              Be curious, be humble, be patient, and be brave...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Conclusion Card -->
          <div class="mvp-card" (click)="openKioskMode('conclusion')">
            <div class="card-icon">🏡</div>
            <h3 class="card-title">What Will You Build?</h3>
            <p class="card-preview">
              You don't have to be perfect to be helpful. You just have to be real, be kind, and be willing to learn...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>
        </div>
      </section>

      <section class="mvp-closing">
        <div class="closing-card">
          <p class="closing-quote">
            "You don't have to be perfect to be helpful. You just have to be real, be kind, and be willing to learn."
          </p>
          <p class="closing-attribution">— Inspired by Fred Rogers</p>
        </div>
      </section>

      <!-- Kiosk Mode Overlay -->
      <app-kiosk-overlay></app-kiosk-overlay>
    </div>
  `,
  styleUrls: ['./mvp-story.component.css', '../shared/kiosk.css']
})
export class MvpStoryComponent {
  
  constructor(private kioskService: KioskService) {}

  private mvpSections = new Map<string, MvpSection>([
    ['what-is-mvp', {
      title: 'What is an MVP?',
      content: [
        'Imagine you want to build a tree house for your friends. You could spend months and months planning every detail - the color, the rope ladder, the windows, the secret hideout, all the special features. But what if, when you finally finish, your friends don\'t like climbing high up in trees? All that time and work might have gone to waste.',
        'An MVP is like building just the platform first - the simplest, safest version that lets your friends experience what it\'s like to be up in the tree. Then you can ask them: "Do you like it here? What would make it better?" And they\'ll tell you exactly what they want to see next.',
        'Fred Rogers used to say, "I like to take my time." And that\'s exactly what an MVP helps us do - take our time, but in a smart way. Instead of guessing what people need, we build something small, show it to them, and listen carefully to what they tell us.'
      ]
    }],
    ['four-parts', {
      title: 'The Four Key Parts of MVP',
      content: [
        '**Minimum - Keep It Simple**: "Minimum" means the smallest, simplest version that still works. Think about a bicycle. At minimum, a bicycle needs wheels, pedals, and handlebars. It doesn\'t need a bell, or a basket, or streamers - those are nice, but they\'re not minimum.',
        '**Viable - Make It Useful**: "Viable" is a gentle way of saying "it works well enough to be useful." A bicycle with square wheels isn\'t viable - you can\'t really ride it. But a simple bicycle with round wheels? That\'s viable! Someone can ride it, enjoy it, and tell you what else they might want.',
        '**Product - Something People Can Use**: A "product" is something you make for others to use. It could be a toy, a tool, a website, or an app. The important thing is that it\'s real - not just an idea or a drawing, but something people can actually touch, see, or interact with.',
        '**Learning - The Secret Ingredient**: Here\'s what makes MVP truly special: it\'s not just about building something small. It\'s about learning. Every person who uses your MVP teaches you something valuable. They show you what works, what doesn\'t, and what you should build next.'
      ]
    }],
    ['the-journey', {
      title: 'The MVP Journey: Seven Steps',
      content: [
        '**Step 1 - Dream Your Dream**: First, you have an idea - something you want to create that will help people. Maybe it\'s a new way to organize photos, or a game that teaches math, or a tool that helps people find good books. This is your dream, and dreams are important.',
        '**Step 2 - Find the Heart**: Next, you ask yourself: "What\'s the most important part of my dream? What\'s the one thing that, if I built it, would start to help people right away?" That\'s the heart of your MVP.',
        '**Step 3 - Build Something Real**: Then comes the fun part - you actually build it! But remember, you\'re not building everything. You\'re building that heart - that minimum viable version.',
        '**Step 4 - Share with Real Neighbors**: This is the brave part. You share your creation with real people. Not hundreds of people at first - maybe just five or ten people who might find it useful.',
        '**Step 5 - Listen and Learn**: You ask questions: "What did you like? What was confusing? What do you wish it could do?" And here\'s the key - you really listen.',
        '**Step 6 - Decide What\'s Next**: Based on what you learned, you make a decision. Maybe you build the next small piece. Maybe you fix something that wasn\'t working right. All of these are okay!',
        '**Step 7 - Repeat with Care**: You keep going through this cycle - build a little, share a little, learn a lot. Each time, your creation gets better because real people are helping you understand what they need.'
      ]
    }],
    ['real-examples', {
      title: 'Real World Examples',
      content: [
        '**The First Airplane**: The Wright Brothers didn\'t try to build a jumbo jet on their first try. They built gliders - simple flying machines with no engines. They learned how wings work. Then they added a small engine. Their first flight lasted just 12 seconds! But it was viable - it proved flying was possible. That was their MVP.',
        '**The Online Bookstore**: When Amazon started, it only sold books. Not clothes, not electronics, not groceries - just books. Jeff Bezos wanted to learn if people would buy things on the internet. Books were his MVP. Once he learned that it worked, he slowly added more things, one step at a time.',
        '**The Photo Sharing App**: Instagram started as an app called Burbn that did lots of things - you could check in to places, make plans with friends, and share photos. But the creators noticed everyone really loved just one feature: sharing photos with cool filters. So they removed almost everything else and focused on making photo sharing perfect. That simplified MVP became Instagram.'
      ]
    }],
    ['why-kind', {
      title: 'Why MVP Is Kind',
      content: [
        '**It Respects People\'s Time**: When you build an MVP, you\'re not asking people to wait years for something perfect. You\'re giving them something useful now, even if it\'s simple. That\'s respectful.',
        '**It Respects Your Energy**: You\'re not spending years building something that might not be what people need. You\'re being smart with your time and energy, learning as you go.',
        '**It Creates Connection**: Every time someone uses your MVP and gives you feedback, you\'re having a conversation. You\'re building a relationship. You\'re learning about your neighbors and what matters to them.',
        '**It Makes Room for Mistakes**: We all make mistakes, and that\'s okay. MVP helps us make small mistakes we can learn from, instead of big mistakes that take years to fix. As Mr. Rogers would say, "Mistakes are part of growing."'
      ]
    }],
    ['questions', {
      title: 'Common Questions',
      content: [
        '**Isn\'t it risky to show something unfinished?**: It\'s actually riskier not to! Imagine building something for a year without showing anyone, only to discover they don\'t need it. That would be heartbreaking. With MVP, you\'re being brave in a smart way.',
        '**What if people don\'t like it?**: That\'s actually good news! If people don\'t like your MVP, they\'re helping you - they\'re telling you important information. Maybe you need to change something, or maybe you need to find different people who need what you\'re building.',
        '**How do I know when my MVP is ready?**: Your MVP is ready when it does one thing well enough that someone can use it and give you meaningful feedback. It doesn\'t have to be pretty or perfect. It just has to be real and useful enough to start the conversation.'
      ]
    }],
    ['mindset', {
      title: 'The MVP Mindset',
      content: [
        '**Be Curious**: Approach your MVP with curiosity, not certainty. You\'re exploring, not proving you\'re right.',
        '**Be Humble**: Remember that the people using your MVP know things you don\'t know. They understand their needs better than you do. Listen to them with respect.',
        '**Be Patient**: Good things take time, but they don\'t have to take forever. MVP helps you be patient in an active way - you\'re learning and growing, step by step.',
        '**Be Brave**: It takes courage to show your work before it\'s perfect. But that courage opens the door to real learning and real connection.'
      ]
    }],
    ['conclusion', {
      title: 'What Will You Build, Neighbor?',
      content: [
        'An MVP is really about respect - respect for the people you want to help, respect for your own time and energy, and respect for the process of learning. It\'s about taking your time in a thoughtful way, listening carefully, and building something that truly matters.',
        'Just like Mr. Rogers built his neighborhood one day at a time, always listening to children and learning what they needed, you can build your creations one small step at a time, always listening to your neighbors and learning what they need.',
        'Remember: you don\'t have to be perfect to be helpful. You just have to be real, be kind, and be willing to learn.',
        'What will you build today, neighbor?'
      ]
    }]
  ]);

  openKioskMode(sectionId: string): void {
    const section = this.mvpSections.get(sectionId);
    if (section) {
      // Convert the section content array into a format the kiosk service can handle
      // We'll pass all sections to enable navigation
      const allSections = Array.from(this.mvpSections.entries()).map(([id, data]) => ({
        id,
        title: data.title,
        text: data.content.join('\n\n')
      }));
      
      // Find the index of the current section
      const currentIndex = allSections.findIndex(s => s.id === sectionId);
      
      // Open kiosk mode with navigation support
      this.kioskService.openKioskModeWithNavigation(allSections, currentIndex);
    }
  }
}
