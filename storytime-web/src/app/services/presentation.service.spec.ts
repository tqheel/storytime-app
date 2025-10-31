import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PresentationService, PresentationData } from './presentation.service';

describe('PresentationService', () => {
  let service: PresentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(PresentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with presentation mode off', (done) => {
    service.isPresentationMode$.subscribe(isActive => {
      expect(isActive).toBe(false);
      done();
    });
  });

  it('should open presentation mode with data', (done) => {
    const testData: PresentationData = {
      title: 'Test Presentation',
      slides: [
        { content: '<h1>Slide 1</h1>', markdown: false },
        { content: '<h1>Slide 2</h1>', markdown: false }
      ]
    };

    service.openPresentation(testData);

    service.isPresentationMode$.subscribe(isActive => {
      if (isActive) {
        expect(isActive).toBe(true);
        expect(document.body.style.overflow).toBe('hidden');
        done();
      }
    });
  });

  it('should set presentation data when opening', (done) => {
    const testData: PresentationData = {
      title: 'Test Presentation',
      slides: [
        { content: '<h1>Slide 1</h1>', markdown: false }
      ]
    };

    service.openPresentation(testData);

    service.presentationData$.subscribe(data => {
      if (data) {
        expect(data.title).toBe('Test Presentation');
        expect(data.slides.length).toBe(1);
        done();
      }
    });
  });

  it('should initialize progress correctly when opening', (done) => {
    const testData: PresentationData = {
      title: 'Test Presentation',
      slides: [
        { content: '<h1>Slide 1</h1>', markdown: false },
        { content: '<h1>Slide 2</h1>', markdown: false },
        { content: '<h1>Slide 3</h1>', markdown: false }
      ]
    };

    service.openPresentation(testData);

    service.progress$.subscribe(progress => {
      if (progress.totalSlides > 0) {
        expect(progress.currentSlide).toBe(1);
        expect(progress.totalSlides).toBe(3);
        expect(progress.percentage).toBe(33);
        done();
      }
    });
  });

  it('should close presentation mode', (done) => {
    const testData: PresentationData = {
      title: 'Test Presentation',
      slides: [{ content: '<h1>Slide 1</h1>', markdown: false }]
    };

    service.openPresentation(testData);
    service.closePresentation();

    service.isPresentationMode$.subscribe(isActive => {
      if (!isActive) {
        expect(isActive).toBe(false);
        expect(document.body.style.overflow).toBe('');
        done();
      }
    });
  });

  it('should update progress correctly', (done) => {
    service.updateProgress(2, 5);

    service.progress$.subscribe(progress => {
      if (progress.currentSlide === 2) {
        expect(progress.currentSlide).toBe(2);
        expect(progress.totalSlides).toBe(5);
        expect(progress.percentage).toBe(40);
        done();
      }
    });
  });

  it('should handle zero total slides in progress calculation', (done) => {
    service.updateProgress(1, 0);

    service.progress$.subscribe(progress => {
      if (progress.totalSlides === 0) {
        expect(progress.percentage).toBe(0);
        done();
      }
    });
  });

  it('should provide synchronous access to presentation mode state', () => {
    expect(service.isPresentationMode).toBe(false);
    
    const testData: PresentationData = {
      title: 'Test',
      slides: [{ content: '<h1>Test</h1>', markdown: false }]
    };
    service.openPresentation(testData);
    
    expect(service.isPresentationMode).toBe(true);
  });

  it('should provide synchronous access to presentation data', () => {
    expect(service.presentationData).toBeNull();
    
    const testData: PresentationData = {
      title: 'Test',
      slides: [{ content: '<h1>Test</h1>', markdown: false }]
    };
    service.openPresentation(testData);
    
    expect(service.presentationData).toEqual(testData);
  });

  it('should provide synchronous access to progress', () => {
    const progress = service.progress;
    expect(progress.currentSlide).toBe(1);
    expect(progress.totalSlides).toBe(0);
    expect(progress.percentage).toBe(0);
  });
});
