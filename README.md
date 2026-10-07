# Paradise Nursery

A shopping cart app for an online plant shop. Browse houseplants by category, add them to a cart, adjust quantities, remove items, and see live totals.

## Features

- A welcoming landing page with company information and a clear call to action
- 18 unique houseplants arranged in three categories
- Product thumbnails, names, prices, light requirements, and add-to-cart controls
- Shared navigation with a live cart quantity badge
- Redux Toolkit cart state with add, increase, decrease, and remove actions
- GitHub Pages-compatible routing through HashRouter

## Technology

Vite, React, TypeScript toolchain (JSX files processed via `allowJs`), shadcn/ui (Tailwind), Redux Toolkit, React Router, Faker (seeded, so data is stable between reloads), picsum.photos for images.

**Note**

Project was scaffolded with shadcn:

```bash
npx shadcn@latest init --preset b3ZOb4unBo --template vite --pointer
```

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The production build is compatible with GitHub Pages. The Vite base path is relative and client-side routes use hash routing so direct navigation works correctly on a static host.

## Project structure

```
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CartItem.jsx
│   │   └── ProductList.jsx
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   └── Landing.jsx
│   ├── data/
│   │   └── plants.js
│   ├── store/
│   │   ├── store.js
│   │   └── CartSlice.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .prettierrc
├── index.html
├── package.json
├── tsconfig.app.json
└── vite.config.ts
```

```
src/
  main.tsx
  App.jsx
  App.css
  data/plants.js
  store/CartSlice.jsx
  store/store.js
  components/Navbar.jsx
  components/ProductList.jsx
  components/CartItem.jsx
  components/AboutUs.jsx
```
