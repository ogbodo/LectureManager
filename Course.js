function Course(id, title, venue, startTime, endTime, day, userId, department) {
  this.title = title;
  this.venue = venue;
  this.startTime = startTime;
  this.endTime = endTime;
  this.day = day;
  this.userId = userId;
  this.id = id;
  this.department = department;

  console.log(this);
}

module.exports = Course;
