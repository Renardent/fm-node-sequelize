const {Router} = require('express');
const TaskController = require('../controllers/Task.controller');
const UserController = require('../controllers/User.controller');
const GroupController = require('../controllers/Group.controller');
const {getUserInstance, validateUser} = require('../middlewares/user.mv');
const {validateTask} = require('../middlewares/task.mv');

const router = Router();

router.post('/user', validateUser, UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:userId', getUserInstance, UserController.findByPK);
router.delete('/user/:userId', getUserInstance, UserController.deleteByPK);
router.put('/user/:userId', getUserInstance, UserController.updateUser);
router.get('/users/groups/:userId', UserController.getUserWithGroups);

router.post('/task/:userId', validateTask, getUserInstance, TaskController.createTask);
router.get('/task/:userId', getUserInstance, TaskController.getAllTasksOfUsers);
router.get('/task-count/:userId', getUserInstance, TaskController.getCountOfTasks);

router.post('/groups', GroupController.createGroup);
router.put('/groups/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
router.get('/groups/:userId', getUserInstance, GroupController.getUserGroups);

module.exports = router;