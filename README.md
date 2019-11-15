# Web Dev Chris Hawkes 2019

## Server - Node & Express

Created a `node_server` directory in project home.
Ran `npm init` and setup a server project and create a configuration file just as we did for the rest of the project.
Then installed Express: `npm install --save express`.
Then we create an `index.js` file which is the entry point to our app as we defined it during project setup.
Pasted starter code from Express website and spun up the server using `node index.js`:

    const express = require('express'); // importing express - different syntax than ES6.
    const app = express()
    const port = 3000

    app.get('/', (req, res) => res.send('Hello, World!')); //res = resource

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

### Extending the Express server

Then we created a `index.html` within the `node_server` directory, which contains the follwing lines:

    <!-- This links to all the css in dist directory -->
    <link rel="stylesheet" href="/static/style.css" />
    <h1>Is this connection from server working?</h1>
    <!-- This links to all the React components linked to the root id -->
    <div id="root"></div>
    <!-- This links to all the js in dist directory -->
    <script src="/static/app.bundle.js"></script>
    <!-- The static helper automatically finds stuff so, you don't have to put the paths, which is defined in index.js in the node_server -->

Then modified the `app.get(...)` function to get `index.html`, like so:

    app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));
