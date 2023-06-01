const {Task, User} = require('../models');

module.exports.createTask = async(req, res, next) => {
    try {
        const {body, userInstance} = req;
        // const user = await User.findByPk(userId);
        const result = await userInstance.createTask(body);
        res.status(201).send(result);
    } catch(error) {
        next(error)
    }
}

module.exports.getAllTasksOfUsers = async(req, res, next) => {
    try {
       const {userInstance} = req;
       const tasks = await userInstance.getTasks();
       res.status(200).send(tasks);
    } catch(error) {
        next(error)
    }
}


module.exports.getCountOfTasks = async(req, res, next) => {
    try {
        const {userInstance} = req;
        const tasks = await userInstance.countTasks();
        return res.status(200).send(`${tasks}`);
     } catch(error) {
         next(error)
     }
}