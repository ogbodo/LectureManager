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
    const lecturers = retrieveAllLecturer();

    this.id = lecturers.length > 0 ? lecturers[lecturers.length - 1].id + 1 : 1;
    var lect = new Lecturer(
      fullname,
      department,
      arrayOfcourses,
      email,
      password,
      this.id
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

  this.deleteLecturerByEmail = function(email) {
    const lecturers = retrieveAllLecturer();
    var found = false;
    for (var i = 0; lecturers.length; i++) {
      if (lecturers[i].email === email) {
        found = lecturers[i];
        lecturers.splice(i, 1);
        break;
      }
    }
    console.log("DELETED: ", found);

    return found;
  };

  this.readTimetableByDepartment = function(department) {
    const timetables = this.retrieveAllTimetable();

    var foundTimetables = [];
    for (var i = 0; i < timetables.length; i++) {
      if (timetables[i].department === department) {
        foundTimetables.push(timetables[i]);
      }
    }
    return foundTimetables.length > 0 || false;
  };

  this.readLecturersByDepartment = function(department) {
    const lecturers = retrieveAllLecturer();

    var foundLecturers = [];
    for (var i = 0; i < lecturers.length; i++) {
      if (lecturers[i].department === department) {
        foundLecturers.push(lecturers[i]);
      }
    }
    return foundLecturers.length > 0 || false;
  };

  this.deleteAllTimetable = function() {
    DB["timetable"].splice(0, DB["timetable"].length);
  };

  this.deleteAllLecturers = function() {
    DB["lecturer"].splice(0, DB["lecturer"].length);
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
