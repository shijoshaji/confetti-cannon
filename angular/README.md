# @jojovms/angular-confetti-cannon

Angular directive and service for the Confetti Cannon library.

## Installation
```bash
npm install @jojovms/angular-confetti-cannon
```

## Setup
Import the module in your `app.module.ts`:

```typescript
import { ConfettiModule } from '@jojovms/angular-confetti-cannon';

@NgModule({
  imports: [ConfettiModule]
})
export class AppModule { }
```

## Usage

### Directive (`[confetti]`)
The easiest way to add confetti to elements.

```html
<!-- Trigger on Click (default) -->
<button [confetti]="{ particleCount: 50 }">
  Celebrate
</button>

<!-- Trigger on Hover -->
<div 
  [confetti]="{ spread: 360, colors: ['#FFD700'] }" 
  confettiTrigger="hover">
  Hover Me
</div>
```

### Service
For programmatic control.

```typescript
import { Component } from '@angular/core';
import { ConfettiService } from '@jojovms/angular-confetti-cannon';

@Component({ ... })
export class MyComponent {
  constructor(private confetti: ConfettiService) {}

  trigger() {
    this.confetti.fire();
  }
}
```
