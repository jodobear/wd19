# Web Dev Chris Hawkes 2019

## 025 - Build

Added `build` to `package.json` for command `webpack --mode produciton`. To run we use `npm run build`.

This creates the `dist` folder with the production build. Till now even for `buildProd` we were using `webpack-dev-server`. The `dist` folder packages your entire app and creates the files; `app.bundle.js`, `app.bundle.LICENSE`, `app.bundle.js.map`, `index.html`, `style.css`.

Each of these files contain respective content all optimized. You don't really need the `index.html` since you'll be using some sort of framework like `ASP.NET` or `Django` or `Node.js` that have their own templates which is what you'll use.
