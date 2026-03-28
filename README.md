# Jennifer Long's Portfolio

Hi, I'm Jennifer! I'm a full-stack web + iOS developer. This is my portfolio website, built with Astro, React, TypeScript, and Tailwind CSS. Take a look!

Deployed at: https://j-alicia-long.github.io

<img width="500" alt="image" src="https://github.com/user-attachments/assets/f752f617-faa4-431a-8bc2-43c94f358d32" />
<img width="500" alt="image" src="https://github.com/user-attachments/assets/1643384d-1d63-41cd-b0f0-85acb4ffc69e" />


## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server at http://localhost:3000/me/
npm run dev

# Build for production (output in dist/)
npm run build

# Preview the production build locally
npm run preview
```

## Architecture

```
├── public/              # Static assets served as-is
├── src/
│   ├── components/
│   │   ├── home/        # Home page sections (Hero, Services, Expertise, etc.)
│   │   └── layout/      # Header and Footer
│   ├── layouts/
│   │   └── Layout.astro # Base HTML shell (fonts, dark mode, Alpine.js)
│   └── pages/           # File-based routing (index, 404)
├── legacy/              # Previous CRA-based project (archived)
├── astro.config.mjs     # Astro config (Tailwind, React, compress integrations)
├── tailwind.config.cjs  # Tailwind theme (stone palette, Inter font)
├── tsconfig.json        # TypeScript config (extends Astro strict)
└── package.json
```

- **Astro 2** for static site generation (uses Vite under the hood)
- **React 19** available via `@astrojs/react` for interactive components (`.tsx`)
- **Tailwind CSS 3** with a stone color palette and dark mode (`class` strategy)
- **Alpine.js** for lightweight interactivity (menu toggle, dark mode)
- **GitHub Actions** for CI/CD (auto-deploys on push to `master`)

## Deployment

The site automatically builds and deploys to GitHub Pages whenever you push to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.

To enable this, go to repository **Settings > Pages** and set the source to **GitHub Actions**.

Manual deploys can also be triggered from the **Actions** tab using "Run workflow".
