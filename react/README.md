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

### Direct Access
You can also access the singleton directly.

```jsx
import { confettō } from '@jojovms/react-confetti-cannon';

// Attach globally
confettō.attach('#special-element');
```
