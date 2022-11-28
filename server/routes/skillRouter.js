const skillRouter = require("express").Router();

const{
   getSkill,
   getSkills,
   updateSkill,
   postSkill,
   deleteSkill,
   deleteSkills,
} = require("../controllers/skills")

skillRouter.route("/")
.get(getSkills)
.post(postSkill)
.delete(deleteSkills)

skillRouter
    .route("/:skillId")
    .get(getSkill)
    .update(updateSkill)
    .delete(deleteSkill)

module.exports = skillRouter;