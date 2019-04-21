const DB = require("./database");
const User = require("./User");
const Lecturer = require("./Lecturer");
const InheritProperty = require("./Interface");

function Admin(name) {
  User.call(this, name, "admin");
}

InheritProperty(Admin, User);

Admin.prototype.createNewLecturer = function(
  fullname,
  department,
  arrayOfcourses,
  email,
  password
) {
  const lecturers = this.retrieveAllLecturer();

  this.id = lecturers.length > 0 ? lecturers[lecturers.length - 1].id + 1 : 1;
  var lect = new Lecturer(
    fullname,
    department,
    arrayOfcourses,
    email,
    password,
    this.id
  );

  this.saveLecturer(lect);

  return lect;
};

Admin.prototype.searchLecturerByEmail = function(email) {
  const lecturers = this.retrieveAllLecturer();
  var found = false;
  for (var i = 0; i < lecturers.length; i++) {
    if (lecturers[i].email === email) {
      found = lecturers[i];
      break;
    }
  }
  console.log("FOUND: ", found);

  return found;
};

Admin.prototype.readAllLecturers = function() {
  return this.retrieveAllLecturer();
};

Admin.prototype.deleteLecturerByEmail = function(email) {
  const lecturers = this.retrieveAllLecturer();
  var found = false;
  for (var i = 0; i < lecturers.length; i++) {
    if (lecturers[i].email === email) {
      found = true;
      lecturers.splice(i, 1);
      break;
    }
  }
  console.log("DELETED: ", found);

  return found;
};

Admin.prototype.readTimetableByDepartment = function(department) {
  const timetables = this.retrieveAllTimetable();

  var foundTimetables = [];
  for (var i = 0; i < timetables.length; i++) {
    if (timetables[i].department === department) {
      foundTimetables.push(timetables[i]);
    }
  }
  return foundTimetables.length > 0 || false;
};

Admin.prototype.readLecturersByDepartment = function(department) {
  const lecturers = this.retrieveAllLecturer();

  var foundLecturers = [];
  for (var i = 0; i < lecturers.length; i++) {
    if (lecturers[i].department === department) {
      foundLecturers.push(lecturers[i]);
    }
  }
  return foundLecturers.length > 0 || false;
};

Admin.prototype.deleteAllTimetable = function() {
  DB["timetable"].splice(0, DB["timetable"].length);
};

Admin.prototype.deleteAllLecturers = function() {
  DB["lecturer"].splice(0, DB["lecturer"].length);
};

Admin.prototype.saveLecturer = function(lecturer) {
  DB["lecturer"].push(lecturer);

  console.log("Lecturer saved!");
};

Admin.prototype.retrieveAllLecturer = function() {
  return DB["lecturer"];
};

module.exports = Admin;
