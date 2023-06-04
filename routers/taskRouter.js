const {Router} = require('express');
const TaskController = require('../controllers/Task.controller');
const {validateTask} = require('../middlewares/task.mw');
const {getUserInstance} = require('../middlewares/user.mw');
const pagination = require('../middlewares/pagination.mw');

const taskRouter = Router();

taskRouter.post('/:userId', validateTask, getUserInstance, TaskController.createTask);
taskRouter.get('/:userId', pagination, getUserInstance, TaskController.getAllTasksOfUsers);
taskRouter.get('/count/:userId', getUserInstance, TaskController.getCountOfTasks); 

module.exports = taskRouter;