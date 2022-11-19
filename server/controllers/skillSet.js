const SkillSet = require('../models/skillSet');

const getSkillSet = async (req, res, next) => {
    try {
        const skillSet = await SkillSet.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(skillSet);
    } catch (err){
        console.log('Error getting skill set');
        next(err);
    }
}

const createSkillSet = async (req, res, next) => {
    try {
        const skillSet = await SkillSet.create(req.body);
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(skillSet);
    } catch {
        console.log('Error creating skill set');
        next(err)
    }
}

const deleteSkillSet = async (req, res, next) => {
    try {
        const skillSet = await SkillSet.deleteSkillSet();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(response);
    } catch (err) {
        console.log('Error deleting skill sets');
        next(err);
    }
}

// Exports
module.exports = {
    getSkillSet,
    createSkillSet,
    deleteSkillSet,
}