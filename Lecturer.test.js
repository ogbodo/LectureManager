const Lecturer = require("./Lecturer");
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

test("Lecturer can read only all timetables belonging to him/her", function() {
  lecturer1.createTimetable("Mth211", "AUD2", "8am", "10am", "wed");
  expect(lecturer1.readAllTimetables()).toBeTruthy();
});

test("Lecturers can read their own timetables by course title", function() {
  expect(lecturer2.readTimetableByCourseTitle("Pol212")).toBeTruthy();
});

test("Lecturer cannot read others timetables", function() {
  expect(lecturer1.readTimetableByCourseTitle("Pol212")).toBeFalsy();
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
