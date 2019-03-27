var mongoClient = require ('mongodb').MongoClient;

module.exports.UpdataSave = function (data, callback){
  mongoClient.connect ("mongodb://localhost:27017", function (err, client){
  	if (err) throw err;

  	var db = client.db ('tododb');

  	/**
		db.collection.findAndModify({
    	  query: <document>,
    	  sort: <document>,
    	  remove: <boolean>, // default false
    	  update: <document>,
    	  new: <boolean>,
    	  fields: <document>,
    	  upsert: <boolean>,
    	  bypassDocumentValidation: <boolean>,
    	  writeConcern: <document>,
    	  collation: <document>,
    	  arrayFilters: [ <filterdocument1>, ... ]
    	});
  	*/
  	db.collection ("Todolist").findAndModify (
  	  {id: data.id}, //qurey
  	  [],//sort
  	  {$set: {message: data.message}}, //update
  	  {new: true},//new
  	  function (err, doc){
  	  	if (err) throw err;
  	  	callback (doc.value);
  	  })

  });
}