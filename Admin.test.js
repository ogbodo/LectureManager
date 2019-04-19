const Admin = require("./Admin");
test("create new admin user", function() {
  admin = new Admin("Admin1");
  //   admin.createNewLecturer(
  //     "ogbodo Izu",
  //     "maths",
  //     ["mth"],
  //     "solomon@SpeechGrammarList.com",
  //     "solomon"
  //   );
  expect(admin.name).toBe("Admin1");
});
