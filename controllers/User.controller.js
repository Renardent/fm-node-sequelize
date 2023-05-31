const {User} = require('../models');

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
        const results = await User.findAll();
        return res.status(200).send(results);
    } catch(error) {
        next(error);
    }
}

module.exports.findByPK = async (req,res,next) => {
    try {
        const {params: {id}} = req;
        const findOne = await User.findByPK(id);
        return res.status(200).send(findOne);
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
        const {params: {id}, body} = req;
        const foundedUser = await User.findByPK(id);
        console.log(foundedUser);
        const result = await foundedUser.update(body);
        return res.status(200).send(result);
    } catch(error) {
        next(error);
    }
}

///instance method
///на основі даних, що прийщли з айді(одного рядка), взяти його як екземпляр і передати йому тіло на оновлення і оновити інстенс