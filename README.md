# ⚛️ React Production Setup (Vite + Yarn)

This project documents my personal React production setup using **Yarn** and **Vite**, with a focus on performance, code quality, and team collaboration. Below are the tools and steps I follow to consistently create clean, scalable React projects.

---

## 🧰 Setup Flow & Dependency Explanation

### ✅ 1. Node.js & Yarn

- The setup assumes Node.js is installed.
- I use Yarn as the package manager, preferring its speed and workspace support.
- I explicitly set the latest major version of Yarn (`yarn set version stable`) to avoid compatibility issues.

---

### ⚡ 2. Vite Setup

- I use Vite as the bundler because of its instant dev server, fast HMR, and optimized production builds.
- Chose React + TypeScript template to ensure type safety and modern tooling support.

---

### 🔗 3. GitHub & Git Init

- Initialized Git and pushed the repo to GitHub for version control and collaboration.
- This also enables Git hooks (used later with Husky).

---

### 🐶 4. Husky

- Husky allows running Git hooks.
- I use it to run linters and commit validations automatically before committing code.
- It ensures team-wide standards are enforced without manual intervention.

---

### 📛 5. Commitlint

- Commitlint checks commit messages against a conventional format.
- This enforces consistent commit history and improves readability, changelogs, and automation.

---

### 🧼 6. Lint-Staged

- Lint-staged runs linters only on staged files during commits.
- It makes the pre-commit process faster and ensures only relevant code is linted and formatted.

---

### 🔍 7. ESLint

- ESLint is used to statically analyze JavaScript/TypeScript code.
- It helps catch bugs, enforce best practices, and maintain code consistency across the team.

---

### 🎨 8. Prettier

- Prettier handles code formatting.
- It ensures a consistent style and avoids formatting debates by automating everything.
- Integrated with ESLint using `eslint-config-prettier` to avoid conflicts.

---

### 🔗 9. eslint-config-prettier

- This config disables ESLint rules that might conflict with Prettier.
- It ensures both tools work together smoothly without double-handling formatting.

---

### 🌈 10. Tailwind CSS

- Tailwind CSS is added for utility-first styling.
- It simplifies building modern, responsive UIs without leaving your HTML/JSX.
- Configured PostCSS and used official Tailwind plugins.

---

### 🎯 11. Stylelint

- Stylelint is used to enforce consistent styling rules in CSS and Tailwind.
- It catches potential issues with custom styles and promotes clean CSS.

---

### 🌀 12. stylelint-config-tailwindcss

- This config helps Stylelint understand Tailwind classes.
- Prevents false positives and ensures proper order and usage of Tailwind utilities.

---

### 🧩 13. eslint-plugin-import

- Ensures consistent import order and structure.
- Helps avoid mistakes like unresolved imports, duplicate paths, or incorrect ordering.

---

### 🧾 14. `.env` Files (`.env.production`, `.env.development`, `.env.test`, `.env.sample`)

- Environment variables are separated by environment to handle different configurations cleanly.
- `.env.production` – variables specific to the deployed build.
- `.env.development` – local development variables (e.g., proxy paths, debug toggles).
- `.env.test` – for automated test suites.
- `.env.sample` – serves as a template file showing required env variables without exposing sensitive values.

**Why it's important**:

- Keeps secrets out of code.
- Enables seamless switching between environments.
- Encourages standardized, secure config management.

---

### 🧪 15. Environment Validators in `vite.config.ts`

- A small utility or schema (e.g. using `zod` or manual checks) is added to **validate required environment variables**.
- Prevents runtime errors caused by missing or incorrect values.
- Example: throw clear error if `VITE_API_URL` is undefined.

---

### 🌐 16. Proxy URL Setup

- Vite provides a built-in `server.proxy` configuration in `vite.config.ts`.
- Used for **proxying API requests** during development to avoid CORS issues.

```ts
server: {
  proxy: {
    '/api': 'http://localhost:5000',
  }
}
```

---

### 🧱 17. Screaming Architecture & Folder Structure

- Embraced **Screaming Architecture** – where **folder names scream what the app does**, not how it's done.
- Promotes domain-driven design:
    - `/features` → App-specific business logic
    - `/shared` → Reusable components/utilities across features
    - `/entities`, `/widgets`, etc. (optional based on complexity)

**Benefits**:

- Better onboarding for new devs.
- Encourages modular, decoupled code.
- Easier to scale over time.

---

### 🔗 18. Absolute Path Aliases

- Configured Vite and TS to support aliases like:
    - `@features/*`
    - `@shared/*`
    - `@config/*`
- Improves import readability and prevents deeply nested `../../` paths.

> Set in both `vite.config.ts` and `tsconfig.json`.

---

### 🧪 19. Unit Testing with Vitest & jsdom

- Testing framework: **Vitest** (lightweight, Vite-native)
- Added support:
    - `@testing-library/react`
    - `@testing-library/jest-dom`
    - `jsdom` for DOM-like environment
- Example test written for components, hooks, and utilities.

---

### 🧪 20. Test Coverage

- Coverage is measured using Vitest’s built-in functionality.
- Output includes `.coverage` folder, and optionally integrated into CI pipeline.
- Helps track untested areas of the codebase and improves confidence in refactoring.

---

### 🔄 21. CI Pipeline (GitHub Actions)

- Used **GitHub Actions** for continuous integration:
    - Install dependencies
    - Run ESLint, Prettier, Stylelint
    - Run unit tests and generate coverage
- Ensures code is always tested and styled properly before merging.

---

### 🚨 22. Sentry Integration

- Integrated **Sentry** via `@sentry/react` and `@sentry/vite-plugin`.
- Captures frontend errors in production.
- Uses environment variables for DSN and project metadata.
- Optionally filters out dev/test environment logs.

---

## 📜 Summary

This setup prioritizes:

- 💡 Developer experience (fast reloads, type safety)
- 🧹 Code quality (linters, formatters)
- 👥 Team standards (commit hooks, conventional commits)
- 🎨 Consistent styling (Tailwind, Stylelint)
- 🌍 Environment-specific config with `.env` files
- 🔐 Env var validation to prevent runtime surprises
- 🌐 Proxy setup for smooth API dev
- 📁 Screaming architecture for scalable code structure
- 🔗 Clean imports with absolute path aliases
- ✅ Unit testing with Vitest, jsdom, and React Testing Library
- 📊 Coverage reports to track test health
- 🔁 CI pipelines to enforce standards automatically
- ⚠️ Sentry to track errors in production

---

> This serves as both a setup guide and a revision reference for future projects.

# UPNEXT

- CD Pipleine
- Make it SEO ready
- Make some basic components integrated
