# West Point Society of Cincinnati - Website

A modern, fully-functional static website for the West Point Society of Cincinnati, replicating the design and functionality of [wpscincinnati.com](https://wpscincinnati.com). Built with **Vite**, **React**, and **TypeScript**.

## 🎯 Project Status

**COMPLETE** - All core features implemented and deployed to GitHub Pages!

### ✅ Completed Features

- ✅ Full homepage with hero section, event carousel, and contact form
- ✅ Complete design replication of wpscincinnati.com (teal color scheme, Raleway font)
- ✅ All pages implemented (Home, About, Symposium, Registration, Resources)
- ✅ Responsive navigation with mobile hamburger menu
- ✅ Event carousel with smooth transitions and navigation
- ✅ Contact form with validation
- ✅ Integrated images and YouTube video embed
- ✅ GitHub Pages deployment with automated workflows
- ✅ Mobile-responsive design
- ✅ Dev container configuration for GitHub Codespaces

## 🌐 Live Site

**Visit:** [https://dsjohns85.github.io/cuddly-computing-machine/](https://dsjohns85.github.io/cuddly-computing-machine/)

## Features

- **Multi-page Application**: Home, About, Symposium, Registration, Resources
- **Event Carousel**: Showcases programs with image slides and smooth navigation
- **Contact Form**: Full-featured form with client-side validation
- **Responsive Design**: Mobile-first approach with hamburger menu navigation
- **YouTube Integration**: Embedded video with autoplay
- **Image Gallery**: Background images and event photos from wpscincinnati.com
- **TypeScript**: Type-safe development for maintainability
- **Modern Tooling**: Vite for fast development and optimized builds

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Navigation, Footer, Layout components
│   ├── EventCarousel.tsx    # Event/program showcase carousel
│   └── ContactForm.tsx      # Contact form component
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page with hero, carousel, contact
│   ├── About.tsx       # About the society
│   ├── Symposium.tsx   # Annual symposium information
│   ├── Registration.tsx # Event registration
│   └── Resources.tsx   # Member resources and downloads
├── styles/             # Global styles and themes
├── assets/             # Static assets
└── App.tsx             # Main application component with routing
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dsjohns85/cuddly-computing-machine.git
   cd cuddly-computing-machine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Using GitHub Codespaces

This project includes a dev container configuration:

1. Click "Code" → "Codespaces" → "Create codespace on main"
2. Dependencies install automatically
3. Port 5173 forwards automatically
4. ESLint auto-fixes on save

## Deployment

### Automatic Deployment (GitHub Pages)

The site **automatically deploys** when changes are pushed to the `main` branch.

**Live URL:** `https://dsjohns85.github.io/cuddly-computing-machine/`

**How it works:**
- GitHub Actions workflow runs on every push to `main`
- Builds production bundle with Vite
- Deploys to GitHub Pages automatically
- Updates live site within 1-2 minutes

**Manual Deployment Testing:**
```bash
npm run build    # Build for production
npm run preview  # Preview the production build
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Design & Styling

- **Color Scheme**: Teal/Turquoise (#B6F3E8, #00B8D4) matching wpscincinnati.com
- **Typography**: Raleway font family from Google Fonts
- **Responsive Breakpoints**: 768px (tablet), 480px (mobile), 375px (small mobile)
- **Layout**: CSS with BEM-style naming conventions
- **Images**: Background images with overlay effects for text readability

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: CSS Modules with responsive design
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: ESLint for code quality, Dev Containers for Codespaces
- **Font**: Google Fonts (Raleway)

## Recent Updates (October 2025)

- ✅ Updated YouTube video embed with autoplay
- ✅ Fixed image paths for Vite base URL compatibility
- ✅ Added event carousel with 3 program slides
- ✅ Implemented contact form with validation
- ✅ Integrated actual images from wpscincinnati.com
- ✅ Complete design replication (colors, fonts, layout)
- ✅ Fixed responsive navigation z-index issues
- ✅ Optimized dev container configuration
- ✅ Implemented all pages (Resources, Registration, Symposium, About)

## Future Enhancements

- [ ] Backend integration for contact form submissions
- [ ] Google Form integration for registration
- [ ] Event calendar with date management
- [ ] Photo galleries for past events
- [ ] Member login and dashboard
- [ ] CMS integration for easier content updates
- [ ] SEO optimization and meta tags
- [ ] Analytics integration

## Contributing

1. **Create feature branch** from `main`
2. **Make changes** with descriptive commit messages
3. **Test locally** using `npm run dev`
4. **Build and preview** with `npm run build && npm run preview`
5. **Submit pull request** for review

## Support

For questions or support, please contact the West Point Society of Cincinnati leadership team.

---

*Built with ❤️ for the West Point community in Cincinnati*

**Repository**: [github.com/dsjohns85/cuddly-computing-machine](https://github.com/dsjohns85/cuddly-computing-machine)