# Confetti Cannon (Confettō) 🎊

**Confettō** is a lightweight, framework-agnostic utility designed to add confetti effects to your applications. Whether you are using vanilla JavaScript, React, or Angular, Confettō helps you celebrate user achievements with style.

## 📦 Packages

This repository houses the following packages:

| Package | Description |
| :--- | :--- |
| **[`@jojovms/confetti-cannon-core`](./core)** | The core logic for the confetti effect. |
| **[`@jojovms/react-confetti-cannon`](./react)** | A React wrapper (hook & component) for easy integration. |
| **[`@jojovms/angular-confetti-cannon`](./angular)** | An Angular wrapper (service & directive) for seamless usage. |

## 🚀 Installation

Choose the package that fits your technology stack:

### Core (Vanilla JS)
```bash
npm install @jojovms/confetti-cannon-core
```

### React
```bash
npm install @jojovms/react-confetti-cannon
```

### Angular
```bash
npm install @jojovms/angular-confetti-cannon
```

## 🛠️ Usage

### Core (Vanilla JS)
```javascript
import { confettiCannon } from '@jojovms/confetti-cannon-core';

// Fire confetti!
confettiCannon.fire();

// Or customize it
confettiCannon.fire({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
```

### React
```jsx
import { ConfettiCannon } from '@jojovms/react-confetti-cannon';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <ConfettiCannon fireOnMount={true} />
    </div>
  );
}
```

### Angular
Import the module in your `app.module.ts`:

```typescript
import { ConfettiCannonModule } from '@jojovms/angular-confetti-cannon';

@NgModule({
  imports: [
    ConfettiCannonModule
  ],
  // ...
})
export class AppModule { }
```

Use the directive in your template:
```html
<lib-confetti-cannon></lib-confetti-cannon>
```

## 👨‍💻 Author

**Shijo Shaji**
- 🌐 Website: [shijoshaji.in](https://shijoshaji.in)
- 🐙 GitHub: [shijoshaji](https://github.com/shijoshaji)

## 📄 License

MIT
