var mongoClient = require ('mongodb').MongoClient;

module.exports.QueryGet = function (data, callback){
  mongoClient.connect ("mongodb://localhost:27017", function (err, client){
  	if (err) throw err;

  	var db = client.db ("tododb");

  	db.collection ("Todolist", function (err, collection){
  	  if (data.message){
  	  	collection.find ({'message': {$regex : '.*' + data.message + '.*'}}).toArray (function (err, items){
  	  	  if (err) throw err;
  	  	    callback (items);
  	  	});
  	  }else{
  	  	collection.find ({}).toArray (function (err, items){
  	  		if (err) throw err;
  	  		callback (items);
  	  	});
  	  }
  	});
  });
}