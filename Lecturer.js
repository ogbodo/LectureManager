const DB = require("../database");
const User = require("./User");
const Course = require("./Course");
const InheritProperty = require("./Interface");

function Lecturer(fullname, department, arrayOfcourses, email, password) {
  User.call(this, fullname);

  this.department = department;
  this.courses = arrayOfcourses;
  this.email = email;
  this.password = password;

  this.createTimetable = function(title, venue, startTime, endTime, day) {
    var timetable = new Course(this.id, title, venue, startTime, endTime, day);
    saveTimetable(timetable);

    return timetable;
  };
}

InheritProperty(Lecturer, User);

function saveTimetable(timetable) {
  DB["timetable"].push(timetable);

  console.log("Timetable saved!");
}
module.exports = Lecturer;
