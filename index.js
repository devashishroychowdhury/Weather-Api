const express = require('express')
const app = express()
const data = require('./data/api-data')

console.log(data)

app.get('/weather', (req, res) => {
    res.json(data)
})

console.log(data)


app.listen(3000)