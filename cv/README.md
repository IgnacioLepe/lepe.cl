# Ignacio Lepe — Curriculum Vitae (LaTeX)

A fully reproducible LaTeX version of the CV. No external font files are needed
(it uses Times via the `newtx` package), so it compiles identically anywhere with
a standard TeX distribution.

## Files
- `IL_CV.tex` — the source (edit this to update the CV)
- `IL_CV.pdf` — the compiled PDF
- `IL_CV_original.pdf` — the previous Word-exported version, kept for reference

## Build
Requires TeX Live or MacTeX (packages: `newtx`, `geometry`, `enumitem`,
`ragged2e`, `hyperref` — all standard).

```sh
pdflatex IL_CV.tex
pdflatex IL_CV.tex     # run twice so hyperlinks resolve
```

or, in one step:

```sh
latexmk -pdf IL_CV.tex
```

## Editing notes
- Section headings: `\cvsection{...}`
- An entry with an institution + location and a role + dates:
  ```tex
  \HL{Institution}{Location}      % bold left / bold right
  \RL{Role}{Dates}                % italic left / italic right
  \RR{Second dates}               % optional extra right-aligned date line
  ```
- Dash bullets use the `cvitems` environment.
