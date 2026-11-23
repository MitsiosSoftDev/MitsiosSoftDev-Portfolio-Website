# Dimitris Erotokritou - Portfolio

My single-page portfolio as a full-stack software developer. I build web applications with React and TypeScript on the frontend and C#, ASP.NET Core, and SQL Server on the backend.

[Visit the portfolio at derotokritou.dev](https://derotokritou.dev/)

## What’s on the site

- Selected projects with technology icons and repository links. The featured IoT threat detection thesis includes an animated client-server diagram.
- My background, professional experience, a CV link, and contact links for GitHub, LinkedIn, and email.
- A scrolling Skills carousel with the technologies and tools I use.
- A responsive layout with smooth section navigation and light, dark, and system themes.
- A looping typewriter and code animation. The header control pauses the hero and diagram animations, and the site respects the system’s reduced-motion preference.

## Built with

- React, TypeScript, and Vite
- Bootstrap, React Bootstrap, and SCSS
- next-themes, Framer Motion, and React Icons

## Run locally

Use Node.js 22.12 or newer and npm.

```bash
git clone https://github.com/MitsiosSoftDev/MitsiosSoftDev-Portfolio-Website.git
cd MitsiosSoftDev-Portfolio-Website
npm ci
npm run dev
```

Open the local URL printed by Vite.

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run lint`    | Run ESLint.                                        |
| `npm run build`   | Type-check the project and build it into `dist/`.  |
| `npm run preview` | Serve the production build locally after building. |

## Project layout

- `src/components/` contains the page layout and reusable components.
- `src/data/projects.ts` defines the featured project and the project cards.
- `src/constants.ts` defines the technology icons used by the cards and Skills carousel.
- `src/styles/` contains the theme and component styles.
- `public/` contains the CV, favicons, sitemap, and custom-domain configuration.

## Deployment

The portfolio is configured for GitHub Pages. With push access to the repository, run `npm run deploy` to build the site and publish `dist/` to the `gh-pages` branch. The custom domain is defined in `public/CNAME`.
