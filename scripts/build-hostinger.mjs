// Builds the site for Hostinger (Apache static hosting) into ./dist.
//   npm run build:hostinger                  -> site served at the domain root  (https://domain/)
//   npm run build:hostinger -- /puducherry/  -> site served from a sub-folder   (https://domain/puducherry/)
// Upload the CONTENTS of dist (including the hidden .htaccess) to public_html (or that sub-folder).
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'

let base = process.argv[2] || '/'
if (base.includes(':')) {
  // Git Bash rewrites a leading "/" into a Windows path; use PowerShell/cmd or quote it: MSYS_NO_PATHCONV=1
  console.error(`Bad base "${base}". Run from PowerShell/cmd, or prefix with MSYS_NO_PATHCONV=1 in Git Bash.`)
  process.exit(1)
}
if (!base.startsWith('/')) base = `/${base}`
if (!base.endsWith('/')) base = `${base}/`

const run = (cmd) => {
  const r = spawnSync(cmd, { stdio: 'inherit', shell: true, env: { ...process.env, VITE_BASE: base } })
  if (r.status !== 0) process.exit(r.status ?? 1)
}
run('npx vite build')
run('node scripts/prerender.mjs')
fs.copyFileSync('dist/index.html', 'dist/404.html')

const html = fs.readFileSync('dist/index.html', 'utf8')
const bad = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]).filter((u) => u.startsWith('/assets') && base !== '/')
if (bad.length || !fs.existsSync('dist/.htaccess')) {
  console.error('Build check failed', { bad, htaccess: fs.existsSync('dist/.htaccess') })
  process.exit(1)
}
console.log(`\nHostinger build ready in dist/ (base "${base}"). Upload the contents of dist, including .htaccess.`)
