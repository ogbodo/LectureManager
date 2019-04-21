const DB = require("./database");
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
}

InheritProperty(Lecturer, User);

Lecturer.prototype.createTimetable = function(
  courseTitle,
  venue,
  startTime,
  endTime,
  day
) {
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
  this.saveTimetable(timetable);

  return timetable;
};

Lecturer.prototype.updateTimetable = function(
  courseTitle,
  startTime,
  day,
  timetableUpdate
) {
  const timetables = this.retrieveAllTimetable();
  var foundTimetables = false;

  for (var i = 0; i < timetables.length; i++) {
    if (
      timetables[i].title === courseTitle &&
      timetables[i].userId === this.id &&
      timetables[i].startTime === startTime &&
      timetables[i].day === day
    ) {
      console.log("BEFORE UPDATE: ", timetables[i]);

      timetables[i].title = this.getValidValue(
        timetables[i].title,
        timetableUpdate[0]
      );
      timetables[i].venue = this.getValidValue(
        timetables[i].venue,
        timetableUpdate[1]
      );
      timetables[i].startTime = this.getValidValue(
        timetables[i].startTime,
        timetableUpdate[2]
      );
      timetables[i].endTime = this.getValidValue(
        timetables[i].endTime,
        timetableUpdate[3]
      );
      timetables[i].day = this.getValidValue(
        timetables[i].day,
        timetableUpdate[4]
      );

      console.log("AFTER UPDATE: ", timetables[i]);
      foundTimetables = timetables[i];
    }
  }
  return foundTimetables;
};

Lecturer.prototype.getValidValue = function(oldValue, newValue) {
  return newValue || oldValue;
};

Lecturer.prototype.saveTimetable = function(timetable) {
  DB["timetable"].push(timetable);

  console.log("Timetable saved!");
};

module.exports = Lecturer;
