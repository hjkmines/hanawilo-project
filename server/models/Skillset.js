const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSetSchema = new Schema({
  skillSet: {
    type: String,
    required: [true, "Please choose a skillset"],
    unique: false,
    enum: ["Programming Language", "Framework", "Other Technologie"],
  },
  programmingCategory: {
    type: String,
    unique: false,
    enum: [
      "JavaScript",
      "Java",
      "Python",
      "Fortran",
      "C",
      "C++",
      "C#",
      "Ruby",
      "Rust",
      "Kotlin",
      "Swift",
      "TypeScript",
      "PHP",
    ],
  },
  frameworkCategory: {
    type: String,
    unique: false,
    enum: [
      "React",
      "Django",
      "Pytorch",
      "Spring",
      "Angular",
      "Vue",
      "jQuery",
      "Express.js",
      "Node.js",
      "Ruby on Rails",
    ],
  },
  otherTechnologies: {
    type: String,
    unique: false,
    enum: ["git", "SQL", "NoSQL", "CI/CD", "DevOps", "Cloud Development"],
  },
});

module.exports = mongoose.model("Skillset", SkillSetSchema);
