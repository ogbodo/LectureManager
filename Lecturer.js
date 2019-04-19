const User = require("./User");
const Course = require("./Course");
const InheritProperty = require("./Interface");

function Lecturer(name, department, arrayOfcourses) {
  User.call(this, name);

  this.department = department;
  this.courses = arrayOfcourses;

  this.createTimetable = function(title, venue, startTime, endTime, day) {
    var timetable = new Course(this.id, title, venue, startTime, endTime, day);
    return timetable;
  };
}

InheritProperty(Lecturer, User);
module.exports = Lecturer;
