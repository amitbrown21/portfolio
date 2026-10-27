# Amit Brounstine — Portfolio

Hand-built static portfolio (no frameworks, no build step) featuring EvenApp, AnimeIL,
Python Jotaro Bot, Synced Lyrics Downloader, HemiTube, and Wolt Watch.

## Structure

```
index.html            the entire site
styles.css            design system (warm paper · ink · hanko vermilion)
main.js               nav, scroll reveals, live Wolt Watch embed
assets/fonts/         self-hosted Fraunces / Instrument Sans / JetBrains Mono (latin)
assets/img/           compressed WebP screenshots + favicon seal
assets/cv/            resume PDF
render.yaml           Render blueprint (static site)
```

## Deploy to Render

1. Push this repo to GitHub (done: `amitbrown21/portfolio`).
2. In Render: **New → Blueprint** → connect the repo → **Apply**.
   Render reads `render.yaml` and creates a Static Site automatically.
3. Or create it manually: **New → Static Site** → pick the repo,
   *Publish directory* `.` — no build command.

## Local preview

```
python -m http.server 8000     # or: npx serve .
```

## Notes

- The Wolt Watch card embeds the live app (https://wolt-watch.pages.dev) on demand.
- To update the resume, replace `assets/cv/Amit_Brounstine_Resume.pdf`.
