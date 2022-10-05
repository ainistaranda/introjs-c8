const students = require("./students.json")


// Display all the student's first names one at a time, one per line.

function showStudents(studentList) {
  
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i]
    console.log(student.firstName) 
  }
};

showStudents(students)