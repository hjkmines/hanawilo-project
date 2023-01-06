const SkillSet = require('../models/Skillset');

const getSkill = async (req, res, next) => {
    try { 
        const skillSet = await SkillSet.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(skillSet);
    } catch (err) {
        next(err);
    }
}

const updateSkill = async (req, res, next) => {
    try {
        const SkillSet = await SkillSet.findByIdAndUpdate(
            req.params.skillSetId,
            { $set: req.body},
            { new: true, runValidators: true }
        );
        res 
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(onUpdate);
    } catch (err) {
        res.status(404).send(`Can't update user skill, ${err.message}`)
        next(err);
    }
}

const deleteSkill = async (req, res, next) => {
    try {
        const SkillSet = await SkillSet.deleteSkill();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(SkillSet);
    } catch (err) {
        next (err)
    }
}

module.exports = {
    getSkill,
    updateSkill,
    deleteSkill
}