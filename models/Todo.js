const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model('Todo0, todoSchema');

module.exports - Todo;