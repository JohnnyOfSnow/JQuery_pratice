var express = require ('express');
var todoRouter = require ('./routes/todo');
var bodyParser = require ('body-parser');
var app = express ();

app.set ("view engine", "jade");
app.set ("views", __dirname + "/views");

//Configure app to use bodyparser()
//this will let us get data from request
app.use (bodyParser.urlencoded ({extended: true}));
app.use (bodyParser.text ());

//Web address: localhost:3000/restful/~
//~:As you defined in todoRouter's get, post... method.
app.use('/restful', todoRouter);
app.use ('/restful', express.static(__dirname + '/public'));

app.listen (3000, function(){
	console.log ('Ready for 3000...');
})
