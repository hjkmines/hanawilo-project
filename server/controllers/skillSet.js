const SkillSets = require('../models/skillSet');

const getSkillSets = async (req, res, next) => {
    try {
        const skillSets = await SkillSets.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(skillSets);
    } catch (err){
        next(err);
    }
}

const createSkillSets = async (req, res, next) => {
    try {
        const skillSets = await SkillSets.create(req.body);
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(skillSets);
    } catch {
        next(err)
    }
}

const deleteSkillSets = async (req, res, next) => {
    try {
        const skillSets = await SkillSets.deleteSkillSets();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(skillSets);
    } catch (err) {
        next(err);
    }
}

// Exports
module.exports = {
    getSkillSets,
    createSkillSets,
    deleteSkillSets,
}