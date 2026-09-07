# Coloring-Book-App (BOLF-CBA)

A browser-based coloring book (`index.html`, no build step) with draw/fill/erase/stamp
tools and a Google sign-in. This is a re-platform of
[`TitanBusinessPros/Coloring-Book-App`](https://github.com/TitanBusinessPros/Coloring-Book-App)
under the Best-Businesses account/repo, backed by its own Firebase project.

## Hosting

**GitHub Pages only** — no Firebase Hosting for this project (kept out to avoid
Firebase Hosting cost). Pages auto-deploys from `main` once enabled in the repo's
Settings → Pages.

## Local files

- `index.html` — the app itself (UI, canvas drawing logic).
- `js/firebase-config.js` — Firebase project config (public client identifier, safe to commit).
- `js/firebase-auth.js` — Google sign-in via Firebase Authentication.

## Coloring page sections

`imageLibrary` in `index.html` holds one array per section button:

1. Animals — `TitanBusinessPros/KCF-Animals`
2. Action — `TitanBusinessPros/KCF-Cars-Trucks`
3. Bible Stories — placeholder/BOLF-specific section (differs from the Titan fork's "Fantasy")
4. Holidays — `TitanBusinessPros/KCF-Holidays`
5. Foods — `TitanBusinessPros/CBA-CBP`, `Food/` folder
6. Professions — `TitanBusinessPros/CBA-CBP`, `Professions/` folder

Sections 5 and 6 mirror the same two sections added to the Titan Business Pros
fork, sourced from the same shared `CBA-CBP` repo. Each image is referenced by
a public `raw.githubusercontent.com` URL (via the `github.com/.../raw/main/...`
redirect form) — no images are committed into this repo itself.

## Firebase project

- **Project name:** BOLF-CBA
- **Project ID:** `bolf-cba`
- **Project number:** `609583859792`
- Google sign-in is already enabled on this project, and a Web app has been registered.

## One-time setup remaining

1. Enable GitHub Pages for this repo (Settings → Pages → Source: `main` branch, `/ (root)`).
2. Once the Pages URL is live, add it under Firebase Console → `bolf-cba` →
   Authentication → Settings → Authorized domains (it isn't there yet — the
   site wasn't live yet when the project was created).
