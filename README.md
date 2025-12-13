# TinyCongress Landing Page

Landing page for [TinyCongress](https://github.com/icook/tiny-congress-2) - a modern web community platform for collaborative decision-making and polling.

## About

This repository contains the landing page for the TinyCongress project. For the main application repository, visit [tiny-congress-2](https://github.com/icook/tiny-congress-2).

**Live site**: [https://icook.github.io/tiny-congress-landing/](https://icook.github.io/tiny-congress-landing/)

## Development

### Prerequisites

- Node.js 20 or later
- npm

### Getting Started

1. Clone this repository
   ```bash
   git clone https://github.com/icook/tiny-congress-landing.git
   cd tiny-congress-landing
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm start
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Project Structure

- `src/`: Source files
  - `_includes/`: Template layouts and partials
  - `css/`: Stylesheets
  - `index.njk`: Home page
- `.github/workflows/`: GitHub Actions deployment workflow

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

## Technologies Used

- [Eleventy](https://www.11ty.dev/) - Static site generator
- Nunjucks - Templating language
- GitHub Pages - Hosting

## License

ISC