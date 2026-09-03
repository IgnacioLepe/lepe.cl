# lepe.cl — personal academic website

A plain HTML/CSS site (no build step, no dependencies). Fast, free to host, and easy to edit.

## Structure
```
index.html        Home (bio, photo, CV link, contact)
research.html     Publications, working papers, work in progress, policy reports, research assistance
tools.html        Literature Finder (open-source paper search toolkit)
papers/           One mini-page per paper (abstract, key figure, citation, links)
cv/               IL_CV.tex (source), IL_CV.pdf (compiled), build notes in cv/README.md
css/style.css     All styling
assets/           portrait.jpg · favicon.png · hero backgrounds · figures/ · fonts/
404.html          Custom not-found page (served automatically by GitHub Pages)
research/ tools/ resources/
                  Redirect stubs so the old folder-style URLs keep working
CNAME             Custom domain for GitHub Pages (lepe.cl)
.nojekyll         Serve files as-is on GitHub Pages
```

## Preview locally
Just double-click `index.html` — it opens in your browser. All navigation works offline.

## Edit content
Open the relevant `.html` file and edit the text between the tags, or ask Claude to do it.
- Add a paper → duplicate a `<div class="entry">...</div>` block in `research.html`, and copy one of the
  `papers/*.html` pages as its mini-page.
- Update the bio → edit the paragraphs in `index.html`.
- Update the CV → edit `cv/IL_CV.tex`, then run `latexmk -pdf IL_CV.tex` in `cv/` (see `cv/README.md`).
  The site links to `cv/IL_CV.pdf`.

Every page carries a canonical URL and Open Graph tags, so shared links show a preview card.
Paper pages use their key figure as the preview image; other pages use the portrait.

## Deploy to GitHub Pages (free hosting)
1. Push to `IgnacioLepe/lepe.cl` on the `main` branch.
2. Repo → Settings → Pages → Source: `main` branch, root.
3. Under "Custom domain", enter `lepe.cl` (the `CNAME` file already sets this).
4. Point the domain's DNS at GitHub Pages.
