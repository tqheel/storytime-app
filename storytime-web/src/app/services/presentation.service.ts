import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PresentationSlide {
  content: string;
  markdown?: boolean;
}

export interface PresentationData {
  title: string;
  slides: PresentationSlide[];
}

export interface PresentationProgress {
  currentSlide: number;
  totalSlides: number;
  percentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private isPresentationModeSubject = new BehaviorSubject<boolean>(false);
  private presentationDataSubject = new BehaviorSubject<PresentationData | null>(null);
  private progressSubject = new BehaviorSubject<PresentationProgress>({
    currentSlide: 1,
    totalSlides: 0,
    percentage: 0
  });

  public isPresentationMode$ = this.isPresentationModeSubject.asObservable();
  public presentationData$ = this.presentationDataSubject.asObservable();
  public progress$ = this.progressSubject.asObservable();

  openPresentation(data: PresentationData): void {
    this.presentationDataSubject.next(data);
    this.isPresentationModeSubject.next(true);
    
    // Initialize progress
    this.updateProgress(1, data.slides.length);
    
    // Prevent body scroll when presentation mode is active
    document.body.style.overflow = 'hidden';
  }

  closePresentation(): void {
    this.isPresentationModeSubject.next(false);
    this.presentationDataSubject.next(null);
    
    // Restore body scroll
    document.body.style.overflow = '';
  }

  updateProgress(currentSlide: number, totalSlides: number): void {
    const percentage = totalSlides > 0 ? Math.round((currentSlide / totalSlides) * 100) : 0;
    this.progressSubject.next({
      currentSlide,
      totalSlides,
      percentage
    });
  }

  get isPresentationMode(): boolean {
    return this.isPresentationModeSubject.value;
  }

  get presentationData(): PresentationData | null {
    return this.presentationDataSubject.value;
  }

  get progress(): PresentationProgress {
    return this.progressSubject.value;
  }
}
