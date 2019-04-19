const Admin = require("./Admin");
var admin, lecturer1, lecturer2, timetable;
test("create new admin user", function() {
  admin = new Admin("Admin1");

  expect(admin.name).toBe("Admin1");
});
test("Admin can create new lecturer", function() {
  lecturer1 = admin.createNewLecturer(
    "ogbodo Izu",
    "maths",
    ["mth"],
    "solomon@gmail.com",
    "solomon"
  );
  lecturer2 = admin.createNewLecturer(
    "Treasure ogbonna",
    "political science",
    ["pol212", "soc222"],
    "tressy@gmail.com",
    "tressy"
  );

  expect(lecturer1).toBeTruthy();
});

test("lecturer can create timetable", function() {
  timetable = lecturer1.createTimetable("Mth401", "AUD", "10am", "12pm", "mon");
  timetable = lecturer2.createTimetable("Bio212", "LR66", "4pm", "6pm", "fri");

  expect(timetable).toBeTruthy();
});

test("Admin can search for lecturer by email", function() {
  var lecturer = admin.searchLecturerByEmail("solomon@gmail.com");
  expect(lecturer).toBeTruthy();
});

test("Admin can read all lecturers", function() {
  expect(admin.readAllLecturers()).toBeTruthy();
});

test("Admin can read all timetables", function() {
  expect(admin.retrieveAllTimetable()).toBeTruthy();
});

test("Lecturer can read only all timetables belonging to him/her", function() {
  timetable = lecturer1.createTimetable("Mth211", "AUD2", "8am", "10am", "wed");

  expect(lecturer1.readAllTimetables()).toBeTruthy();
});

test("Admin can delete a lecturer by email", function() {
  var oldLength = admin.readAllLecturers().length;
  admin.deleteLecturerByEmail("solomon@gmail.com");
  expect(admin.readAllLecturers().length).toBe(oldLength - 1);
});
