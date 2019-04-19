const DB = require("../database");

function User(name, role) {
  this.name = name;
  this.role = role || "Lecturer";
  this.id = 0;
  console.log(this);

  this.retrieveAllTimetable = function() {
    return DB["timetable"];
  };

  this.readTimetableByCourseTitle = function(title) {
    const timetables = this.retrieveAllTimetable();
    var found = false;
    for (var i = 0; timetables.length; i++) {
      if (timetables[i].title === title) {
        found = timetables[i];
        break;
      }
    }
    return found;
  };

  this.readAllTimetables = function(userId) {
    const timetables = this.retrieveAllTimetable();
    var lecturerTimetables = [];
    for (var i = 0; timetables.length; i++) {
      if (timetables[i].userId === userId) {
        lecturerTimetables.push(timetables[i]);
      }
    }
    console.log(userId + ": ", lecturerTimetables);

    return lecturerTimetables;
  };
}

module.exports = User;
