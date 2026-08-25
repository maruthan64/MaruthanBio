# Maruthan Ayyavu — Solution Architect Portfolio

React 19 + Vite + Tailwind CSS v4. Static output, no backend required.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build

```bash
npm run build
```

Static files land in `dist/`. Preview that build locally with:

```bash
npm run preview
```

## Deploy to Cloudflare Pages

**Dashboard (connect the repo)**

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select this repository
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Save and deploy — every push to the connected branch redeploys automatically

**CLI (no Git connection needed)**

```bash
npm run build
npx wrangler pages deploy dist
```

First run prompts you to log in and pick/create a Pages project name.
