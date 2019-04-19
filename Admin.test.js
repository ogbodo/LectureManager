const Admin = require("./Admin");
var admin, lecturer;
test("create new admin user", function() {
  admin = new Admin("Admin1");

  expect(admin.name).toBe("Admin1");
});
test("Admin can create new lecturer", function() {
  lecturer = admin.createNewLecturer(
    "ogbodo Izu",
    "maths",
    ["mth"],
    "solomon@SpeechGrammarList.com",
    "solomon"
  );
  expect(lecturer).toBeTruthy();
});
