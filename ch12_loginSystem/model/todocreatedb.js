var mongoClient = require ('mongodb').MongoClient;

module.exports.InsertNew = function (data, callback){
  mongoClient.connect ("mongodb://localhost:27017", function (err, client){
  	if (err) throw err;

  	var db = client.db ("tododb");

  	db.collection("Todolist", function (err, collection){
  	  if (err) throw err;

  	  collection.find ({}, {'id': 1}).sort ({'id': -1}).limit (1).toArray (function (err, items){
  	  	if (err) throw err;

  	  	var dataset = [];
  	  	var current = 0;

  	  	if (items.length > 0){
  	  		current = items[0].id + 1;
  	  	} 

  	  	data.map (function (obj){
  	  	  dataset.push ({id: current++, message: obj.message});
  	  	});

  	  	collection.insetMany (dataset, function (err, r){
  	  	  callback (r.insertedCount);
  	  	})
  	  });//toArray
  	});
  });
}