# Portfolio UI/UX Fine-Tuning — Task List

Direction: keep the existing dark slate + cyan identity, make it feel sharper and more
professional, and fix accessibility, interaction and performance issues.

## 1. Foundation
- [x] Replace the Tailwind Play CDN (dev-only, runs in the browser, causes unstyled flash) with build-time Tailwind v3
- [x] Add a real typeface: Inter (UI) + JetBrains Mono (labels/metadata), preconnected from Google Fonts
- [x] Global `scroll-behavior: smooth` + `scroll-margin-top` so the fixed navbar never covers section headings
- [x] Global `:focus-visible` ring and `::selection` colour
- [x] Respect `prefers-reduced-motion` (disable blob pulse, hover lifts, reveal animations)
- [x] Better `<head>`: theme-color matching the background, Open Graph / Twitter meta, descriptive title
- [x] Remove unused CRA boilerplate (`App.css`, `logo.svg`)

## 2. Navigation
- [x] Scroll-spy: active nav item follows scroll position (currently only updates on click)
- [x] Logo becomes a real `<a>`/button (keyboard-reachable), not a clickable `<div>`
- [x] Mobile menu button: `aria-label`, `aria-expanded`, `aria-controls`, 44×44 px touch target
- [x] Mobile menu closes on Escape and on resize to desktop
- [x] Passive scroll listener; single shared `scrollToSection` helper (remove duplicate)
- [x] Scroll progress bar under the navbar

## 3. Hero
- [x] Fix visual hierarchy: one primary CTA ("View my work") + one secondary ("Get in touch") side by side
- [x] Social links become a compact icon row with accessible labels (no more 3 competing coloured buttons)
- [x] Replace the `innerHTML` image-fallback hack with a React state fallback
- [x] Add an "open to opportunities" status pill and a scroll-down cue
- [x] Larger avatar with eager loading + explicit dimensions (no layout shift)

## 4. Sections (shared)
- [x] One reusable `SectionHeading` (eyebrow label + title + optional subtitle) for consistency
- [x] Subtle scroll-reveal using the already-installed `framer-motion` (reduced-motion aware)
- [x] Remove hover "lift" from non-clickable cards — it falsely signals they are clickable
- [x] Skill chips: no hover gradient / fake interactivity on static labels

## 5. Projects
- [x] Images visible at full strength (were 40% opacity and washed out)
- [x] Graceful placeholder when an image is missing (Deepfake Detector has no image)
- [x] `loading="lazy"` + fixed aspect ratio on project images
- [x] Remove the dead "View Details" button (did nothing and was hover-only → invisible on touch)
- [x] Optional `github` / `demo` links per project rendered only when provided
- [x] Status badge colour reflects state (Ongoing / Completed / date range)
- [x] Odd last card spans the full row instead of leaving an empty gap

## 6. Achievements, Contact, Footer
- [x] Achievements: simplify rank-icon logic, readable placement text
- [x] Contact: correct trailing icons (phone ≠ "send"), copy-to-clipboard for email with feedback
- [x] Contact: remove redundant duplicate CTA block, keep one clear call-to-action
- [x] Footer: Quick Links use smooth scroll, icon hover states on the link (not just the icon), ArrowUp icon instead of "↑" text
- [x] Fix invisible tech colour (`GitHub Actions` was `text-gray-800` on a dark background)

## 7. Verify
- [x] `npm run build` succeeds with no warnings (built with `CI=true`, so warnings would fail)
- [x] `npm test` passes (old CRA "learn react" test replaced with a real one)
- [x] Screenshot check at 375 / 768 / 1440 px — no horizontal scroll, Inter loads, scroll-spy + progress bar work
- [ ] Owner review in a real browser (`npm start`), including mobile menu and keyboard Tab navigation
- [ ] Add real project screenshots (`public/images/projects/deepfake-detector.jpg`) and GitHub/demo links in `portfolioData.js`
- [ ] Optional: add a CV/Resume PDF to `public/` and set `personalInfo.resume`
