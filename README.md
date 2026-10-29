# Clement Rubiato — Software Engineer

A personal portfolio focused on full-stack development, integrations, and business process automation. Built with React, TypeScript, and Vite, with original CSS/SVG project illustrations, light/dark themes, and keyboard-accessible project dialogs.

For continuation after a laptop reformat or in a new Codex session, read the [Codex handoff](docs/CODEX_HANDOFF.md). It covers restoration, project context, deployment, and remaining work.

## Development

Use Node.js 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. The app needs a development server; opening `index.html` directly will not compile the TypeScript source.

```sh
npm run check   # Strict TypeScript checks
npm run build   # Type checking and production build in dist/
npm run preview # Serve the production build locally
```

## Content and assets

- `src/content.ts` — introduction, contact details, employment, projects, and skills.
- `src/App.tsx` — page sections, navigation, theme preference, and contact interactions.
- `src/styles.css` — responsive layout, colors, typography, and reduced-motion support.
- `src/ProjectArt.tsx` and `src/ProjectArt.module.css` — project previews, with real screenshots and schematic illustrations labeled separately.
- `src/assets/wedding-invitation.jpg` — screenshot captured from the public wedding invitation website.
- `src/assets/clement-portrait.jpg` — current photo used in the About section and quick-answer avatar. Framing is controlled in CSS.
- `src/ProjectDialog.tsx` — native modal dialogs with Escape dismissal and browser-managed focus containment/restoration.
- `src/QuickAnswers.tsx` — guided conversation, native non-modal popover, and keyboard focus management.
- `src/QuickAnswers.module.css` — scoped widget styles, themes, mobile layout, and reduced-motion support.
- `src/quickAnswersData.ts` — typed questions, prewritten replies, follow-up suggestions, and résumé/contact links.
- `public/resume.pdf` — current résumé supplied for this rebuild. Replace this file to update the download.
- `index.html`, `public/robots.txt`, `public/sitemap.xml` — search metadata and production URL.
- `public/social-card.png` — social preview. `scripts/render-social-card.ps1` optionally regenerates it on Windows.

The headline intentionally does not name a particular framework. Specific technologies appear in experience, projects, and skills. AI is presented as a learning interest, not professional AI experience.

## Quick answers

The optional “Ask about my work” launcher opens a guided conversation. It uses the existing React/TypeScript stack, a CSS Module supported by Vite, and the browser’s native Popover API. It does not need another component library, API key, backend, or AI service.

Edit replies in `src/quickAnswersData.ts`. Contact details, résumé URL, current role, and project names reuse the main content module. The helper explicitly labels its replies as prewritten. Conversation history stays in React memory until a reload or “Start over”; it is not stored or sent anywhere.

The popover supports current browsers with the native Popover API. Clicking outside or pressing Escape dismisses it. It is non-modal, so the page stays usable. Project dialogs remain separate native modal dialogs. Section links dismiss the helper and navigate to the relevant content; external links open a new tab.

The work section features DCLA Loan Solutions, RoadSense, and Online Wedding Invitation. Tap-N-Ride and PAO Online Appointment System appear in a separate college-project group. DCLA's production status is owner-confirmed; its contribution notes and RoadSense's web/API work are supported by linked commits. RoadSense was freelance work for another team's capstone, with hardware, IoT, and model development outside Clement's scope.

Project notes describe the inspected source, not independent validation of those systems. The portfolio checks do not execute their test suites. Source references and review boundaries are recorded in `docs/project-review.md`.

Before publishing, replace the DCLA and RoadSense illustrations with sanitized screenshots when available. Keep customer records, financial data, credentials, and private employer material out of previews. Add measured outcomes only when verified.

The original root `resume.pdf` and unused images are retained from the older portfolio. The live app uses `public/resume.pdf`; Vite only includes imported image assets from `images/` in the build.

## GitHub Pages

The build uses relative asset URLs so it works at `/clems-portfolio/` and at the root of a custom domain. There are no client-side routes requiring a server rewrite.

The included workflow builds on pushes and pull requests. It only **deploys when manually run on `main`**:

1. Review and commit the changes, then push to GitHub.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
3. In **Actions → Portfolio checks and Pages deployment**, choose **Run workflow** on `main`.

No live deployment is performed by local development or `npm run build`.

If the domain changes, update the canonical and Open Graph URLs in `index.html`, and the URLs in `public/robots.txt` and `public/sitemap.xml`.

## Verification checklist

- Review desktop, tablet, and narrow phone layouts; check for horizontal overflow.
- Open all five project dialogs; test Close, Escape, backdrop dismissal, keyboard focus, and restored page scrolling.
- Switch themes and reload to check persistence.
- Check section navigation, résumé download, contact email, and GitHub/LinkedIn URLs.
- Test Copy email in a browser with clipboard access; if blocked, the email link stays available.
- Test quick answers on desktop and phones: open, close, Escape, click outside, all questions and follow-ups, résumé/contact URLs, “Other questions,” and “Start over.”
- Run `npm run build` before publication.

Visual inspiration: [Seán Halpin](https://www.seanhalpin.xyz/). The typography pairing, layout, copy, and project illustrations were created for this portfolio.
