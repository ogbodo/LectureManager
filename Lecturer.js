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

    DB["timetable"].push(timetable);
    console.log("Timetable saved!");
    return timetable;
  };
}

InheritProperty(Lecturer, User);
module.exports = Lecturer;
