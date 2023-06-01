const {Router} = require('express');
const TaskController = require('../controllers/Task.controller');
const UserController = require('../controllers/User.controller');
const {getUserInstance} = require('../middlewares/user.mv');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:userId', getUserInstance, UserController.findByPK);
router.delete('/user/:userId', getUserInstance, UserController.deleteByPK);
router.put('/user/:userId', getUserInstance, UserController.updateUser);

router.post('/task/:userId', getUserInstance, TaskController.createTask);
router.get('/task/:userId', getUserInstance, TaskController.getAllTasksOfUsers);
router.get('/task-count/:userId', getUserInstance, TaskController.getCountOfTasks);

module.exports = router;