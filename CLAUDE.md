# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint (flat config, eslint.config.mjs)

## Architecture

Next.js 16 app using the App Router (`src/app/`). React 19 with the React Compiler enabled (`reactCompiler: true` in next.config.ts).

- **Styling**: Tailwind CSS v4 via PostCSS
- **UI components**: Shadcn and Headless UI (`@headlessui/react`) for interactive elements, Heroicons (`@heroicons/react`) for icons
- **Path alias**: `@/*` maps to `./src/*`
- **Components**: `src/components/` for shared components (not colocated in app routes)

## Coding Guidelines

- **Single responsibility**: Functions should do one thing only. If a function is doing multiple things, break it into smaller, focused functions.

- **Mobile First**: This app should be designed for mobile-layout first and desktop second.

- **Semantic HTML**: Use semantic html instead of divs where possible for greatest SEO/Accessibility

- **Meaningful comments**: Write code in human-readable format + succinct comments


