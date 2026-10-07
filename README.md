# Dippah — Portfolio Site

Simple, free-to-host portfolio for a YouTube + short-form video editor.
No build step. Just HTML + CSS + JS.

## Preview locally

```powershell
cd portfolio-site
python -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.

## Customize (5 min checklist)

1. **Name / stats** — edit `index.html` hero section.
2. **Showreel** — in `index.html` find `youtube.com/embed/dQw...` in the showreel block, replace `dQw4w9WgXcQ` with your video ID (the part after `v=` in your YouTube URL).
3. **Work grid** — each card has `data-id="..."`. Replace with your YouTube IDs:
   ```html
   <article class="card" data-cat="long" data-id="PASTE_ID_HERE" ...>
   ```
   Categories: `long` / `short` / `ads`.
4. **Email + X** — search for `hello@dippah.com` and `x.com/dippah` in `index.html` + `script.js`, replace with yours.
5. **Instagram** — when ready, replace the `Instagram — soon` button href with your URL and remove class `soon`.
6. **Pricing** — edit the `from $XX` lines in Services.

## Put it online free (recommended: Vercel)

**Option A — Vercel (free, custom domain later):**
1. Push `portfolio-site/` to GitHub.
2. Go to vercel.com → Add New Project → import repo → Deploy. Done.
3. Add custom domain later in project settings.

**Option B — GitHub Pages (free):**
1. Push to GitHub repo named `dippah-portfolio`.
2. Settings → Pages → Deploy from branch → `main` / `/root` (or `/portfolio-site` if monorepo).
3. Your URL: `https://<username>.github.io/dippah-portfolio/`

**Option C — Netlify Drop:**
Drag the `portfolio-site` folder onto app.netlify.com/drop. Instant URL.

## Tips to get clients

- Pin your showreel + best 3 videos at top. Delete weakest work — 6 strong > 12 mixed.
- Add 1-line results under each video when you can (e.g. "48% retention, 220k views").
- Add testimonials as soon as you have 2-3 — even short Discord DMs screenshots work (ask permission).
- Link this site in your X bio, YouTube comments, Upwork, and cold DMs.
