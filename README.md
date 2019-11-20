# Web Dev 19 Chris Hawkes 19-11-08

## 11/08 - Setup

* Using `npm init` to create our node/npm project > results in `package.json`.
* `package.json` project info & dependencies.
* Developer dependencies & Project Dependencies:

        npm install --save-dev webpack webpack-cli webpack-dev-server

* `--save-dev` installs webpack for developer use. It isn't added to the project/production dependencies.
* `npm install --save webpack ...` will save to project dependency.
* As we installed above, it installed it in `node_modules` directory, which is where all the node modules/packages are stored. Add this to `.gitignore`.
* `package-lock.json` is internal `node` functionality that keeps track of `package.json`. Don't mess with it.
* `"buildDev": "webpack-dev-server",` added within `scripts` object in `package.json`. With this now we can run `npm run buildDev` to spin it up.
* If you run it now, will fail since it requires `src` directory.
* After creating `src` if you run `npm run buildDev`, it spins up the `webpack-dev-server` and at `localhost:8080` displays you `index.html`.
