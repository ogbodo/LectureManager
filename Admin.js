const fileSystem = require("fs");
const User = require("./User");
const Lecturer = require("./Lecturer");
const InheritProperty = require("./Interface");

function Admin(name) {
  User.call(this, name, "admin");

  this.createNewLecturer = function(
    fullname,
    department,
    arrayOfcourses,
    email,
    password
  ) {
    return new Lecturer(fullname, department, arrayOfcourses, email, password);
  };
}

InheritProperty(Admin, User);
module.exports = Admin;
