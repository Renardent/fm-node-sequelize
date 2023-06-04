const {Router} = require('express');
const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');
const groupRouter = require('./groupRouter');

const router = Router();
router.use('/user', userRouter);
//виносимо маршрути в інші файли з першою адресою
router.use('/task', taskRouter);
router.use('/groups', groupRouter);


module.exports = router;