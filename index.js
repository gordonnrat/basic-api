const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const data = ['The Avengers', 'All Dogs Go to Heaven', 'The Aristocats', 'The Brave Little Toaster', 'The Lord of the Rings', 'The Revenant', 'Cats & Dogs']

app.use(cors())


app.get('/all', (req, res) => {
    res.json(data)
})

app.get('/find', (req, res) => {
    const contains = req.query.contains;
    const startsWith = req.query.startsWith;
    let containsTerm = [];

    if (startsWith === undefined) {
        containsTerm = data.filter(movies => movies.toLowerCase().includes(contains.toLowerCase()));
    } else if (contains === undefined) {
        containsTerm = data.filter(movies => movies.toLowerCase().startsWith(startsWith.toLowerCase()));
    }

    res.json(containsTerm);
})

app.delete('/all', (req, res) => {
    data.length = 0;
    res.sendStatus(200)
})

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port 80')
})