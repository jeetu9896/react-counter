# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


---

## Project: React Counter (local additions)

This repository contains a small demo app (built from the Vite React template) with two counter components used for learning React state patterns.

- `src/components/Counter.jsx` — a simple `useState` counter.
- `src/components/CounterNew.jsx` — a `useReducer` counter with action dispatch.

### Quickstart

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

3. Open the URL printed by Vite (usually http://localhost:5173).

### Notes & Troubleshooting

- If a button appears to do nothing, confirm handlers are passed as functions, e.g. `onClick={() => dispatch({ type: 'inc' })}` or `onClick={() => setCount(c => c + 1)}`. Avoid calling handlers during render like `onClick={dispatch('inc')}`.
- The `useReducer` reducer should always return a state for unknown actions (use a `default` case).

If you'd like, I can add a short development/testing checklist, add unit tests, or wire a reset/persist-to-localStorage feature.
