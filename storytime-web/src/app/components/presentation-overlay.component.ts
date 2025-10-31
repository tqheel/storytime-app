import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from '../services/presentation.service';
import { MarkdownService } from '../services/markdown.service';
import Reveal from 'reveal.js';

@Component({
  selector: 'app-presentation-overlay',
  imports: [CommonModule],
  template: `
    <div *ngIf="presentationService.isPresentationMode$ | async" 
         class="presentation-overlay">
      <button class="presentation-close-btn" 
              (click)="closePresentation()" 
              aria-label="Close presentation mode">×</button>
      
      <!-- Reveal.js Container -->
      <div class="reveal">
        <div class="slides" #slidesContainer></div>
      </div>
      
      <!-- Progress Bar -->
      <div class="presentation-progress-bar">
        <div class="progress-info">
          <span class="progress-current">{{ (presentationService.progress$ | async)?.currentSlide }}</span>
          <span class="progress-separator">of</span>
          <span class="progress-total">{{ (presentationService.progress$ | async)?.totalSlides }}</span>
          <span class="progress-percentage">
            ({{ (presentationService.progress$ | async)?.percentage }}%)
          </span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" 
               [style.width.%]="(presentationService.progress$ | async)?.percentage"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../shared/presentation.css']
})
export class PresentationOverlayComponent implements OnInit, OnDestroy, AfterViewInit {
  private revealInstance: any = null;
  private initialized = false;

  constructor(
    public presentationService: PresentationService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    // Subscribe to presentation data changes
    this.presentationService.presentationData$.subscribe(data => {
      if (data && this.initialized) {
        this.initializePresentation(data);
      }
    });
  }

  ngAfterViewInit(): void {
    this.initialized = true;
    const data = this.presentationService.presentationData;
    if (data) {
      this.initializePresentation(data);
    }
  }

  ngOnDestroy(): void {
    this.destroyReveal();
  }

  private initializePresentation(data: any): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      const slidesContainer = document.querySelector('.reveal .slides');
      if (!slidesContainer) return;

      // Clear existing slides
      slidesContainer.innerHTML = '';

      // Create slides
      data.slides.forEach((slide: any) => {
        const section = document.createElement('section');
        
        if (slide.markdown) {
          // Parse markdown content
          const htmlContent = this.markdownService.parseToString(slide.content);
          section.innerHTML = htmlContent;
        } else {
          section.innerHTML = slide.content;
        }
        
        slidesContainer.appendChild(section);
      });

      // Initialize or sync Reveal.js
      if (this.revealInstance) {
        this.revealInstance.sync();
        this.revealInstance.slide(0);
      } else {
        this.initializeReveal(data.slides.length);
      }
    }, 100);
  }

  private initializeReveal(totalSlides: number): void {
    // Initialize Reveal.js
    this.revealInstance = new Reveal({
      embedded: false,
      controls: true,
      controlsTutorial: false,
      controlsLayout: 'bottom-right',
      progress: false, // We use custom progress bar
      slideNumber: false,
      hash: false,
      history: false,
      keyboard: true,
      overview: false,
      center: true,
      touch: true,
      loop: false,
      rtl: false,
      navigationMode: 'linear',
      shuffle: false,
      fragments: true,
      fragmentInURL: false,
      help: false,
      pause: false,
      showNotes: false,
      autoPlayMedia: null,
      preloadIframes: null,
      transition: 'slide',
      transitionSpeed: 'default',
      backgroundTransition: 'fade',
      viewDistance: 3,
      mobileViewDistance: 2,
      display: 'block',
      hideInactiveCursor: true,
      hideCursorTime: 5000,
    });

    this.revealInstance.initialize().then(() => {
      // Update progress on slide change
      this.revealInstance.on('slidechanged', (event: any) => {
        const currentSlide = event.indexh + 1;
        this.presentationService.updateProgress(currentSlide, totalSlides);
      });

      // Listen for ESC key to close presentation
      this.revealInstance.on('paused', () => {
        // Optional: handle pause state
      });

      // Handle keyboard events for ESC
      document.addEventListener('keydown', this.handleKeyDown);
    });
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.presentationService.isPresentationMode) {
      this.closePresentation();
    }
  };

  private destroyReveal(): void {
    if (this.revealInstance) {
      this.revealInstance.destroy();
      this.revealInstance = null;
    }
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  closePresentation(): void {
    this.destroyReveal();
    this.presentationService.closePresentation();
  }
}
