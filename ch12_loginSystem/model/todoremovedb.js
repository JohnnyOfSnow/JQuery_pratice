var mongoClient = require ('mongodb').MongoClient;

module.exports.RemoveSave = function (data, callback){
  mongoClient.connect ("mongodb://localhost:27017", function (err, client){
  	if (err) throw err;

  	var db = client.db ("tododb");

  	db.collection ("Todolist", function (err, collection){
  	  collection.remove ({id: data.id}, {w: 1}, function (err, result){
  	  	if (err) throw err;
  	  	callback ("Document delete Successfully!");
  	  });
  	});
  });
}