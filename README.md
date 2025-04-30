# AffHouse Promo Landing Page

This is a promotional landing page for the **AffHouse** project, built with **React**, **TypeScript**, **Vite**, and **TailwindCSS**.

## 🔧 Technologies

- ⚛️ React + TypeScript
- ⚡ Vite
- 💨 TailwindCSS
- 🎨 Parallax effects using `react-scroll-parallax`

## 📁 Project Structure

```
src/
├── components/
│   ├── FeaturesSection/
│   │   ├── index.tsx               # Main features section component
│   │   ├── features-icons.tsx      # SVG icons used in the features
│   ├── BlurDotsCluster.tsx         # Decorative parallax dots cluster
│   ├── CircleCardsBackground.tsx   # Cards background with animated dots
│   ├── Header.tsx                  # Navigation bar
│   ├── HeroSection.tsx             # Main hero section with layered parallax
├── lib/
│   ├── types.ts                    # Shared types
│   ├── utils.ts                    # Utility functions (e.g. parallax calculation)
├── App.tsx                         # Root component
├── main.tsx                        # Application entry point
├── index.css                       # TailwindCSS styles
```

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## 📦 Build for production

```bash
npm run build
```

## ✨ Features

- **Hero Section** features multi-layer parallax (background, cards, and dots).
- **Features Section** includes reusable icons with colored shadows based on the background.
- **BlurDotsCluster** displays abstract positioned elements with optional blur and parallax.

## 📦 Packages Used

- [`react-scroll-parallax`](https://www.npmjs.com/package/react-scroll-parallax)

---

🛰 Designed to showcase visual effects and animations in a marketing landing page.

```

```
