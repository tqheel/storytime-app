# Kiosk Mode Implementation Guide

## Overview
The Storytime App includes a reusable kiosk mode system that allows any story component to present content in full-screen, meeting-room-friendly format. This guide explains how to implement kiosk mode in new story components.

## Architecture
The kiosk system consists of three main parts:

1. **KioskService** (`src/app/services/kiosk.service.ts`) - Manages kiosk state globally
2. **KioskOverlayComponent** (`src/app/components/kiosk-overlay.component.ts`) - Reusable overlay component
3. **Shared CSS** (`src/app/shared/kiosk.css`) - Common kiosk styling

## Implementation Steps

### 1. Import Required Dependencies

In your story component, import the necessary dependencies:

```typescript
import { KioskService, KioskData } from '../services/kiosk.service';
import { KioskOverlayComponent } from '../components/kiosk-overlay.component';
```

### 2. Update Component Decorator

Add the required imports and CSS:

```typescript
@Component({
  selector: 'app-your-story',
  imports: [CommonModule, KioskOverlayComponent, /* other imports */],
  styleUrls: ['./your-story.component.css', '../shared/kiosk.css'],
  template: `
    <!-- Your story content -->
    
    <!-- Add the kiosk overlay -->
    <app-kiosk-overlay></app-kiosk-overlay>
  `
})
```

### 3. Inject KioskService

Add the service to your component constructor:

```typescript
export class YourStoryComponent {
  constructor(private kioskService: KioskService) {}
}
```

### 4. Create Content Data Map

Define your story content that can be displayed in kiosk mode:

```typescript
private contentData = new Map<string, KioskData>([
  ['content-id-1', { 
    title: 'Your Content Title',
    text: 'Your content description that will be displayed in large, readable format.'
  }],
  ['content-id-2', { 
    title: 'Another Section Title',
    text: 'Another section with detailed explanation...'
  }]
]);
```

### 5. Add Click Handlers to Content

Make your content clickable by adding click handlers:

```html
<div id="content-id-1" 
     class="story-content story-content-clickable" 
     (click)="openKioskMode('content-id-1')">
  <h3>Your Content Title</h3>
  <p>Your content description...</p>
</div>
```

### 6. Implement Click Handler Method

Add the method to handle opening kiosk mode:

```typescript
openKioskMode(contentId: string): void {
  const data = this.contentData.get(contentId);
  if (data) {
    this.kioskService.openKioskMode(data);
  }
}
```

## CSS Classes

### Available Shared Classes

- `.story-content-clickable` - Makes content appear clickable with hover effects
- `.kiosk-overlay` - Full-screen overlay (automatically applied)
- `.kiosk-content` - Main content container (automatically applied)
- `.kiosk-title` - Large title styling (automatically applied)
- `.kiosk-text` - Large text styling (automatically applied)

### Custom Styling

You can override kiosk styles in your component's CSS file. For example:

```css
/* Custom kiosk title color for your story */
.kiosk-title {
  color: var(--your-story-primary-color);
}

/* Custom hover effects for your content */
.your-story-content.story-content-clickable:hover {
  background: var(--your-story-hover-color);
}
```

## Example: Complete Implementation

Here's a minimal example of a complete story component with kiosk mode:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KioskService, KioskData } from '../services/kiosk.service';
import { KioskOverlayComponent } from '../components/kiosk-overlay.component';

@Component({
  selector: 'app-example-story',
  imports: [CommonModule, KioskOverlayComponent],
  styleUrls: ['./example-story.component.css', '../shared/kiosk.css'],
  template: `
    <div class="story-container">
      <h1>Example Story</h1>
      
      <div id="section-1" 
           class="story-section story-content-clickable" 
           (click)="openKioskMode('section-1')">
        <h2>First Section</h2>
        <p>This content becomes full-screen when clicked...</p>
      </div>
      
      <div id="section-2" 
           class="story-section story-content-clickable" 
           (click)="openKioskMode('section-2')">
        <h2>Second Section</h2>
        <p>Another clickable section...</p>
      </div>
    </div>
    
    <app-kiosk-overlay></app-kiosk-overlay>
  `
})
export class ExampleStoryComponent {
  private contentData = new Map<string, KioskData>([
    ['section-1', { 
      title: 'First Section: Introduction',
      text: 'This is the detailed content for the first section that will be displayed in large, readable format suitable for presentations.'
    }],
    ['section-2', { 
      title: 'Second Section: Details',
      text: 'This is the detailed content for the second section with all the important information expanded for easy viewing.'
    }]
  ]);

  constructor(private kioskService: KioskService) {}

  openKioskMode(contentId: string): void {
    const data = this.contentData.get(contentId);
    if (data) {
      this.kioskService.openKioskMode(data);
    }
  }
}
```

## Best Practices

1. **Content Mapping**: Keep your content data centralized in a Map for easy management
2. **Accessible IDs**: Use semantic IDs for your content sections
3. **Visual Feedback**: Always use the `story-content-clickable` class for clickable elements
4. **Responsive Content**: Write content that works well at large font sizes
5. **Testing**: Test kiosk mode on various screen sizes and devices

## Keyboard Navigation

The kiosk system automatically supports:
- **ESC key** - Closes kiosk mode
- **Click outside content** - Closes kiosk mode  
- **Close button (×)** - Closes kiosk mode

No additional setup required for these features.