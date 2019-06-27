// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db');
    }
    console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//     text: 'eaten lanuch'
// }, {
//     $set: {
//         text: 'ate launch'
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    name: 'Emmanuel'
}, {
    $set: {
    name: 'Ebube'
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

    // db.close();
});
