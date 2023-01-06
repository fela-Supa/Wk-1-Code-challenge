"use strict";
// challenge 1
// create a function that generates student grades
export const studentGradeGenerator = function () {
  // initializing variables
  const score = parseFloat(document.querySelector("#score").value);
  const gradeOutput = document.querySelector("#gradeOutput");
  let grade;
  const outPutMsg = function (grade, score) {
    return `Score: ${score} Grade: ${grade}`;
  };
  //   setting score range
  if (score >= 0 && score <= 100) {
    // checking for conditions using if else
    if (score > 79) {
      grade = "A";
    } else if (score > 59 && score <= 79) {
      grade = "B";
    } else if (score > 49 && score <= 59) {
      grade = "C";
    } else if (score > 39 && score <= 49) {
      grade = "D";
    } else if (score < 40) {
      grade = "E";
    }
    gradeOutput.innerHTML = outPutMsg(grade, score);
  } else {
    // accounts for inputs that are beyond score range
    gradeOutput.innerHTML = "Please enter a valid score";
  }
};

//  export function to index.js
export default studentGradeGenerator;