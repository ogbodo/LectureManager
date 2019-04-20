const DB = require("./database");

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
