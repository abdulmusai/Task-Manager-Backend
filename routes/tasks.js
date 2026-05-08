const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

const validateTask = require('../middleware/validateTask');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware)

router.get('/', getAllTasks);
router.post('/', validateTask, createTask);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
