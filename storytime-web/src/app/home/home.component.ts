import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
<div class="container">
  <header class="header">
    <h1 class="title">Storytime</h1>
    <p class="subtitle">Gentle narratives for complex topics</p>
  </header>

  <div class="main-layout">
    <!-- Main content area -->
    <div class="content-area">
      <div class="cards-grid">
        <a routerLink="/ai-vs-internet" class="story-card">
          <div class="card-emoji">🚋</div>
          <h2 class="card-title">AI vs Internet Adoption</h2>
          <p class="card-description">
            Discover the fascinating comparison between the Internet's adoption journey (1993-2015) and the meteoric rise of Generative AI (2022-2024). This interactive story uses beautiful visualizations to show how AI adoption is happening at unprecedented speed, reaching milestones in months that took the Internet years to achieve. Explore timeline narratives, user growth charts, and gain insights into what this rapid technological shift means for our future. Perfect for understanding the scale and implications of our current AI revolution through gentle, accessible storytelling.
          </p>
        </a>
      </div>
    </div>

    <!-- Right sidebar with Mr. Rogers -->
    <aside class="sidebar">
      <div class="rogers-portrait-section">
        <div class="rogers-portrait-container">
          <picture>
            <source 
              media="(max-width: 480px)" 
              srcset="mr-rogers-small.jpg"
              width="150"
              height="150"
            />
            <img 
              src="mr-rogers-optimized.jpg" 
              alt="Fred Rogers in his iconic red cardigan sweater, smiling warmly in the spirit of welcoming neighbors"
              class="rogers-portrait"
              loading="lazy"
              width="200" 
              height="200"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            />
          </picture>
          <!-- Fallback placeholder if image fails to load -->
          <div class="rogers-portrait-placeholder" style="display: none;"></div>
        </div>
        <p class="rogers-portrait-quote">
          "When we look for what's best in the person we happen to be with at the moment, 
          we're doing what we can to bring peace to our world."
        </p>
      </div>
    </aside>
  </div>
</div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
