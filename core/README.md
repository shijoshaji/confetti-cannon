# @jojovms/confetti-cannon-core

A lightweight, zero-dependency confetti explosion library.

## Installation
```bash
npm install @jojovms/confetti-cannon-core
```

## Usage

### Basic Fire
```javascript
import { confetto } from '@jojovms/confetti-cannon-core';

// Simple explosion
confetto.fire();

// Custom configuration
confetto.fire({
  particleCount: 100,
  spread: 70,
  origin: { x: 0.5, y: 1 }, // Bottom center
  colors: ['#ff0000', '#00ff00', '#0000ff']
});
```

### Attach to Element
Easily bind confetti to user interactions.

```javascript
confetto.attach('#celebrate-btn', {
  on: 'click', // 'click', 'mouseover', 'mouseenter'
  particleCount: 50
});
```

## Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `particleCount` | number | 50 | Number of particles |
| `spread` | number | 45 | Angle spread in degrees |
| `startVelocity` | number | 45 | Initial speed |
| `decay` | number | 0.9 | How fast particles slow down |
| `gravity` | number | 1 | Gravity factor |
| `colors` | string[] | [...] | Array of hex colors |
| `zIndex` | number | 100 | Canvas z-index |
