# Web Dev Chris Hawkes 2019

## 027 - Importing Bootstrap Theme

Imported [Resume Theme](https://startbootstrap.com/themes/resume/). Extracted the files within `scss` folder into the project `scss` folder and `index.html` into project `scss` folder.

### src/index.html before replacement

This was replaced by the theme `index.html`

    <html>
        <head>
            <title>
            Lick`em windows good!
            </title>
        </head>
        <body>
            <header>
            <nav>
                <div><a href="/">Logo</a></div>
                <div><a href="/">Home</a></div>
                <div><a href="/">Home</a></div>
            </nav>
            </header>
            <div id="root"></div>
        </body>
        </html>

Then deleted core bootstrap import within `index.html` since we have already included it within our project and custom styles since we are going to be referenceing one bundled CSS file which is going to be injected it in memory, following two lines:

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/resume.min.css" rel="stylesheet">

### NOTES on the SASS structure of the theme

* All the `.scss` files that start with `_` are treated as plugins and won't be compiled.
* `resume.scss` imports all the `_*.scss` (plugin) files and build it into the `min`(?) file so, all we need to to is import this file within our project, which we do in `index.js` instead of our `main.scss`.

When we run our `buildDev` we see the theme loaded as our website. It doesn't have all those images and such which were to be loaded from the lines we deleted in `index.html`.