# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a React + TypeScript + Vite portfolio website located in the `v0/` directory. The main application code is in `v0/src/` with the following key files:
- `App.tsx` - Main application component containing the portfolio layout
- `components/ExperienceCard.tsx` - Reusable component for displaying work experience
- `App.css` and `index.css` - Styling files

## Development Commands

Run these commands from the `v0/` directory:

- **Development server**: `npm run dev` (starts Vite dev server with HMR)
- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Lint**: `npm run lint` (ESLint with React and TypeScript rules)
- **Preview**: `npm run preview` (preview production build locally)

## Tech Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.7
- **Linting**: ESLint 9.36.0 with TypeScript ESLint, React Hooks, and React Refresh plugins
- **Styling**: CSS files (no CSS framework currently used)

## Code Architecture

The portfolio is a single-page application with:
- Main `App` component that renders header, profile section, and experience cards
- `ExperienceCard` component that accepts props for job details and tech stack
- CSS classes following a component-based naming convention (e.g., `.portfolio`, `.header`, `.role`)

## TypeScript Configuration

Uses a composite TypeScript setup:
- `tsconfig.json` - Main config referencing app and node configs
- `tsconfig.app.json` - App-specific TypeScript settings
- `tsconfig.node.json` - Node/build tool TypeScript settings

## Notes

- The project is set up as a standard Vite + React + TypeScript template
- ESLint is configured but no test runner is currently set up
- The application displays personal portfolio information with work experience cards