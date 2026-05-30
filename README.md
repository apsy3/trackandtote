# Track & Tote Website

Static website for Track & Tote, ready to deploy on Cloudflare Pages.

## Files

- `index.html` - main site markup
- `styles.css` - responsive styling
- `script.js` - small header scroll interaction
- `assets/trackandtote-hero.png` - generated hero image asset

## Cloudflare Pages

Use these settings for a static deployment:

- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`

## GitHub

This local repo currently needs a GitHub remote before it can be pushed:

```bash
git remote add origin <github-repo-url>
git push -u origin main
```
