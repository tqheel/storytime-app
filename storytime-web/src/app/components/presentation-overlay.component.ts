import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PresentationService, PresentationData } from '../services/presentation.service';
import { MarkdownService } from '../services/markdown.service';
import Reveal from 'reveal.js';
import DOMPurify from 'dompurify';

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
  private revealInstance: Reveal.Api | null = null;
  private initialized = false;
  private presentationDataSubscription?: Subscription;
  private eventListenerAttached = false;

  constructor(
    public presentationService: PresentationService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    // Subscribe to presentation data changes and store subscription
    this.presentationDataSubscription = this.presentationService.presentationData$.subscribe(data => {
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
    // Unsubscribe to prevent memory leak
    if (this.presentationDataSubscription) {
      this.presentationDataSubscription.unsubscribe();
    }
    this.destroyReveal();
    // Ensure event listener is removed
    this.removeKeyboardListener();
  }

  private initializePresentation(data: PresentationData): void {
    // Use requestAnimationFrame for better DOM readiness
    requestAnimationFrame(() => {
      const slidesContainer = document.querySelector('.reveal .slides');
      if (!slidesContainer) return;

      // Clear existing slides
      slidesContainer.innerHTML = '';

      // Create slides
      data.slides.forEach((slide) => {
        const section = document.createElement('section');
        
        if (slide.markdown) {
          // Parse markdown content (already sanitized in MarkdownService)
          const htmlContent = this.markdownService.parseToString(slide.content);
          section.innerHTML = htmlContent;
        } else {
          // Always sanitize HTML content to prevent XSS
          const sanitizedContent = DOMPurify.sanitize(slide.content);
          section.innerHTML = sanitizedContent;
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
    });
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
      this.revealInstance!.on('slidechanged', (event: any) => {
        const currentSlide = event.indexh + 1;
        this.presentationService.updateProgress(currentSlide, totalSlides);
      });

      // Listen for ESC key to close presentation
      this.revealInstance!.on('paused', () => {
        // Optional: handle pause state
      });

      // Add keyboard listener only if not already attached
      this.addKeyboardListener();
    }).catch((error) => {
      // Handle Reveal.js initialization errors
      console.error('Failed to initialize Reveal.js:', error);
      // Notify user of error
      alert('Failed to load presentation. Please try again.');
      this.closePresentation();
    });
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.presentationService.isPresentationMode) {
      this.closePresentation();
    }
  };

  private addKeyboardListener(): void {
    // Remove existing listener before adding to prevent duplicates
    if (this.eventListenerAttached) {
      this.removeKeyboardListener();
    }
    document.addEventListener('keydown', this.handleKeyDown);
    this.eventListenerAttached = true;
  }

  private removeKeyboardListener(): void {
    if (this.eventListenerAttached) {
      document.removeEventListener('keydown', this.handleKeyDown);
      this.eventListenerAttached = false;
    }
  }

  private destroyReveal(): void {
    if (this.revealInstance) {
      this.revealInstance.destroy();
      this.revealInstance = null;
    }
    this.removeKeyboardListener();
  }

  closePresentation(): void {
    this.destroyReveal();
    this.presentationService.closePresentation();
  }
}
