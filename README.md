# tgcjananga.github.io

Personal portfolio site, built with React (Create React App), Tailwind CSS and Framer Motion, and deployed to GitHub Pages at https://tgcjananga.github.io.

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm test         # run tests
npm run build    # production build into build/
npm run deploy   # build and publish to GitHub Pages
```

## Project structure

```
public/                 static assets (images, favicon, index.html)
src/
  components/
    layout/             Navbar, Footer
    sections/           Hero, About, Skills, Projects, Achievements, Contact
    ui/                 shared primitives (Reveal, SectionHeading)
  data/portfolioData.js all site content: profile, experience, skills, projects
  utils/                scroll helpers and tech icon mapping
  Portfolio.js          page composition
docs/                   design notes and task lists
```

To update the site's content, edit `src/data/portfolioData.js`.
