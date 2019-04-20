# Concept of Prototype Oriented programming (POP) in Javascript
This project is used to illustrate how Prototype Oriented programming (POP) in Javascript works. also, how Test/Behaviourial Driven Development (TDD/BDD) in javascript works with the aid of Jest Framework.

## Problem Statement
A higher institution running a six-month program hired you to develop a software that enables only their lecturers to manage their timetables with the following specifications:

- There should be an admin.
- Admin can create lecturers with respect to lecturer’s departments.
- Admin can read all lecturers.
- Admin can delete a lecturer by email.
- Admin can delete all lecturer.
- Admin can read a lecturer by email.
- Admin can read a lecturer by departments.
- Lecturers can create their timetable based on the course they can teach and assign time, day and venue to it.
- Admin can read all timetables. 
- Admin can delete all timetable.
- Admin can read timetable by course title.
- Admin can read timetable by departments.
- Lecturers should be able to read all their own timetable only.
- Lecturers should be able to read their own timetable by course title.
- Lecturers should be able to update their own timetable.

### NOTE: My tests accounted for all possible edge cases. Also, made sure that all tests are failing before actual implementation.

### To setup and run the project
```Clone the Project```
Install the jest framework for testing
```npm init```
```npm install --save-dev jest```

``To run all test cases: npm test``


