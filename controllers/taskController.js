const { v4: uuidv4} = require('uuid');
let tasks = require('../data/tasks.json');

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.id})
    res.json(tasks);
};

const createTask= async(req, res) => {
    const { title, description} = req.body;
    const task = new Task({title, description, user: req.user.id});
    await task.save();
    res.status(201).json(task); 

    const newTask = {
    id: uuidv4(),
    title,
    description,
    completed: false,
};

tasks.push(newTask);
res.status(201).json(newTask);

};




const updateTask = async(req, res) => {
    const { id } = req.params;
    const { title, description, completed} = req.body;

    const task = await Task.findOne({_id: req.params.id, user: req.user.id});
    if (!task) return res.status(404).json({ message: 'Task not found'});

task.title = req.body.title || task.title;
task.description = req.body.description || task.description;
task.completed = req.body.completed ?? task.completed;

await task.save();
res.json(task);
};

const deleteTask = async(req, res) => {
    const task = await Task.findOneAndDelete({ _id: req/params, user: req.user.id}); 
    if (!task) return res.status(404).json({ message: 'Task not found'});

    res.status(204).send();
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask};