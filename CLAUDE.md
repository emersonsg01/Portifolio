# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio for Emerson de Souza Gonçalves, a software developer. It is deployed on Vercel at portifolio-sable-eight-17.vercel.app. Everything visible on the page is in Brazilian Portuguese, so keep new copy in pt-BR.

It is plain static HTML, CSS and vanilla JS. There is no build step, package manager, framework, linter or tests. To preview it, serve the folder: `python -m http.server 5500` (also defined in `.claude/launch.json` as `portfolio`). Opening `index.html` through `file://` works in a normal browser, but the app's preview pane turns it into a static snapshot without CSS or JS.

## Structure

- `index.html`: the static sections, in order: sticky nav, hero, `#sobre`, `#stack`, `#projetos`, `#contato`, footer. Contact and social icons are inline SVG.
- `script.js`: **project content lives here, not in the HTML.** The `featured` array renders the large cards into `#featured`. The `projects` array renders the grid in `#projects`, which the `.filter` buttons filter by `cat` (`web`, `jogos`, `backend`, `java`, `ia`). To add a project, add an object to one of these arrays. Leave `demo` out when there is no live deploy, and the card shows only the "Código" link. Also handles nav scroll state and the mobile menu, a scroll-spy, `.reveal` on-scroll animations, and the typed-word effect in the hero (`words` array in `setupTyped`).
- `style.css`: design tokens are CSS variables on `:root`, and it is dark theme only. Breakpoints are at 960px and 720px. Any element with `.reveal` starts invisible until the IntersectionObserver adds `.visible`.

## Things to know

- The hero stats (32 repos, 10 projects live, 8 languages) are hardcoded in `index.html` and need to be updated by hand.
- Old assets from the previous layout are no longer referenced: `background-image.png`, `whatsapp.png`, `git.png`, `github.png`, `game.png`, `pokedex.png`, `roleta.png`, `1.svg`, `2.svg`, `3.svg`. Only `profile.jpg` is used.
