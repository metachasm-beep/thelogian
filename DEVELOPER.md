# Developer Onboarding Guide

Welcome to the ABTS Codebase! This document serves as a comprehensive guide to understanding the architecture, design systems, and workflows used in this React/Vite application.

## 1. Architecture Overview

### Content Management (`src/services/ContentService.js`)
We use a **Content Engine** architecture. Unlike a typical React app where every page is a hardcoded component, ABTS is largely content-driven:
- Content lives in `src/data/abts_content_clean.json`.
- The `ContentService.js` maps URL routes (like `/academic`) to their raw markdown content and hierarchical taxonomy (title, category).
- The `Subpage.jsx` component dynamically reads the slug from the URL and fetches the correct content.
- The `RichText.jsx` component converts that markdown into our beautiful, theological design system.

### Search (`SearchModal.jsx`)
We utilize a "Search-First" approach via `SearchModal.jsx` (triggered by `Cmd+K` or the Navbar search button). The search function runs purely client-side, indexing titles, paths, and content bodies directly from `ContentService.js`.

## 2. Design System & Styling (Tailwind v4)
We use Tailwind CSS v4, which means configuration happens directly in `src/index.css` inside the `@theme` block.

**Core Tokens:**
- `--color-brand-primary`: `#1e3a8a` (Cathedral Blue)
- `--color-brand-accent`: `#b45309` (Aged Gold)
- `--color-brand-surface`: `#FAFAF8` (Vellum paper texture)

**Custom Utilities (`@layer utilities`):**
- `.bg-tactile-noise`: Creates our signature physical paper feel using an SVG noise filter.
- `.cardstock-elevation`: Creates the subtle floating shadow effect used on content blocks.

## 3. Dynamic Asset Management (Vite Glob)
In `Gallery.jsx`, we don't import every image manually. We use Vite's dynamic asset importing:
```javascript
const imageModules = import.meta.glob('../../assets/*.{png,jpg,jpeg,webp,jfif}', { eager: true });
```
This automatically bundles and lazy-loads any image dropped into the `src/assets` folder. If you need to add an image to the gallery, simply name it clearly (e.g., `graduation-day-2024.jpg`) and drop it in the folder. The app will auto-subtitle it based on the filename!

## 4. End-to-End Testing (Playwright)
We use Playwright for robust browser automation and Quality Assurance (QA).
- Tests are located in `tests/e2e/`.
- Run tests with: `npx playwright test`
- View reports with: `npx playwright show-report`

Currently, Playwright tests the core conversion funnel: navigating to the site, opening the Search modal, and verifying that the "Apply Now" button successfully loads the Admissions application form.

---
*Happy coding! May your builds be fast and your logic sound.*
