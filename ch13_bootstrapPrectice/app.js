var express = require ('express');
var app = express ();

app.set ("view engine", "jade");
app.set ("views", __dirname + "/views");

app.get ('/', function (req, res){
  res.render('main');
})

app.listen (3000, function (){
	console.log ('Ready for 3000...');
})
