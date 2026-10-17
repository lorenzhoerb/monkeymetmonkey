# monkeymetmonkey.com – static site

Plain static site in `public/`: `index.html` + `assets/` (css, js, img, fonts). No build step.

## Preview locally
    python3 -m http.server 8000 -d public   # then open http://localhost:8000

## Deploy on Cloudflare
- Build command: *(empty)*
- Deploy command: `npx wrangler deploy` (config in `wrangler.jsonc`)

Manual deploy from this folder: `npx wrangler deploy`

Classic Pages project instead? Set build output directory to `public`,
leave build command empty, and delete `wrangler.jsonc`.

Custom domain: add `www.monkeymetmonkey.com` under the project's Domains / Custom domains.
