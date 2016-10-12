var express = require('express');

var app = express()
var port=4000;



app.use(express.static(__dirname + '/public'))

app.set('view engine','ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.use('/',static_routes)

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
