var express = require('express');
var app = express(); 
var path = require('path');


app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
  res.render('layout1', {
    title: 'Home'
  });
});

app.get('/newpage', function(req, res){
  res.render('anotherpage', {
    title: 'Home'
  });
});

app.listen (3000, function(){
	console.log ('Ready for 3000...');
})