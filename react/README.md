# @jojovms/react-confetti-cannon

React wrapper for the Confetti Cannon library.

## Installation
```bash
npm install @jojovms/react-confetti-cannon
```

## Usage

### Hook
The idiomatic way to use confetti in functional components.

```jsx
import { useConfetti } from '@jojovms/react-confetti-cannon';

const CelebrateButton = () => {
  const { fire } = useConfetti();

  return (
    <button onClick={() => fire({ particleCount: 100 })}>
      Click Me!
    </button>
  );
};
```

### Component
Declarative component usage.

```jsx
import { ConfettiCannon } from '@jojovms/react-confetti-cannon';

const App = () => (
  <>
    {/* Fire on mount */}
    <ConfettiCannon fireOnMount={true} particleCount={200} />

    {/* Wrap elements to trigger on interaction */}
    <ConfettiCannon trigger="hover" colors={['#ff0000', '#00ff00']}>
        <button>Hover Me!</button>
    </ConfettiCannon>

    <ConfettiCannon trigger="click">
        <button>Click Me!</button>
    </ConfettiCannon>

    <h1>Happy Birthday!</h1>
  </>
);
```

### Direct Access
You can also access the singleton directly.

```jsx
import { confetto } from '@jojovms/react-confetti-cannon';

// Attach globally
confetto.attach('#special-element');
```

## API Reference

### Component Props (`<ConfettiCannon />`)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fireOnMount` | boolean | `true` (unless children present) | Whether to fire automatically on mount. |
| `trigger` | `'click' \| 'hover' \| 'manual'` | `'click'` | Event that triggers the confetti (when wrapping children). |
| `children` | ReactNode | - | Elements to wrap. |
| `className` | string | - | Class for the wrapper container. |

### Options (`ConfettiOptions`)
These props can be passed to `<ConfettiCannon />` or `fire()`.

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

