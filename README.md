# MyPortfolio

A personal portfolio built with **React 18 + Vite**. It uses an editorial cream-and-navy look: a bold sans-serif paired with an italic serif, a giant name behind the hero, a swinging lanyard ID card and a "periodic table" of skills.

No UI or animation libraries are used. Every effect is plain React hooks and CSS, so you can explain any part of it in an interview.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Make it yours

All content lives in **`src/data/portfolio.js`**: name, bio, links, skills, projects, experience, certifications and achievements. Values marked `TODO` are placeholders.

- **Photo:** add `public/profile.jpg` and set `image: './profile.jpg'`. It shows in the hero blob and on the ID card. Without a photo, your initials are shown.
- **Résumé:** add `public/resume.pdf`.
- **Skill logos:** come from [Devicon](https://devicon.dev). Set `icon` to the path of the icon you want.

## Sections & animations

| Section | What moves | Where |
| --- | --- | --- |
| Preloader | 0→100 counter, then 5 staggered "blinds" lift away | `Preloader.jsx` |
| Cursor | Dot + trailing ring (lerp in `requestAnimationFrame`), shows labels like "Drag" or "Open" | `Cursor.jsx` |
| Navbar | Pill indicator slides to the active section; hides on scroll down; dark mode toggle with a circular reveal (View Transitions API) | `Navbar.jsx`, `useTheme.js` |
| Hero | Giant name with a **mouse spotlight** (CSS mask) and parallax letter-spacing on scroll; morphing blob; orbiting skill chips; text-scramble role switcher; magnetic button | `Hero.jsx`, `TextScramble.jsx`, `Magnetic.jsx` |
| About | **Physics lanyard ID card**: swings like a pendulum, can be dragged and thrown, flips on click, and has a holographic shine | `IdCard.jsx` |
| Skills | Periodic table tiles flip in as a diagonal wave; same-family tiles outline on hover; family filter | `Skills.jsx` |
| Work | Expanding accordion panels (side by side on desktop, stacked on mobile) with a curtain-wipe reveal and generated animated artwork | `Projects.jsx`, `ProjectVisual.jsx` |
| Experience | Sticky **odometer year** that rolls to the current entry; timeline line fills as you scroll | `Experience.jsx` |
| Certifications | Dark highlight glides to the hovered row | `Certifications.jsx` |
| Achievements | Count-up numbers + 3D tilt cards with glare | `Achievements.jsx`, `TiltCard.jsx` |
| Contact | Velocity-reactive marquee; headline words "ink in" as you scroll; copy-email toast | `Contact.jsx`, `Marquee.jsx` |

Text reveals letter by letter through `SplitText.jsx` + `Reveal.jsx`, which use an `IntersectionObserver` from `useInView.js`.

## Good practices included

- **Accessibility.** Uses semantic sections and a skip link. The ID card works from the keyboard, and buttons have `aria-*` states. All motion is disabled when the OS setting `prefers-reduced-motion` is on.
- **Performance.** Scroll effects write CSS variables instead of React state, so scrolling doesn't re-render. Animation loops stop when they are idle, and the custom cursor is turned off on touch devices.
- **Responsive.** Works from 320px phones to wide desktops, with fluid type via `clamp()`.

## Deploy

- **Vercel / Netlify:** import the repo. The build command is `npm run build` and the output folder is `dist`.
- **GitHub Pages:** `vite.config.js` already uses `base: './'`, so you can publish the `dist/` folder as is.
