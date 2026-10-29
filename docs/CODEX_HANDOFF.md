# Portfolio handoff for the next Codex session

Prepared: **29 October 2026 (Asia/Manila)**.

This records the work completed with John Clement Rubiato before a laptop reformat. It is project context, not a replacement for the user's latest request. Read the current files and Git status before making changes; facts and deployment status may have changed since this snapshot.

## Start here

1. Read this document, [README.md](../README.md), and [project-review.md](project-review.md).
2. Inspect `git status`, recent commits, and the current source.
3. Use Node.js 24, run `npm ci`, then `npm run dev`.
4. Continue the existing React portfolio. Ask the user which improvement they want next if they have not specified one.

Suggested message to the next Codex:

> Read docs/CODEX_HANDOFF.md, README.md, and docs/project-review.md. Inspect the repository and summarize the current state and remaining work briefly. Continue from this implementation, preserving verified project contributions and the existing design. Check with me before changing deployment behavior or the public URL.

## Owner and purpose

- Owner: **John Clement Rubiato**, usually presented as **Clement**.
- GitHub account/repository owner: **menxio**.
- Primary target roles: **Software Engineer / Full-Stack Developer**; also interested in web development and automation.
- Current employer at this snapshot: **Sprobe Inc.**, Software Engineer, **June 2025–Present**. The user explicitly confirmed this was still current.
- Professional work includes Laravel/React applications, integrations, Power Platform automation, testing, troubleshooting, and deployments. Public portfolio wording is in `src/content.ts`.
- AI integrations are a **learning interest**. Do not present the user as having built RoadSense's detection models or as having professional AI engineering experience.
- The user wanted adaptable positioning rather than a headline restricted to Laravel. Frameworks appear as supporting evidence in skills, experience, and project notes.
- The user initially wanted step-by-step teaching, then asked Codex to implement changes directly. Prefer concrete edits and concise explanations; avoid repeated planning and redundant confirmations.

## Repository and current snapshot

- Repository: <https://github.com/menxio/clems-portfolio>
- Public portfolio: <https://menxio.github.io/clems-portfolio/>
- Main branch: `main`.
- HTTPS remote on the old laptop: `https://menxio@github.com/menxio/clems-portfolio.git`.
- Latest implementation commits at handoff creation:

| Commit | Work |
| --- | --- |
| `5a66c85` | Rebuilt the portfolio in React and added project case studies. |
| `bc0c512` | Replaced the portrait and refined the About layout. |
| `4553245` | Updated the portfolio résumé PDF. |

The working tree was clean before creating this handoff. Local tracking reported `main...origin/main` without an ahead/behind count. This is not a fresh verification of GitHub's current branch or deployed revision.

The rebuilt public site was observed working in a browser during the original session. A successful manual deployment was shown by the user. Subsequent portrait and résumé changes must be checked against the latest GitHub Pages deployment; do not assume the current local commit is live.

## Before reformatting the laptop

- Commit and push this handoff and any remaining changes. Verify the files and latest commits are visible on GitHub before erasing the laptop.
- Back up the **editable résumé source** (Word document or equivalent), original photos, and other files kept outside the repository. Git preserves the committed PDF, not the Downloads folder or the editable source document.
- `node_modules/`, `dist/`, `tmp/`, and `*.local` are ignored. They will not return in a fresh clone. `tmp/` held research downloads and QA screenshots; durable research findings are in `docs/project-review.md`.
- Local Git settings in `.git/config`, Git Credential Manager sessions, browser sign-ins, and local tool/Codex settings are not part of a normal clone. Set them up again separately. Do not commit tokens, passwords, private keys, or account recovery codes.
- The portfolio requires no application API keys, backend credentials, or `.env` file to run as currently implemented.

## Restore on the new installation

Install Git, Node.js **24**, and the preferred editor/Codex environment. Then:

```sh
git clone https://menxio@github.com/menxio/clems-portfolio.git
cd clems-portfolio
git config --local user.name "menxio"
git config --local user.email "YOUR_VERIFIED_GITHUB_EMAIL"
node --version
npm --version
npm ci
npm run dev
```

Replace `YOUR_VERIFIED_GITHUB_EMAIL` before running that command. The previous author email is available from Git history if needed: `git log -1 --format="%an <%ae>"`.

Vite binds to `127.0.0.1`; normally the local URL is `http://127.0.0.1:5173/`. Use the URL printed by Vite if that port is occupied. Open the app through Vite rather than opening `index.html` directly.

### Previous Node.js issue

The old Git Bash terminal selected Node **14.16.1** through nvm even though system Node 24 was installed. Vite failed with `SyntaxError: Unexpected token '??='`.

The project declares Node **>=22.12.0**; the deployment workflow uses **24**. Check `node --version` in the actual terminal used to run npm. On the old nvm-windows installation, `nvm use system` selected the installed system Node. On the new machine, select/install Node 24 and restart the terminal as needed. Do not downgrade the app to accommodate Node 14.

### Previous GitHub authentication issue

Pushing initially failed with:

```text
Permission to menxio/clems-portfolio.git denied to clemenxiio
```

`user.name` and `user.email` control commit authorship, not GitHub authentication. Git Credential Manager was using another account. The repository's remote was changed to select `menxio`:

```sh
git remote set-url origin https://menxio@github.com/menxio/clems-portfolio.git
```

When Git Credential Manager asks to sign in, use the browser flow and authenticate as **menxio**. Avoid changing global identity or deleting other accounts' credentials as a routine fix for this repository.

## Architecture and editing map

This is a client-side **React 19 + TypeScript 5.9 + Vite 7** portfolio, with custom CSS, CSS Modules, and inline SVG illustrations. Exact dependency versions are in `package-lock.json`; restore them with `npm ci`.

| File | Responsibility |
| --- | --- |
| `src/main.tsx` | React entry point, including Strict Mode. |
| `src/App.tsx` | Page sections, navigation, theme toggle, project selection, and contact/copy interactions. |
| `src/content.ts` | Profile, experience, typed projects, skill groups, and shared `resumeUrl`. |
| `src/styles.css` | Main responsive layout, themes, portrait crop, and project dialog styles. |
| `src/Icons.tsx` | Shared SVG icons. |
| `src/ProjectArt.tsx` / `src/ProjectArt.module.css` | Project illustrations and real screenshot presentation. |
| `src/ProjectDialog.tsx` | Native modal project details. |
| `src/QuickAnswers.tsx` / `src/QuickAnswers.module.css` | Guided Q&A widget and scoped styles. |
| `src/quickAnswersData.ts` | Typed prewritten replies and follow-up links. |
| `src/assets/clement-portrait.jpg` | Current café photo used in About and the Q&A avatar. |
| `src/assets/wedding-invitation.jpg` | Real screenshot from the public wedding site. |
| `public/resume.pdf` | **Current résumé served by the app.** |
| `index.html` | Metadata, canonical/Open Graph URLs, font loading, initial theme, and no-JavaScript résumé/contact fallback. |
| `public/robots.txt`, `public/sitemap.xml` | Public site URL metadata. |
| `public/social-card.png`, `public/social-card.svg` | Social preview assets. |
| `scripts/render-social-card.ps1` | Optional Windows social-card generation helper. |
| `.github/workflows/pages.yml` | Build checks and manually triggered Pages deployment. |

`vite.config.ts` uses `base: './'`. Assets and the shared résumé URL support the repository subpath. The site uses section anchors, not client-side routes needing a server rewrite.

The root-level **`resume.pdf` is an obsolete legacy file**. It is not the résumé used by Vite or the live app. The old `images/clement.png` and other unused images are retained legacy assets. Opening the root PDF in the editor can cause confusion; inspect `public/resume.pdf` for the current download.

### Design decisions to preserve

- Visual inspiration: Seán Halpin's newer portfolio, adapted into an original engineering portfolio rather than a copy of his assets or project claims.
- Warm ivory/light and deep green/dark themes, with **DM Sans + Instrument Serif** loaded from Google Fonts and CSS fallbacks.
- Work, Experience, About, and Contact sections; production/freelance work precedes college work.
- The headline is broad: **Software Engineer**. The introduction emphasizes web applications and workflow automation.
- The old About portrait had a circular white background, arch/orbit decoration, and overlapping text. It was replaced with the supplied café photo in a rounded rectangular frame; the caption sits below the photo. Preserve that fix.
- About and Q&A import the same portrait asset. Their framing differs in CSS; check both when changing the photo.
- Theme preference is stored in local storage as `clement-theme`.
- Keep responsive behavior, keyboard access, reduced-motion support, focus handling, and explicit labels distinguishing screenshots from illustrations.

### Project dialogs and quick answers

Project details use native `<dialog>` with `showModal()`, Escape dismissal, focus containment/restoration, and body-scroll cleanup. The guarded `onClose` checks that the dialog is no longer open; preserve or carefully re-test it when refactoring under React Strict Mode.

The Q&A helper is **not an LLM chatbot**. The user chose a button-driven conversation inspired by Seán's widget. It has six curated topics: experience, projects, technologies, AI/automation, résumé, and contact.

- Uses React state and the browser's native **Popover API** (`popover="auto"`).
- Explicitly labels answers as **prewritten**.
- Supports follow-ups, Other questions, Start over, outside-click/Escape dismissal, and keyboard focus on new answers.
- Conversation stays in memory, including when closed/reopened, and resets on reload or Start over. It is not sent to a service or stored persistently.
- Section links close the helper; external links open a new tab.
- Keep answer facts synchronized with `src/content.ts` and the current résumé. Do not add an AI API, secret, or backend just to maintain the existing helper.

## Verified project positioning

See [project-review.md](project-review.md) for durable source links, contribution commits, and limitations. Public repository code and commit history were inspected; those projects' code and test suites were **not executed**.

| Project | Context | Key facts to retain |
| --- | --- | --- |
| [DCLA Loan Solutions](https://github.com/GMCEO-21/DCLA-Loan-Solutions) | Featured freelance work | User confirmed it is used live in production. Current source: React/TypeScript, NestJS, TypeORM/PostgreSQL, Material UI. Clement is a full-stack contributor, not the sole author. |
| [RoadSense](https://github.com/menxio/RoadSense-system) | Featured freelance work for another team's capstone | Clement's scope was **web/API**, including Laravel broadcasts connected to React notifications/table updates, registration, and violation API handling. Hardware, IoT, and detection models were outside his scope. |
| [Online Wedding Invitation](https://github.com/menxio/online-wedding-invitation) | Featured freelance work | Next.js/TypeScript, Tailwind, Supabase/PostgreSQL, Zod; configurable invitation, RSVP flow, and coordinator tools. A real public screenshot and [live invitation](https://michael-and-marris.vercel.app/) are included. |
| [Tap-N-Ride](https://github.com/Clem-Capstone/Tap-N-Ride) | Clement's college capstone | React/TypeScript, Express/Node.js, MongoDB, and connected fare-system hardware. Describe it as team project scope unless personal responsibilities are confirmed. |
| [PAO-OAS](https://github.com/menxio/PAO-OAS) | College project | React, Express, MongoDB appointment workflows. This is the correct repository URL; an older portfolio link was replaced. |

Specific DCLA contributions supported by `menxio` commits include collection batches, manager repayment approvals, role-gated endpoints, approval-review UI/validation/tests, loan-policy controls, and collections/savings interface improvements. Older cached repository descriptions can still mention Express; the reviewed current backend was **NestJS**.

RoadSense is a monitoring prototype for demonstration/testing, not a verified production enforcement system. Do not claim model accuracy, certified speed measurement, or personal ownership of its Python/YOLO/OCR pipeline.

The wedding RSVP uses a shared link. It does not authenticate each guest against an authoritative guest list. The repository includes validation, Turnstile, database rate limiting, access controls, and admin exports, but these were source observations rather than an independent security assessment. No RSVP was submitted or guest/admin records accessed during the portfolio review.

DCLA and RoadSense currently use **labeled project illustrations**. Avoid presenting them as application screenshots or filling them with invented customer data, numbers, or impact metrics.

## Résumé update workflow and known issue

The latest supplied export was copied from `Downloads/Rubiato, John Clement.pdf` to **`public/resume.pdf`** and committed as `4553245`. It was verified to match the supplied file byte-for-byte and to be served identically by the local Vite server.

Hero, Experience, footer, and Q&A résumé links share `resumeUrl` in `src/content.ts`:

```ts
export const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
```

The no-JavaScript fallback in `index.html` also links to `./resume.pdf`.

**Known unresolved issue inside the PDF:** its embedded portfolio hyperlink URI is `menxio.github.io/clems-portfolio`, without `https://`. The user was informed. Correct the hyperlink address in the editable résumé to **`https://menxio.github.io/clems-portfolio/`**, re-export, then replace `public/resume.pdf` again. Do not claim this was fixed merely because the portfolio download itself works.

The résumé's visible portfolio address was added during this session. The Word layout was edited by the user; no editable Word document was added to this repository. Advice given was to keep the visible URL on one line, shorten the residential address to city/province/country, and place relevant professional experience before education. Those suggestions are not all confirmed as applied.

After any résumé replacement, check the exported PDF's links and the app's résumé download, then commit/push and deploy. Update public copy only when new facts are confirmed.

## Deployment: important distinction

The existing workflow in `.github/workflows/pages.yml`:

- Builds on pushes to `main` and pull requests targeting `main`.
- Runs `npm ci`, `npm run build`, and uploads `dist/` as a Pages artifact.
- **Deploys only on a new manual `workflow_dispatch` run on `main`.**

The deployment condition is:

```yaml
if: github.event_name == 'workflow_dispatch' && github.ref == 'refs/heads/main'
```

Therefore a green push run with **deploy skipped** is expected. **Re-run all jobs on a push run still does not deploy.** Re-running an older manual run also uses that older run's revision; it does not select the latest `main` commit.

### Publish the latest commit

1. Commit and push the intended changes to `main`.
2. In GitHub repository **Settings → Pages**, ensure **Source = GitHub Actions**.
3. Open the **workflow list**, directly: <https://github.com/menxio/clems-portfolio/actions/workflows/pages.yml>.
4. Click **Run workflow** above the run list, select **main**, and click the green **Run workflow** button.
5. Open the new run; verify its commit is the intended latest commit, and both **build** and **deploy** succeed.
6. Check the live portfolio, changed assets, and résumé PDF. Use a hard refresh or private window when diagnosing stale cached content.

The user repeatedly opened an individual historical run instead of the workflow list; give the direct link and distinguish **Run workflow** from **Re-run all jobs** when helping.

The site was initially blank after a push because Pages still used **Deploy from a branch → main → /(root)**, which published the React source rather than the Vite build. Switching to GitHub Actions and deploying the artifact resolved that setup issue.

Manual deployment was an implementation choice, not a GitHub limitation. Automatic deployment on `main` can be implemented if the user asks for it. Do not silently change that behavior during unrelated edits.

If the site address changes, update metadata in `index.html` (including structured data), `public/robots.txt`, `public/sitemap.xml`, the résumé's portfolio link, and relevant documentation. The current GitHub Pages address is already suitable for job applications; a personal domain or a user-site repository named `menxio.github.io` is optional. Preserve previously shared links when planning a migration.

## Validation and previous checks

Commands available:

```sh
npm run check
npm run build
npm run preview
git diff --check
```

`npm run check` is strict TypeScript checking. `npm run build` runs that check and creates the Vite production output in `dist/`. There is no dedicated automated portfolio test suite or `npm test` script at this snapshot. Do not describe project-repository test files as passing tests unless actually run.

Previous session checks passed:

- Production builds and TypeScript checks, most recently after the portrait update.
- Desktop, tablet, 390px, and 320px layout checks without horizontal overflow.
- All five project dialogs, dismissal/focus behavior, and source-link inspection.
- Light/dark theme behavior and persistence.
- Guided Q&A topics, follow-ups, reset, dismissal, and résumé/contact navigation.
- Portrait image loading and caption separation; the updated avatar was visually inspected.
- The latest résumé binary replacement matched the supplied PDF and local HTTP response exactly. A full app rebuild was unnecessary for that copy-only change; GitHub builds it during deployment.

These are historical checks, not a substitute for validating future changes.

On the old Codex Windows sandbox, Vite's configuration bundler sometimes reported `Cannot read directory "../../..": Access is denied` while TypeScript passed. The same build succeeded when run with the environment's normal approved escalation. Treat that as a possible sandbox permission issue, not immediate evidence that `vite.config.ts` is missing. Follow the current environment's approval rules. An npm warning about an old user-level `python` setting was unrelated to the app and did not prevent builds.

## Next improvements, in priority order

1. Correct the résumé's embedded portfolio hyperlink in its editable source, re-export, and update the served PDF.
2. Add sanitized **real DCLA and RoadSense screenshots** in place of their labeled illustrations. The image field already supports screenshot previews.
3. Strengthen case studies with verified outcomes, constraints, and tradeoffs. Ask for evidence rather than inventing metrics.
4. Confirm personal responsibilities for college projects if expanding those case studies.
5. Keep the résumé, `src/content.ts`, and `src/quickAnswersData.ts` aligned as experience changes.
6. Recheck the latest deployed version and PDF after deployment. Keep applying while refining the portfolio; a new framework, real AI chatbot, or custom domain is not a prerequisite.

There is no request to rebuild the site again, add an LLM service, buy a domain, or run/deploy the linked client projects as part of this handoff.
