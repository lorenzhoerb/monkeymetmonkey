# monkeymetmonkey.com – static site

Plain static site: `index.html` + `assets/` (css, js, img, fonts). No build step.

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy to Cloudflare Pages
Option A – CLI (no Git needed):
    npx wrangler pages deploy . --project-name monkeymetmonkey

Option B – Git: push this folder to GitHub/GitLab, then in Cloudflare
Pages "Create project" > "Connect to Git". Framework preset: None,
build command: empty, output directory: `/`.

Custom domain: Pages project > Custom domains > add `www.monkeymetmonkey.com`.
