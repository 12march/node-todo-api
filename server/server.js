var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'cook dinner'
// });
//
// newTodo.save().then((doc) => {
//     console.log('saved Todo', doc);
// }, (e) => {
//     console.log('unable to save');
// });

var otherTodo = new Todo({
    text: 'cook dinner',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log('saved Todo', doc);
}, (e) => {
    console.log('unable to save');
});
