const {Router, request} = require('express');
const UserController = require('../controllers/User.controller');
const pagination = require('../middlewares/pagination.mw');

const {getUserInstance, validateUser} = require('../middlewares/user.mw');


const userRouter = Router();

userRouter.post('/', validateUser, UserController.createUser);
userRouter.get('/', pagination, UserController.findAll);
userRouter.get('/:userId', getUserInstance, UserController.findByPK);
userRouter.delete('/:userId', getUserInstance, UserController.deleteByPK);
userRouter.put('/:userId', getUserInstance, UserController.updateUser);
userRouter.get('/groups/:userId', UserController.getUserWithGroups);

module.exports = userRouter;