# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio for Emerson de Souza Gonçalves, a software developer. It is deployed on Vercel at portifolio-sable-eight-17.vercel.app. Everything visible on the page is in Brazilian Portuguese, so keep new copy in pt-BR.

It is plain static HTML, CSS and vanilla JS. There is no build step, package manager, framework, linter or tests. To preview it, serve the folder: `python -m http.server 5500` (also defined in `.claude/launch.json` as `portfolio`). Opening `index.html` through `file://` works in a normal browser, but the app's preview pane turns it into a static snapshot without CSS or JS.

## Structure

- `index.html`: the static sections, in order: floating pill nav, hero (giant name + interactive terminal + stack marquee), `#sobre` (bento grid), `#projetos` (featured cases), `#arquivo` (filterable project table), `#trajetoria` (timeline), `#contato`, footer, then the command palette (`#palette`) and `#toast`. Contact and social icons are inline SVG.
- `script.js`: **project content lives here, not in the HTML.**
  - `featured` renders the large cases into `#featured`. Each one has either `shot` (a screenshot in `assets/shots/`, shown in a browser frame) or `art`, a hand-drawn cover from the `ARTS` map (`pipeline`, `cards`, `voxel`).
  - `projects` renders the archive rows into `#projects`, filtered by `cat` (`web`, `jogos`, `backend`, `java`, `ia`). Rows with `shot` show a floating preview on hover. Leave `demo` out when there is no live deploy.
  - `LANG_SHARE` feeds the language bar in the bento; it is hand-counted from each own repo's primary language.
  - Also: the terminal commands (`commands` in `setupTerminal`), the Ctrl/⌘+K palette entries (`all` in `setupPalette`), the interactive dot field on a fixed `<canvas>`, the São Paulo clock, theme toggle (saved in `localStorage`), nav scroll-spy and `.reveal` animations.
- `style.css`: design tokens are CSS variables on `:root` (dark) and `:root[data-theme="light"]`. Fonts are Geist, Geist Mono and Instrument Serif (italic `<em>` is the accent style). Breakpoints are at 960px and 720px. Any element with `.reveal` starts invisible until the IntersectionObserver adds `.visible`. Case covers (`.case-visual`) stay dark in both themes on purpose.

## Things to know

- The hero stats are in `index.html`. The repo count is fetched live from the GitHub API and falls back to the hardcoded number; "projetos no ar" (8) must be updated by hand.
- Screenshots in `assets/shots/` were taken with headless Chrome at 1440×900 and saved as WebP at 1200px wide. Retake them when a live project changes.
- As of Oct 2026 these deploys return 404, so they have no `demo`: site-plano-saude, projeto-fn, novo-truco-multi-jogador, pocket-monsters-backend.
- Old assets from the first layout are no longer referenced: `background-image.png`, `whatsapp.png`, `git.png`, `github.png`, `game.png`, `pokedex.png`, `roleta.png`, `1.svg`, `2.svg`, `3.svg`. Only `profile.jpg` and `assets/shots/` are used.
