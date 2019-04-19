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

    saveLecturer(lect);

    return lect;
  };

  this.searchLecturerByEmail = function(email) {
    const lecturers = retrieveAllLecturer();
    var found = false;
    for (var i = 0; lecturers.length; i++) {
      if (lecturers[i].email === email) {
        found = lecturers[i];
        break;
      }
    }
    console.log("FOUND: ", found);

    return found;
  };

  this.readAllLecturers = function() {
    return retrieveAllLecturer();
  };
}

InheritProperty(Admin, User);

function saveLecturer(lecturer) {
  DB["lecturer"].push(lecturer);

  console.log("Lecturer saved!");
}

function retrieveAllLecturer() {
  return DB["lecturer"];
}

module.exports = Admin;
