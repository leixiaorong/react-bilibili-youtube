var express = require('express')
var app = express()

app.use(express.static('src'))

app.get('/tap_search', function (req, res) {
  res.render('index.html');
});

var server = app.listen(3030, function(){
	var port = server.address().port
	console.log("started server at port",port)
})