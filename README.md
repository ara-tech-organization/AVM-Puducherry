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

## Hostinger deployment

```
npm run build:hostinger                      # for https://avmsmilesdental.com/puducherry/ (default)
npm run build:hostinger -- /                 # for the domain root (PowerShell/cmd; Git Bash: prefix MSYS_NO_PATHCONV=1)
```

Upload the **contents** of `dist/` (including the hidden `.htaccess`) to `public_html/puducherry/`.
The `.htaccess` sends unknown URLs such as `/services` or `/gallery` to `index.html`; without it a refresh gives a
blank/404 page. The build base must match the folder the files are uploaded to, otherwise the JS/CSS 404 and the page is white.
