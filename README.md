# Track & Tote

Personal public-data blog and visualization site for exploring datasets, cross-dataset questions, dynamic plots, maps, and short notes.

## Current Version

This is a static Cloudflare-friendly first version. It now has one working surface:

1. A reusable public-data inventory page generated from the workbook reference.

## Files

- `index.html` - main site markup
- `inventory/public-data-inventory.html` - searchable inventory UI
- `data/public-data-inventory.json` - workbook-derived inventory rows
- `styles.css` - responsive styling
- `script.js` - header behavior, hero plot, and inventory filters

## Cloudflare Pages

Use these settings for a static deployment:

- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`

## Next Build Decisions

- Define the first article question from license-cleared data
- Build legal + attribution templates for every chart
- Add live source pulls with reproducibility metadata
- Blog format: Markdown, HTML, or notebook-driven posts
- Visualization stack: lightweight charts, maps, or notebook embeds
