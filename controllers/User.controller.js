const {User} = require('../models');

module.exports.createUser = async (req,res,next) => {
    try {
        const {body} = req;
        const createdUser = await User.create(body);
        return res.status(201).send(createdUser);
    } catch(error) {
        next(error);
    }
}

module.exports.findAll = async (req,res,next) => {
    try {
        const results = await User.findAll();
        return res.status(201).send(results);
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
