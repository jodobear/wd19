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

All the `.scss` files that start with `_` are called partials. It's a way to break out code and modularize it. They treated as plugins and won't be compiled. It is in `resume.scss` where we import all the partials(like so: `@import "nav.scss"` - note the missing `_`) and this tells SASS that we only want one `scss` file. It is a requirement to start partial filenames with `_` for the SASS compiler. And we just import this one file within our project, which we do in `index.js` instead of our `main.scss`.

When we run our `buildDev` we see the theme loaded as our website. It doesn't have all those images and such which were to be loaded from the lines we deleted in `index.html`.

### NOTES on Mixins

Mixins are code snippets that enable you to define custom styling that you can import anywhere in your code base. They allow you to reuse repetitive code like when you have a lot of animations especially for cross-browser support for rotations and such.

    // defining mixins:
    @mixin body-font {
        font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }

    // importing/referencing mixins:
    body {
        @include body-font;
        padding-top: 54px;
        color: $gray-600;
    }