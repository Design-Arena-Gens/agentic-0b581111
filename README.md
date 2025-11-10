# Agentic Greeter

A lightweight Next.js experience that delivers an instant “hi”, live time indicator, and customizable greeting.

## Getting Started

### Prerequisites

- Node.js 18.17+ (or any runtime supported by Next.js 14)
- npm 9+ (bundled with Node)

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Then open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── components/         # Client-side UI widgets
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Landing page
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- Live-updating clock with accessible status messaging
- Personalized greeting form with graceful fallback
- Soft glassmorphism aesthetic and responsive layout
- Strict TypeScript configuration and ESLint via `eslint-config-next`
