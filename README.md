# Jennifer Long's Portfolio

Hi, I'm Jennifer! I'm a full-stack web + iOS developer. This is my portfolio website, built with React, TypeScript, and Vite. Take a look!

#### Deployed at: https://j-alicia-long.github.io/me


## Quick Start

```bash
# Install dependencies
npm install

# Start the dev server at http://localhost:5173
npm run dev

# Type-check and build for production (output in dist/)
npm run build

# Preview the production build locally
npm run preview

# Run the linter
npm run lint
```

## Architecture

```
├── public/              # Static assets served as-is
├── src/                 # Application source code
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── ...
├── legacy/              # Previous CRA-based project (archived)
├── index.html           # HTML entry point (Vite convention)
├── vite.config.ts       # Vite build configuration
├── tsconfig.json        # TypeScript project references
├── tsconfig.app.json    # TypeScript config for app source
├── tsconfig.node.json   # TypeScript config for Node tooling
├── eslint.config.js     # ESLint flat config
└── package.json
```

- **React 19** with TypeScript for the UI
- **Vite 8** for dev server and production builds
- **ESLint** for linting
- **GitHub Pages** for hosting (base path: `/me/`)
- **GitHub Actions** for CI/CD (auto-deploys on push to `master`)

## Deployment

The site automatically builds and deploys to GitHub Pages whenever you push to the `master` branch. The workflow is defined in `.github/workflows/deploy.yml`.

To enable this, go to your repository **Settings > Pages** and set the source to **GitHub Actions**.

Manual deploys can also be triggered from the **Actions** tab using "Run workflow".
