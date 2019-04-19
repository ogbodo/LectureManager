const DB = require("../database");
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
    var lect = new Lecturer(
      fullname,
      department,
      arrayOfcourses,
      email,
      password
    );

    DB["lecturer"].push(lect);

    return lect;
  };

  this.searchLecturerByEmail = function(email) {
    const timetables = DB["lecturer"];
    var found = false;
    for (var i = 0; timetables.length; i++) {
      if (timetables[i].email === email) {
        found = timetables[i];
        break;
      }
    }
    console.log("FOUND: ", found);

    return found;
  };
}

InheritProperty(Admin, User);
module.exports = Admin;
