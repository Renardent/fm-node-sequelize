const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const {getUserInstance, validateUser} = require('../middlewares/user.mv');

const userRouter = Router();

userRouter.post('/', validateUser, UserController.createUser);
userRouter.get('/', UserController.findAll);
userRouter.get('/:userId', getUserInstance, UserController.findByPK);
userRouter.delete('/:userId', getUserInstance, UserController.deleteByPK);
userRouter.put('/:userId', getUserInstance, UserController.updateUser);
userRouter.get('/groups/:userId', UserController.getUserWithGroups);

module.exports = userRouter;