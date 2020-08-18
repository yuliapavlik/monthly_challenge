let MongoClient = require('mongodb').MongoClient;

let assert = require('assert');

let url = 'mongodb://localhost:27017/Blog';

module.exports = {
    signup: function(name, email, password){
        MongoClient.connect(url, function(err, db) {
            console.log('connected')
        });
    }
}
