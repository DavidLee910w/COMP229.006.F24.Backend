const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/David', function (req, res) {
    res.send('Hello David')
  })


app.listen(3000)