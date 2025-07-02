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

## 📜 Summary

This setup prioritizes:

- 💡 Developer experience (fast reloads, type safety)
- 🧹 Code quality (linters, formatters)
- 👥 Team standards (commit hooks, conventional commits)
- 🎨 Consistent styling (Tailwind, Stylelint)

All tooling is automated using Git hooks to reduce manual errors and improve productivity.

---

## 🧾 Scripts Included

The setup includes scripts for:

- Starting the dev server
- Building and previewing production
- Running ESLint and Stylelint
- Formatting code
- Checking formatting consistency
- Running all relevant linters during pre-commit

---

> This serves as both a setup guide and a revision reference for future projects.
