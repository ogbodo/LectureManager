const Admin = require("./Admin");
var admin, lecturer, timetable;
test("create new admin user", function() {
  admin = new Admin("Admin1");

  expect(admin.name).toBe("Admin1");
});
test("Admin can create new lecturer", function() {
  lecturer = admin.createNewLecturer(
    "ogbodo Izu",
    "maths",
    ["mth"],
    "solomon@gmail.com",
    "solomon"
  );
  expect(lecturer).toBeTruthy();
});

test("lecturer can create timetable", function() {
  timetable = lecturer.createTimetable("Mth401", "AUD", "10am", "12pm", "mon");
  expect(timetable).toBeTruthy();
});

test("Admin can search for lecturer by email", function() {
  admin.createNewLecturer(
    "Treasure ogbonna",
    "political science",
    ["pol212", "soc222"],
    "tressy@gmail.com",
    "tressy"
  );
  var lecturer = admin.searchLecturerByEmail("solomon@gmail.com");
  expect(lecturer).toBeTruthy();
});

test("Admin can read all lecturers", function() {
  expect(admin.readAllLecturers()).toBeTruthy();
});

test("Admin can read all timetables", function() {
  expect(admin.readAllLecturers()).toBeTruthy();
});

test("Admin can delete a lecturer by email", function() {
  var oldLength = admin.readAllLecturers().length;
  admin.deleteLecturerByEmail("solomon@gmail.com");
  expect(admin.readAllLecturers().length).toBe(oldLength - 1);
});
