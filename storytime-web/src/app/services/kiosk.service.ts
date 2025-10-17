import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface KioskData {
  title: string;
  text: string;
}

export interface KioskSection {
  id: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class KioskService {
  private isKioskModeSubject = new BehaviorSubject<boolean>(false);
  private kioskDataSubject = new BehaviorSubject<KioskData>({ title: '', text: '' });
  private kioskSectionsSubject = new BehaviorSubject<KioskSection[]>([]);
  private currentSectionIndexSubject = new BehaviorSubject<number>(0);

  public isKioskMode$ = this.isKioskModeSubject.asObservable();
  public kioskData$ = this.kioskDataSubject.asObservable();
  public kioskSections$ = this.kioskSectionsSubject.asObservable();
  public currentSectionIndex$ = this.currentSectionIndexSubject.asObservable();

  constructor() {
    // Listen for ESC key and arrow keys globally when kiosk mode is active
    document.addEventListener('keydown', (event) => {
      if (this.isKioskModeSubject.value) {
        if (event.key === 'Escape') {
          this.closeKioskMode();
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          this.navigateToPrevious();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          this.navigateToNext();
        }
      }
    });
  }

  openKioskMode(data: KioskData): void {
    this.kioskDataSubject.next(data);
    this.kioskSectionsSubject.next([]);
    this.currentSectionIndexSubject.next(0);
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

  openKioskModeWithNavigation(sections: KioskSection[], startIndex: number = 0): void {
    this.kioskSectionsSubject.next(sections);
    this.currentSectionIndexSubject.next(startIndex);
    
    // Set the initial data
    if (sections.length > 0 && startIndex >= 0 && startIndex < sections.length) {
      const currentSection = sections[startIndex];
      this.kioskDataSubject.next({
        title: currentSection.title,
        text: currentSection.text
      });
    }
    
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

  navigateToNext(): void {
    const sections = this.kioskSectionsSubject.value;
    const currentIndex = this.currentSectionIndexSubject.value;
    
    if (sections.length > 0 && currentIndex < sections.length - 1) {
      const newIndex = currentIndex + 1;
      this.currentSectionIndexSubject.next(newIndex);
      const nextSection = sections[newIndex];
      this.kioskDataSubject.next({
        title: nextSection.title,
        text: nextSection.text
      });
    }
  }

  navigateToPrevious(): void {
    const sections = this.kioskSectionsSubject.value;
    const currentIndex = this.currentSectionIndexSubject.value;
    
    if (sections.length > 0 && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      this.currentSectionIndexSubject.next(newIndex);
      const prevSection = sections[newIndex];
      this.kioskDataSubject.next({
        title: prevSection.title,
        text: prevSection.text
      });
    }
  }

  closeKioskMode(): void {
    this.isKioskModeSubject.next(false);
    this.kioskSectionsSubject.next([]);
    this.currentSectionIndexSubject.next(0);
    // Restore body scroll
    document.body.style.overflow = '';
  }

  get isKioskMode(): boolean {
    return this.isKioskModeSubject.value;
  }

  get kioskData(): KioskData {
    return this.kioskDataSubject.value;
  }

  get hasNavigation(): boolean {
    return this.kioskSectionsSubject.value.length > 0;
  }

  get canNavigateNext(): boolean {
    const sections = this.kioskSectionsSubject.value;
    const currentIndex = this.currentSectionIndexSubject.value;
    return sections.length > 0 && currentIndex < sections.length - 1;
  }

  get canNavigatePrevious(): boolean {
    const sections = this.kioskSectionsSubject.value;
    const currentIndex = this.currentSectionIndexSubject.value;
    return sections.length > 0 && currentIndex > 0;
  }
}