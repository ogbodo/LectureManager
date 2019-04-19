const fileSystem = require("fs");
const User = require("./User");
const InheritProperty = require("./Interface");

function Admin(name) {
  User.call(this, name, "admin");
}

InheritProperty(Admin, User);
module.exports = Admin;
