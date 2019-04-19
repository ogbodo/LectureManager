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

  this.createTimetable = function(courseTitle, venue, startTime, endTime, day) {
    var timetable = new Course(
      courseTitle,
      venue,
      startTime,
      endTime,
      day,
      this.id
    );
    saveTimetable(timetable);

    return timetable;
  };

  this.retrieveAllTimetable = function() {
    return this.readAllTimetables(this.id);
  };
}

InheritProperty(Lecturer, User);

function saveTimetable(timetable) {
  DB["timetable"].push(timetable);

  console.log("Timetable saved!");
}
module.exports = Lecturer;
