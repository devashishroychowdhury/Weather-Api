const mysql = require('mysql')
const data = require('../data/api-data')

console.log(data)

let dbconnect = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'weather_data'
    // table -> weather
})

dbconnect.connect(function (err) {
    if (err) throw err
    else console.log("Connection is established")
})

