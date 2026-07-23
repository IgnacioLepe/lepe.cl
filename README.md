# lepe.cl — personal academic website

A plain HTML/CSS site (no build step, no dependencies). Fast, free to host, and easy to edit.

## Structure
```
index.html        Home (bio, photo, CV, contact)
research.html     Published work, working papers, research assistance
tools.html        School Choice Explorer
css/style.css     All styling
assets/           portrait.jpg · IL_CV.pdf · favicon.png
CNAME             Custom domain for GitHub Pages (lepe.cl)
.nojekyll         Serve files as-is on GitHub Pages
```

## Preview locally
Just double-click `index.html` — it opens in your browser. All navigation works offline.

## Edit content
Open the relevant `.html` file and edit the text between the tags, or ask Claude to do it.
- Add a paper → duplicate a `<li>...</li>` block in `research.html`.
- Update the bio → edit the paragraph in `index.html`.
- Replace the CV → drop a new `IL_CV.pdf` into `assets/`.

## Deploy to GitHub Pages (free hosting)
1. Create a repo (e.g. `IgnacioLepe/lepe.cl`) and push these files.
2. Repo → Settings → Pages → Source: `main` branch, root.
3. Under "Custom domain", enter `lepe.cl` (the `CNAME` file already sets this).
4. Point the domain's DNS at GitHub Pages (see the editing guide in ~/Documents).

Old page URLs (`/research/`, `/resources/`, `/tools/`) can be preserved with folder-style
paths or redirects at deploy time — noted so existing links don't break.
