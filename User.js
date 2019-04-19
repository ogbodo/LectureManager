const fileSystem = require("fs");

function User(name, role) {
  this.name = name;
  this.role = role || "Lecturer";
  this.id = 0;
}

module.exports = User;
