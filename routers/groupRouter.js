const {Router} = require('express');
const GroupController = require('../controllers/Group.controller');
const pagination = require('../middlewares/pagination.mw');
const {getUserInstance} = require('../middlewares/user.mw');

const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.get('/', pagination, GroupController.getAllGroups);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/:userId', getUserInstance, GroupController.getUserGroups);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);

module.exports = groupRouter;

