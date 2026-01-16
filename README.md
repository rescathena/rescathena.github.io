# RESCATHENA - Single Page Application

A modern, responsive single-page website for RESCATHENA, an open-source platform that brings transparency to animal rescue NGOs.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Navigate to the project directory
cd only-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
only-page/
├── public/
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with language selector
│   │   ├── LanguageSelector.jsx # EN/ES toggle buttons
│   │   ├── HeroSection.jsx      # Hero with "what if" questions
│   │   ├── MotivationSection.jsx # Why RESCATHENA exists
│   │   ├── CollaborationSection.jsx # Open-source + volunteer info
│   │   └── ContactSection.jsx   # Contact form + footer
│   ├── context/
│   │   └── LanguageContext.jsx  # i18n state management
│   ├── i18n/
│   │   ├── index.js         # Translation helpers
│   │   ├── en.json          # English translations
│   │   └── es.json          # Spanish translations
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind config
├── index.html               # HTML template with SEO meta tags
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Dark | `#1E2227` | Primary background |
| Light | `#EDEDED` | Primary text |
| Muted | `#98999B` | Secondary text |
| Accent | `#45A1A9` | Highlights, links, CTAs |
| Gray | `#7C7C7C` | Tertiary elements |
| Coral | `#EC5042` | Alerts, emphasis |

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

## 🌐 GitHub Pages Deployment

This project is pre-configured for GitHub Pages deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the static files ready for deployment

3. Deploy to GitHub Pages using your preferred method:
   - GitHub Actions (recommended)
   - Manual upload to `gh-pages` branch
   - Third-party tools like `gh-pages` npm package

## 📱 Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Scrollytelling**: Smooth scroll-snap between sections
- **Animations**: Intersection Observer-based fade-in effects
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO Ready**: Meta tags, Open Graph, semantic structure

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Utility-first styling
- **Inter** - Typography (Google Fonts)

## 📄 License

This project is part of RESCATHENA, an open-source initiative.
