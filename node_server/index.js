const express = require('express'); // importing express - different syntax than ES6.
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html")); //res = resource
app.use('/static', express.static('../dist')) // whenever you encounter static, look into '../dist' directory
app.listen(port, () => console.log(`Example app listening on port ${port}!`));