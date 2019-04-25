const DB = require("./database");

function User(name, role) {
  this.name = name;
  this.role = role || "Lecturer";

  console.log(this);
}

User.prototype.retrieveAllTimetable = function() {
  return DB["timetable"];
};

User.prototype.retrieveLastTimetableId = function() {
  const timetables = this.retrieveAllTimetable();

  return timetables.length > 0 ? timetables[timetables.length - 1].id : 0;
};

User.prototype.readTimetableByCourseTitle = function(title) {
  const timetables = this.retrieveAllTimetable();
  var foundTimetables = [];
  for (var i = 0; i < timetables.length; i++) {
    if (timetables[i].title === title && this.role === "admin") {
      foundTimetables.push(timetables[i]);
    } else {
      if (timetables[i].title === title && timetables[i].userId === this.id) {
        foundTimetables.push(timetables[i]);
      }
    }
  }
  return foundTimetables.length > 0 || false;
};

User.prototype.readAllTimetables = function() {
  const timetables = this.retrieveAllTimetable();
  var lecturerTimetables = [];

  for (var i = 0; i < timetables.length; i++) {
    if (timetables[i].userId === this.id) {
      lecturerTimetables.push(timetables[i]);
    }
  }

  return lecturerTimetables;
};

module.exports = User;
