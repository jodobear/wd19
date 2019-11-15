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

### Course Component

In the `index.html` we had 2 courses, of which we took cut the following and created a React component, like so:

    import React from 'react';

    export default class Course extends React.Component {
        render() {
            return (
                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">Web Development in 2019 - From Start to Finish</h3>
                    <div className="subheading mb-3">Beginner</div>
                        <p>In this course we will be looking at building a production
                            level React UI project using the latest web development
                            technologies. Upon completing this course you should have
                            a solid understanding of the technologies used by a typical
                            web developer in 2019.
                            The course covers Webpack, Babel, SASS, CSS, HTML, JavaScript
                            (ES6), React, Bootstrap and many other technologies and techniques.
                        </p>
                    </div>
                <div className="resume-date text-md-right">
                    <a href="https://www.udemy.com/web-development-in-2019-from-start-to-finish/?couponCode=TENPERCENT"><span className="text-primary">View More</span></a>
                </div>
            </div>
            )
        }
    }

Then we removed everything from the `home` page and imported the `Course` component and rendered it, like so:

    return (
        <div>
            <Course />
        </div>
    )

Then we added the `root` element to `index.html`, like so:

    <div id="root"></div>

This should have rendered the page as is without doing the above except that the above course component should have been under the `root` div element and be a React component. Insteadt we got some other React components like Image, Title, and such. This was mitigated by removing the `dist` directory. There should be some code in `dist` which is interfering at this point.
