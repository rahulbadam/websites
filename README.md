# Websites Monorepo

Production-grade Turborepo monorepo housing four world-class web applications.

## Apps

| App | Port | Description |
|-----|------|-------------|
| `portfolio` | 3000 | Rahul Badam - Personal portfolio & freelance landing page |
| `akshara-foundation` | 3001 | Educational NGO website with donation system |
| `vijaya-hospital` | 3002 | Multi-speciality hospital website with appointments |
| `akshara-matrimony` | 3003 | Premium matrimonial platform |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Monorepo**: Turborepo + pnpm workspaces

## Getting Started

```bash
# Install dependencies
pnpm install

# Start all apps in development
pnpm dev

# Build all apps
pnpm build

# Start individual app
cd apps/portfolio && pnpm dev
```

## Project Structure

```
├── apps/
│   ├── portfolio/          # Personal portfolio
│   ├── akshara-foundation/ # NGO website
│   ├── vijaya-hospital/    # Hospital website
│   └── akshara-matrimony/  # Matrimony platform
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── hooks/              # Shared React hooks
│   ├── utils/              # Shared utilities
│   ├── types/              # Shared TypeScript types
│   └── config/             # Shared config (ESLint, Tailwind, TS)
```

## Deployment

Each app is independently deployable to Vercel:

```bash
# Deploy portfolio
cd apps/portfolio && vercel --prod

# Deploy akshara-foundation
cd apps/akshara-foundation && vercel --prod

# Deploy vijaya-hospital
cd apps/vijaya-hospital && vercel --prod

# Deploy akshara-matrimony
cd apps/akshara-matrimony && vercel --prod
```

## Features

- Premium Framer Motion animations
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- SEO optimized with metadata
- Static generation for optimal performance
- Shared component library