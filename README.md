# Web Dev Chris Hawkes 2019

## Advance React

* Deleted `index.html` in project home - not required for a long time.
* Modifications to `webpack.config`:
  1. Removed `CleanWebpackPlugin` since now we don't want to delete our `dist` directory every time we build as we have some assests which will have to be re-copied into `dist` every time we build. Old `dist` backed up as `_base_web_dv-dist`. Not sure if it's a good idea since you can always have your assets directory ready to be copied everytime you build and have a clean build every time, but following for now.
  2. Imported `express` then added following code in `devServer`for the `static` helper to look for files in `dist`:

            before(app) {
               app.use('/static', express.static(path.resolve(__dirname, 'dist')))
           }

  3. At the moment webpack was using the `index.html` within `src` folder. Changed that to `./node_server/index.html` to use the server `index.html` since it's better that way(why? Since the server serves the webpage?).