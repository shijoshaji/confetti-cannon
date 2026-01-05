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

## API Reference

### Directive Inputs (`[confetti]`)
| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `confetti` | `ConfettiOptions` | `{}` | Configuration object. |
| `confettiTrigger` | `'click' \| 'hover' \| 'manual'` | `'click'` | Event trigger. |

### Options (`ConfettiOptions`)
Pass these properties in the `[confetti]` object.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `particleCount` | number | 50 | Number of particles |
| `spread` | number | 45 | Angle spread in degrees |
| `startVelocity` | number | 45 | Initial speed |
| `decay` | number | 0.9 | How fast particles slow down |
| `gravity` | number | 1 | Gravity factor |
| `colors` | string[] | [...] | Array of hex colors |
| `zIndex` | number | 100 | Canvas z-index |
| `origin` | `{x, y}` | - | Origin point (0-1) |
| `angle` | number | 90 | Direction angle (90 is up) |

