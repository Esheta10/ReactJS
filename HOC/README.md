# Higher-Order Components (HOC) in React

This project demonstrates the use of Higher-Order Components (HOC) in React. An HOC is a function that takes a component and returns a new, enhanced component. This pattern is commonly used for code reusability, styling, and adding common functionality to multiple components.

## Features
- **Code Reusability**: Common layouts and styles (like cards or borders) are extracted into HOCs.
- **Component Composition**: Demonstrates how to wrap simple components (`Alpha`, `Beta`) with enhanced layouts.

## HOCs Implemented
- `withCardLook`: Wraps a component in a card-style container with gray background and padding.
- `withBorder`: Wraps a component in a blue-bordered container.

## Folder Structure
- `src/components/`: Contains basic functional components (`Alpha.jsx`, `Beta.jsx`).
- `src/hoc/`: Contains the Higher-Order Component functions (`withCardLook.jsx`, `withBorder.jsx`).
- `src/App.jsx`: The main entry point where components are enhanced using HOCs and rendered.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Learning Points
- Understanding how to pass a component as an argument to a function.
- Returning a new functional component from an HOC.
- Keeping core component logic separate from visual layout/styling logic.

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
