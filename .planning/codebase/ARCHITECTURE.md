# Architecture

## Overview
The project is a high-end, monochromatic Technical Portfolio built as a Single Page Application (SPA). It prioritizes a premium "Obsidian Forge" aesthetic with heavy use of background textures, glassmorphism, and smooth transitions.

## Data Flow
- **Source**: `src/data/portfolio.js` contains the centralized data for all sections.
- **Consumption**: React components import `portfolioData` directly.

## Component Structure
- **Main Layout**: `App.jsx` orchestrates the sections using `Suspense` for lazy-loaded components.
- **Atomic Components**: `src/components` contains both layout sections (Hero, Experience, etc.) and UI primitives (TimelineItem, ProjectCard).

## Animation Strategy
- **Framework**: Framer Motion.
- **Implementation**: Variants are used for consistent entrance and scroll-triggered animations.
