# West Point Society of Cincinnati - Website POC

A modern, static website for the West Point Society of Cincinnati built with **Vite**, **React**, and **TypeScript**.

## Project Goals

- Create a professional web presence for the West Point Society of Cincinnati
- Provide information about events, symposiums, and member resources
- Enable event registration and member engagement
- Maintain a clean, accessible, and mobile-responsive design
- Support easy content updates and expansion

## Features

- **Multi-page Navigation**: Home, About, Symposium, Registration, Resources
- **Responsive Design**: Mobile-first approach with clean, professional styling
- **TypeScript**: Type-safe development for maintainability
- **GitHub Pages Ready**: Automated deployment pipeline
- **Modern Tooling**: Vite for fast development and optimized builds

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Navigation, Footer, Layout components
│   └── common/         # Shared components (buttons, forms, etc.)
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About the society
│   ├── Symposium.tsx   # Annual symposium information
│   ├── Registration.tsx # Event registration
│   └── Resources.tsx   # Member resources
├── styles/             # Global styles and themes
├── assets/             # Images, icons, and static files
└── App.tsx             # Main application component
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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

## Development Guidelines

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to the navigation in `src/components/layout/Navigation.tsx`
3. Update the page router in `src/App.tsx`

### Adding Components

- **Layout components**: Place in `src/components/layout/`
- **Reusable components**: Place in `src/components/common/`
- **Page-specific components**: Create subfolder in `src/components/`

### Styling

- Component-specific styles: Create `.css` files alongside components
- Global styles: Add to `src/styles/`
- Follow BEM naming convention for CSS classes

## Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch using GitHub Actions.

**Setup Requirements:**
1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions" 
3. **Ensure Actions have permissions** to deploy

**Deployment Process:**
- Push changes to `main` branch
- GitHub Actions workflow automatically builds and deploys
- Site updates at: `https://dsjohns85.github.io/cuddly-computing-machine/`

**Testing Deployment Locally:**
```bash
npm run build    # Build for production
npm run preview  # Preview the production build
```

### Manual Deployment

```bash
npm run deploy   # Build and show deployment instructions
# Or manually: npm run build && upload dist/ folder to hosting provider
```

**Production Build Details:**
- Output directory: `dist/`
- Base URL: `/cuddly-computing-machine/` (configured for GitHub Pages)
- Optimized assets with chunking and compression

## Contributing

1. **Create feature branch** from `main`
2. **Make changes** with descriptive commit messages
3. **Test locally** using `npm run dev`
4. **Submit pull request** for review

## Future Enhancements

- [ ] Contact forms and member directory
- [ ] Event calendar integration
- [ ] Photo galleries for past events
- [ ] Member login and dashboard
- [ ] Content Management System (CMS) integration
- [ ] SEO optimization and meta tags
- [ ] Analytics integration

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: CSS Modules with responsive design
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: ESLint, Prettier for code quality

## Support

For questions or support, please contact the West Point Society of Cincinnati leadership team.

---

*Built with ❤️ for the West Point community in Cincinnati*
