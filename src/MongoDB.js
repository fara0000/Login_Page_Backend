const MongoClient = require('mongodb').MongoClient;

export default class MongoDB {
    constructor() {
        this._url = "mongodb+srv://Sevinc:7777@cluster0-hoetm.mongodb.net/test?retryWrites=true&w=majority";
    }

    createCollection = (collectionName) => {
        MongoClient.connect(this._url, function(err, db) {
            console.log('MONGO STARTED');
            if (err) throw err;
            
            const dbo = db.db("LP");
          
            dbo.createCollection(collectionName, function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
            });
        });
    };

    insertData = (collection,obj) => {
        MongoClient.connect(this._url, function(err, db) {
            if (err) throw err;
            const dbo = db.db("LP");
            dbo.collection(collection).insertOne(obj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
        });
    };

   findData = (collection,obj) => {
        MongoClient.connect(this._url, function(err, db) {
            if (err) throw err;
            const dbo = db.db("LP");
            dbo.collection(collection).findOne(obj, function(err, result) {
            if (err) throw err;
            console.log(result.name);
            db.close();
            });
        });
   };
}
