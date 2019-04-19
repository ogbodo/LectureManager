const fileSystem = require("fs");

function User(name, role) {
  this.name = name;
  this.role = role || "Lecturer";
  this.id = 0;
  console.log(this);
}

module.exports = User;
