import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface KioskData {
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class KioskService {
  private isKioskModeSubject = new BehaviorSubject<boolean>(false);
  private kioskDataSubject = new BehaviorSubject<KioskData>({ title: '', text: '' });

  public isKioskMode$ = this.isKioskModeSubject.asObservable();
  public kioskData$ = this.kioskDataSubject.asObservable();

  constructor() {
    // Listen for ESC key globally when kiosk mode is active
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.isKioskModeSubject.value) {
        this.closeKioskMode();
      }
    });
  }

  openKioskMode(data: KioskData): void {
    this.kioskDataSubject.next(data);
    this.isKioskModeSubject.next(true);
    
    // Prevent body scroll when kiosk mode is active
    document.body.style.overflow = 'hidden';
    
    // Focus on the kiosk overlay for keyboard navigation
    setTimeout(() => {
      const kioskOverlay = document.querySelector('.kiosk-overlay') as HTMLElement;
      if (kioskOverlay) {
        kioskOverlay.focus();
      }
    }, 0);
  }

  closeKioskMode(): void {
    this.isKioskModeSubject.next(false);
    // Restore body scroll
    document.body.style.overflow = '';
  }

  get isKioskMode(): boolean {
    return this.isKioskModeSubject.value;
  }

  get kioskData(): KioskData {
    return this.kioskDataSubject.value;
  }
}