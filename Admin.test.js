const Admin = require("./Admin");

var admin, lecturer1, lecturer2, timetable;

test("create new admin user", function() {
  admin = new Admin("Admin1");
  expect(admin.name).toBe("Admin1");
});

test("Admin can create new lecturer", function() {
  lecturer1 = admin.createNewLecturer(
    "ogbodo Izu",
    "mathematics",
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
  timetable = lecturer2.createTimetable("Pol212", "LR66", "4pm", "6pm", "fri");
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

test("Admin can read timetables by course title", function() {
  expect(admin.readTimetableByCourseTitle("Mth211")).toBeTruthy();
});

test("Lecturers can read their own timetables by course title", function() {
  expect(lecturer2.readTimetableByCourseTitle("Pol212")).toBeTruthy();
});

test("Lecturer cannot read others timetables", function() {
  expect(lecturer1.readTimetableByCourseTitle("Pol212")).toBeFalsy();
});

test("Admin can read timetables by department", function() {
  expect(admin.readTimetableByDepartment("mathematics")).toBeTruthy();
});

test("Admin trying to read timetables by department not existing", function() {
  expect(admin.readTimetableByDepartment("Chemistry")).toBeFalsy();
});

test("Admin can read Lecturers by department", function() {
  expect(admin.readLecturersByDepartment("mathematics")).toBeTruthy();
});

test("Admin trying to read Lecturers by department not existing", function() {
  expect(admin.readLecturersByDepartment("Chemistry")).toBeFalsy();
});

test("Lecturers can update their own timetables", function() {
  var timetableUpdate = ["Eng421", "LR66", "3pm", "5pm", "thursday"];
  expect(
    lecturer2.updateTimetable("Pol212", "4pm", "fri", timetableUpdate)
  ).toBeTruthy();
});

test("Lecturers trying to update their own timetables with one or more update data not inputed", function() {
  var timetableUpdate = ["MTH302", "AUD", "3pm", "5pm"];
  expect(
    lecturer1.updateTimetable("Mth401", "10am", "mon", timetableUpdate)
  ).toBeTruthy();
});

test("Lecturers cannot update others timetable", function() {
  var timetableUpdate = ["Eng421", "LR66", "3pm", "5pm", "thursday"];
  expect(
    lecturer1.updateTimetable("Pol212", "4pm", "fri", timetableUpdate)
  ).toBeFalsy();
});

test("Lecturers trying to update their own timetables with one or more wrong needed data not inputed", function() {
  var timetableUpdate = ["Eng421", "LR66", "3pm", "5pm", "thursday"];
  expect(
    lecturer1.updateTimetable("Pol212", "4pm", timetableUpdate)
  ).toBeFalsy();
});

test("Admin can delete a lecturer by email", function() {
  expect(admin.deleteLecturerByEmail("solomon@gmail.com")).toBeTruthy();
});

test("Admin trying to delete a lecturer by none existing email", function() {
  expect(admin.deleteLecturerByEmail("solomon@gmail.com")).toBeFalsy();
});

test("Admin can delete all lecturer", function() {
  admin.deleteAllLecturers();
  expect(admin.readAllLecturers().length).toBe(0);
});

test("Admin can delete all timetables", function() {
  var oldLength = admin.readAllLecturers().length;
  admin.deleteAllTimetable();
  expect(admin.retrieveAllTimetable().length).toBe(0);
});
