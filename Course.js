function Course(userId, title, venue, startTime, endTime, day) {
  this.title = title;
  this.venue = venue;
  this.startTime = startTime;
  this.endTime = endTime;
  this.day = day;
  this.userId = userId;

  console.log(this);
}

module.exports = Course;
