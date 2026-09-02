# Zustand State Management Project

A React + Vite project demonstrating global state management using **Zustand** - a lightweight and scalable state management library for React.

## 🎯 What is Zustand?

Zustand is a lightweight state management library for React that allows multiple components to access the same global state without prop-drilling. Instead of passing props down through every component layer, any component can directly access the store.

## 📦 Key Concepts

### 1. **Global Store with `create()` Function**
The `create()` function is a factory function that creates a custom React hook. This hook provides access to the global store and can be imported and used by any component that needs it.

```javascript
const useMyStore = create((set, get) => ({
  count: 1,
  name: "Esheta",
  increment: () => set((state) => ({ count: state.count + 1 }))
}))
```

### 2. **`set` and `get` Parameters**
- **`set`** - A function used to update the state. It accepts a callback that receives the current state and returns new state values.
- **`get`** - A function used to read/access the current state value without triggering a re-render.

### 3. **`persist` Middleware**
`persist` automatically persists your store's state to browser storage (localStorage or sessionStorage). This ensures that even after a page reload, your state remains intact and is restored.

### 4. **`createJSONStorage`**
`createJSONStorage()` specifies **where** to store your state - either in `localStorage` (persists across browser sessions) or `sessionStorage` (clears when tab closes).

### 5. **`devtools` Middleware**
`devtools` integrates with the Zustand DevTools browser extension, allowing you to:
- Inspect all state changes in real-time
- Time-travel through state history
- Debug state mutations

## ✨ Benefits of Zustand

✅ No prop-drilling - Access state directly in any component  
✅ Lightweight & minimal API - Easy to learn and use  
✅ Persistent State - Keep state across page reloads  
✅ Developer Tools - Debug state changes easily  
✅ Performance - Only re-render components that use the state  

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
npm install zustand
```

2. Import and use the store in your components:
```javascript
import useMyStore from './store'

function MyComponent() {
  const { count, name, increment } = useMyStore()
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
```

## 📁 Project Structure

- `src/store.js` - Global Zustand store definition
- `src/App.jsx` - Main React component using the store
- `src/main.jsx` - Application entry point

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Zustand** - State management
- **Tailwind CSS** - Styling (optional)

## 📖 Learn More

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
