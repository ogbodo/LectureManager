const DB = require("../database");

function User(name, role) {
  this.name = name;
  this.role = role || "Lecturer";

  console.log(this);

  this.retrieveAllTimetable = function() {
    return DB["timetable"];
  };

  this.retrieveLastTimetableId = function() {
    const timetables = this.retrieveAllTimetable();

    return timetables.length > 0 ? timetables[timetables.length - 1].id : 0;
  };

  this.readTimetableByCourseTitle = function(title) {
    const timetables = this.retrieveAllTimetable();
    var found = false;
    for (var i = 0; i < timetables.length; i++) {
      if (timetables[i].title === title) {
        console.log(":::::: ", timetables[i]);
        found = timetables[i];
        break;
      }
    }
    return found;
  };

  this.readAllTimetables = function() {
    const timetables = this.retrieveAllTimetable();
    var lecturerTimetables = [];

    for (var i = 0; i < timetables.length; i++) {
      if (timetables[i].userId === this.id) {
        lecturerTimetables.push(timetables[i]);
      }
    }

    console.log(this.id + ": ", lecturerTimetables);

    return lecturerTimetables;
  };
}

module.exports = User;
