function Course(title, venue, startTime, endTime, day, userId) {
  this.title = title;
  this.venue = venue;
  this.startTime = startTime;
  this.endTime = endTime;
  this.day = day;
  this.userId = userId;

  console.log(this);
}

module.exports = Course;
