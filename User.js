const DB = require("../database");

function User(name, role) {
  this.name = name;
  this.role = role || "Lecturer";
  this.id = 0;
  console.log(this);
}
User.prototype.readTimetableByCourseTitle = function(title) {
  const timetables = retrieveAllTimetable();
  var found = false;
  for (var i = 0; timetables.length; i++) {
    if (timetables[i].title === title) {
      found = timetables[i];
      break;
    }
  }
  return found;
};

// User.prototype.readAllTimetables = function() {
//   return DB["timetable"];
// };

function retrieveAllTimetable() {
  return DB["timetable"];
}
module.exports = User;
