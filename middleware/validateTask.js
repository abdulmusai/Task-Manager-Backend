const data = require('../data/tasks.json');

module.exports = function validateTask(req, res, next) {
    const{ title, description } = req.body;
if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required'});
}
next();
};


