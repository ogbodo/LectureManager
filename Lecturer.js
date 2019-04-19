const User = require("./User");
const InheritProperty = require("./Interface");

function Lecturer(name, department, arrayOfcourses) {
  User.call(this, name);

  this.department = department;
  this.courses = arrayOfcourses;
}

InheritProperty(Lecturer, User);
module.exports = Lecturer;
