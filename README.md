# Web Dev Chris Hawkes 2019

## Advance React

### Adding a Local DB

Added `database` dir in `src` with json object `DB` with `courses` object containing an array or courses and then exported it, like so:

    const DB = {
        "courses": [
            {
                "title": "Web Development in 2019 - From Start to Finish",
                "discription": "In this course ...",
                "level": "Beginner",
                "url": "https://www.udemy.com/web-development-in-2019-from-start-to-finish/?couponCode=TENPERCENT"
            },
            {
                "title": "ASP.NET Core Web Development Bootcamp",
                "discription": "A complete front ...",
                "level": "Beginner",
                "url": "https://www.udemy.com/aspnet-core-web-development-bootcamp/?couponCode=ASPYOUTUBE"
            }
        ]
    }

    export {
        DB
    }

This was then imported in `Course` component as: `import {DB} from '../database/courses'` (note the curly braces) and used in the render function as `let data = DB;`. Since `DB` has an object `courses` we can't just refer as `data.map(..)` we have to use `data.courses.map(..)`.

Also, changed `key` to `index` and used it.

## Unit Testing

Use Jest for React, then there's Mocha that works with Chai. You'll always have two testing frameworks, one for front-end and one for back-end.

## How to Get the Website Live

1. Get a VPS, Domain.
2. Setup the DNS Server.
3. Install Apache, Nginx & `pm2`.
4. Copy your entire project folder to the VPS.
5. Setup the Nginx/Apache config. Below is the reference code for nginx config for codehawke.com from the [repo](https://github.com/chawk/webdev2019/blob/master/codehawke.com)
6. From inside the `node_server` (server directory) run `pm2 index.js` (start point of your app).
7. Congratulations on getting the app to life.

### Nginx config

    server {
            listen 80;
            server_name www.codehawke.com codehawke.com;

            root /home/chrhawkes/webapps/codehawke/webdev2019/;
            if ($http_host != "www.codehawke.com") {
                rewrite ^ http://www.codehawke.com$request_uri permanent;
            }
            # serve static files
            location /static/ {
            alias /home/chrshawkes/webapps/codehawke/webdev2019/dist/;
            expires 365d;
            }

            location / {
                    proxy_pass http://127.0.0.1:9081;
                    proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;

        }
    }
