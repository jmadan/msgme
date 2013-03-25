//var mongo = require('ringo-mongodb');
//var client = mongo.MongoClient('localhost', 27017);
var db = require('ringo-mongodb').connect('mongodb://localhost/msgme');
exports.dbname = function(collectionName){
	return db.getCollection(collectionName);
}
//var db = client.getDB('msgme');
