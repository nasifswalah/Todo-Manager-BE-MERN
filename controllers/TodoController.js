const ToDoModel = require('../models/TodoModel');

const getTodo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
};

const saveTodo = async (req, res) => {
    const { text } = req.body;

    await ToDoModel.create({text})
    .then((data) => {
        console.log('Added Successfully')
        res.send(data);
    })
    .catch((error) => console.log(error))
};

const updateTodo = async (req, res) => {
    const { _id, text} = req.body;

    await ToDoModel
        .findByIdAndUpdate( _id, {text})
        .then((data) => {
            console.log("Updated Succesfully")
            res.send(data)
        })
        .catch((error) => console.log(error))
};

const deleteTodo = (req, res) => {
    const { _id } = req.body;

     ToDoModel.findByIdAndDelete(_id)
    .then((data) => {
        console.log("Deleted Successfully")
        res.send(data)
    })
    .catch((error) => console.log(error))
};

module.exports = {
    getTodo,
    saveTodo,
    updateTodo,
    deleteTodo
};


