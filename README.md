# Dhananjay Sharma | Portfolio

A responsive personal portfolio website for a MERN stack developer. It has a light and dark theme that switches with an "ink bleed" animation, and the hero photo changes with the theme.

## Features

- Responsive layout for phones, tablets and desktops
- Light and dark theme with a WebGL ink bleed transition that starts at the click point
- Hero photo that changes in dark mode
- Animated hero heading
- Glass-style fixed navigation bar
- Sections for About, Education, Skills, Projects and Contact
- Skills grid with progress bars and links to project repositories
- Downloadable resume

## Tech Stack

- **React**: component-based UI
- **Vite**: development server and build tool
- **Tailwind CSS v4**: utility-first styling
- **GSAP**: animation timing
- **html2canvas-pro**: page snapshots for the theme transition
- **WebGL**: ink rendering
- **react-icons**: skill icons
- **TypeScript**: used for the ink effect files
- **Google Fonts**: Figtree, Luxurious Roman and Smooch Sans

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/your-username/react-webside.git
cd react-webside
npm install
```

### Run in development

```bash
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
react-webside/
├── index.html
├── vite.config.js
├── package.json
├── public/
└── src/
    ├── main.jsx            app entry point
    ├── App.jsx             page layout, starts the ink effect
    ├── index.css           theme colors, button and overlay styles
    ├── assets/             photos and resume
    ├── components/         Navbar, Hero, Skills, Projects, Contact and more
    └── ink/                ink bleed theme effect
        ├── setup.js
        ├── capture/        page snapshots
        ├── gl/             WebGL renderer
        └── ui/             animation, theme and button logic
```

## Theming

Components use theme color names instead of fixed colors, so one change updates the whole page:

| Name | Used for |
|---|---|
| `paper` | page and section background |
| `ink` | main text, borders, dark buttons |
| `muted` | soft gray text |
| `line` | borders and dividers |
| `card` | skill card background |

The active theme is stored in the `data-theme` attribute on the `<html>` element.

## Notes

- The theme is not saved, so reloading returns to light mode.
- `html2canvas-pro` is used instead of `html2canvas` because Tailwind v4 colors use `oklch()`.

## Author

**Dhananjay Sharma**, MERN Stack Developer
GitHub: https://github.com/your-username

## Credits

Ink bleed theme effect based on the ink-bleed-theme-changer project.

**Live site:** https://dhananjaysharm1.netlify.app/
