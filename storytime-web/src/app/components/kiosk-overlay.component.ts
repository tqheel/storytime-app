import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KioskService } from '../services/kiosk.service';

@Component({
  selector: 'app-kiosk-overlay',
  imports: [CommonModule],
  template: `
    <div *ngIf="kioskService.isKioskMode$ | async" 
         class="kiosk-overlay" 
         (click)="kioskService.closeKioskMode()" 
         (keydown.escape)="kioskService.closeKioskMode()" 
         tabindex="0">
      <div class="kiosk-content" (click)="$event.stopPropagation()">
        <button class="kiosk-close-btn" 
                (click)="kioskService.closeKioskMode()" 
                aria-label="Close kiosk mode">×</button>
        
        <!-- Navigation Arrow - Left -->
        <button *ngIf="kioskService.canNavigatePrevious" 
                class="kiosk-nav-btn kiosk-nav-left"
                (click)="kioskService.navigateToPrevious()"
                aria-label="Previous section">
          ←
        </button>
        
        <!-- Navigation Arrow - Right -->
        <button *ngIf="kioskService.canNavigateNext" 
                class="kiosk-nav-btn kiosk-nav-right"
                (click)="kioskService.navigateToNext()"
                aria-label="Next section">
          →
        </button>
        
        <div class="kiosk-card">
          <h1 class="kiosk-title" [innerHTML]="(kioskService.kioskData$ | async)?.title"></h1>
          <p class="kiosk-text" [innerHTML]="(kioskService.kioskData$ | async)?.text"></p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../shared/kiosk.css']
})
export class KioskOverlayComponent {
  constructor(public kioskService: KioskService) {}
}