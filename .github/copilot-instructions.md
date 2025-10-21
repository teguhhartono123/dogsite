<!-- .github/copilot-instructions.md -->
# Dogsite — AI contributor instructions

This file gives concise, actionable guidance for automated coding agents (Copilot-style) to be productive in this repository.

Basics
- Project type: Create React App (CRA) single-page app. Key entry points: `src/index.js` -> `src/App.js`.
- Package manager: npm. Scripts are defined in `package.json`.

Quick commands (use npm from repo root)
- Start dev server: `npm start` (uses `react-scripts start`, serves at http://localhost:3000)
- Run tests: `npm test` (CRA test runner)
- Build production bundle: `npm run build`

Important files and patterns
- `package.json` — contains dependencies (React 19, react-scripts 5) and scripts. Avoid adding global tooling that conflicts with CRA unless you also update `eject`/configs.
- `src/App.js` — main example component. Simple functional component, uses local asset import (`logo.svg`). Use the same import patterns for images under `src/image/`.
- `src/index.js` — app bootstrap (React 18+ createRoot). Keep `reportWebVitals()` calls unchanged unless adding analytics.
- `src/App.test.js` — example testing pattern using `@testing-library/react`. New tests should follow this style (render + screen queries).
- `public/` — static assets (favicon, manifest). Do not move runtime-imported images from `src/image/` into `public/` unless you change import usage accordingly.

Example image usage
- Import an image from `src/image/chew.jpeg` and use it in a component:

```javascript
import chew from './image/chew.jpeg';
// ...
<img src={chew} alt="chew" />
```

Coding conventions & expectations
- Use functional components and default exports for top-level components (project currently follows this pattern). Small helper files can use named exports.
- Tests use `@testing-library/react`. Prefer queries from `screen` and assert presence with `toBeInTheDocument()`.
- Keep styling in existing CSS files (`src/App.css`, `src/index.css`). Avoid introducing CSS-in-JS unless a clear migration is provided.
- Do not change `react-scripts` or CRA defaults without a clear reason. If a change is necessary, include why and how to run locally (e.g., `npm run eject`).

When editing or adding files
- Update `package.json` only when adding required runtime or dev dependencies. Keep versions conservative and compatible with React 19 + react-scripts 5.
- Run `npm test` locally after adding tests. For UI changes, run `npm start` and verify the browser at `localhost:3000`.

Integration points & external dependencies
- No backend API is present in the repo. If adding integrations, document expected environment variables and mock them in tests.
- The project relies only on dependencies declared in `package.json`. Avoid adding global OS-level assumptions.

Edge cases and pitfalls observed
- This is a small CRA scaffold. Common issues: mismatched React versions with new dependencies, image import path mistakes, forgetting to commit static assets under `src/image/`.

Examples to reference
- Bootstrapping: `src/index.js` uses `ReactDOM.createRoot` followed by `<App />`.
- Component + test: `src/App.js` and `src/App.test.js` show the pattern for rendering and asserting UI text.

What to do if you need to change build/config
- Prefer adding minimal dependencies and updating `scripts` only when necessary. If you must `eject`, add a short PR note explaining why and the local commands to reproduce.

If something is unclear
- Ask the human maintainer to clarify intended features, desired tooling, or external services. When in doubt, make small, reversible changes and include a test or manual verification step.

Contact points
- Primary app files: `src/App.js`, `src/index.js`, `package.json`, `README.md`.

Notes for automated agents
- Keep changes small and well-tested. Run `npm test` and smoke the app with `npm start` for visual changes. Prefer explicit imports (example above) and follow the existing test style.

---
Please review and tell me if you want additional repo-specific rules (formatting, linting, CI) or example tasks to include.
