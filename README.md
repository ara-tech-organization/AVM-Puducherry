# AVM Smiles - Puducherry Landing Page

Landing page and 10 service pages for AVM Smiles Dental Clinic, Puducherry.

Live: https://ara-tech-organization.github.io/AVM-Puducherry/

## Stack
React 19, Vite, Tailwind CSS v4, Lucide icons, React Router. Font: Poppins.

## Develop
```
npm install
npm run dev
npm run build
```

## Where things live
- `src/content/puducherry.js` landing page copy, services, FAQs, contact details
- `src/content/services.json` service page copy (generated from the content doc)
- `src/assets/images/` logo and site images (fetched from avmsmilesdental.com)
- `MASTER_PROMPT.md` design and build brief

## Deploy
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
