const {User, Group} = require('../models');
const pagination = require('../middlewares/pagination.mw');


module.exports.createUser = async (req, res, next) => {
    try{
        const {body} = req;
        const createdUser = await User.create(body);
        return res.status(201).send(createdUser);
    } catch (error) {
        next(error)
    }
}

module.exports.findAll = async (req, res, next) => {
    try {
        const {pagination} = req;
        const results = await User.findAll({
            ...pagination 
        });
        return res.status(200).send(results);
    } catch(error) {
        next(error);
    }
}

module.exports.findByPK = async (req,res,next) => {
    try {
        // const {params: {id}} = req;
        // const findOne = await User.findByPk(id);
        const {userInstance} = req;
        return res.status(200).send(userInstance);
    } catch(error) {
        next(error);
    }
}

module.exports.deleteByPK = async (req,res,next) => {
    try {
        const {params: {id}} = req;
        const deleteOne = await User.destroy({
            where: {
                id
            }
        });
        if (rowsCount) {
            return res.status(200).send('Successfull delete, bro');
        } else {
        return res.status(204).send();
    }
    } catch(error) {
        next(error);
    }
}

// module.exports.updateUser = async (req,res,next) => {
//     try {
//         const {params: {id}, body} = req;
//         const updatedUser = await User.update(body, {
//                 where: {
//                     id
//                 }
//     });
//     console.log(updatedUser);
//     return res.status(200).send();
//     } catch(error) {
//         next(error);
//     }
// }

///static method
///беремо статичні дані

module.exports.updateUser = async (req,res,next) => {
    try {
        // const {params: {id}, body} = req;
        // const foundedUser = await User.findByPk(id);
        const {userInstance} = req;
        const result = await userInstance.update(body);
        return res.status(200).send(result);
    } catch(error) {
        next(error);
    }
}

///instance method
///на основі даних, що прийщли з айді(одного рядка), взяти його як екземпляр і передати йому тіло на оновлення і оновити інстенс


module.exports.getUserWithGroups = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userWithGroups = await User.findByPk(userId, {
            attributes: {
                exclude: ['password']
            },
            include: [Group]
        });
        res.status(200).send(userWithGroups);
    } catch(error) {
        next(error);
    }
} 