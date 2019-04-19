const DB = require("../database");
const User = require("./User");
const Course = require("./Course");
const InheritProperty = require("./Interface");

function Lecturer(fullname, department, arrayOfcourses, email, password, id) {
  User.call(this, fullname);

  this.department = department;
  this.courses = arrayOfcourses;
  this.email = email;
  this.password = password;
  this.id = id;

  this.createTimetable = function(courseTitle, venue, startTime, endTime, day) {
    var courseId = this.retrieveLastTimetableId() + 1;
    console.log(courseId);

    var timetable = new Course(
      courseId,
      courseTitle,
      venue,
      startTime,
      endTime,
      day,
      this.id,
      this.department
    );
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
