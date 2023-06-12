const {Router} = require('express');
const multer = require('multer');
const path = require('path');
const GroupController = require('../controllers/Group.controller');
const pagination = require('../middlewares/pagination.mw');
const {getUserInstance} = require('../middlewares/user.mw');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  });

const upload = multer({storage});

// const upload = multer({dest: path.resolve(__dirname, '../public/images')});

const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.get('/', pagination, GroupController.getAllGroups);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/user/:userId', getUserInstance, GroupController.getUserGroups);
groupRouter.get('/:groupId', GroupController.getGroupWithAllUsers);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);
groupRouter.post('/:groupId', upload.single('groupImage'), GroupController.createGroupImage);

module.exports = groupRouter;

