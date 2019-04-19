const fileSystem = require("fs");
const User = require("./User");
const Lecturer = require("./Lecturer");
const InheritProperty = require("./Interface");

function Admin(name) {
  User.call(this, name, "admin");

  this.saveLecturers = function(listOfUsers) {
    fileSystem.writeFileSync(
      "../lecturer.json",
      JSON.stringify([listOfUsers], null, 2),
      null
    );
  };

  this.createNewLecturer = function(
    fullname,
    department,
    arrayOfcourses,
    email,
    password
  ) {
    var lect = new Lecturer(
      fullname,
      department,
      arrayOfcourses,
      email,
      password
    );
    this.saveLecturers(lect);

    return lect;
  };
}

InheritProperty(Admin, User);
module.exports = Admin;
