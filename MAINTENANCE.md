# Website Maintenance & Deployment Guide

## 1. Deployment
Your website is configured to deploy automatically to **GitHub Pages** whenever you push changes to the `main` branch.

### Prerequisites
1.  **Repository Name**: Ensure your GitHub repository is named exactly `devanshmistry890.github.io`.
2.  **Settings**: Go to GitHub Request > Settings > Pages.
    *   **Source**: Select `GitHub Actions` (since we added `.github/workflows/deploy.yml`).

### How to Deploy
Simply push your changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
The "Actions" tab in your GitHub repository will show the deployment progress. It takes about 2-3 minutes.

---

## 2. Managing Content

### Adding a New Portfolio Project
Currently, portfolio items are located in two places:
1.  **Home Page Cards**: `src/components/homes/home/PortfolioAreaHomeOne.tsx`
    *   Find the `portfolio_data` array.
    *   Add a new object with `id`, `img`, `title`, `des` (description), and `tag`.
2.  **Detail Pages**: You have individual pages (`portfolio-details`, `portfolio-details-2`, etc.).
    *   **To add a new one**: Duplicate the folder `src/app/portfolio-details` and rename it (e.g., `src/app/project-name`).
    *   Update the content inside the new page's `page.tsx`.

### Updating text (About, Contact, etc.)
*   **Hero Section**: `src/components/homes/home/HeroAreaHome.tsx`
*   **About Me**: `src/components/about/AboutInfo.tsx`
*   **Contact Info**: `src/components/contact/ContactArea.tsx`

### Adding/Editing Testimonials
*   **File**: `src/data/TestimonialData.ts`
*   Add new entries to the list.

### Blog Posts (if used)
*   **File**: `src/data/BlogData.ts`

---

## 3. Future Development

### Installing New Packages
If you need new features, install packages normally:
```bash
npm install package-name
```
*Note: If you see peer dependency errors, use `npm install package-name --legacy-peer-deps`.*

### Updating Dependencies
Run `npm update` occasionally. If `npm run build` fails after an update, revert the changes.
