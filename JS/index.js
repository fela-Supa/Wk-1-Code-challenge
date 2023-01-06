import { speedDetector } from "./Challenge 2";
import { studentGradeGenerator } from "./Challenge 1";
import { netSalaryCalculator } from "./Challenge 3";


// appending rest of all the challenges to the DOM
const gradeBtn = document.querySelector("#gradeBtn");
const pointsBtn = document.querySelector("#pointsBtn")
const salaryBtn = document.querySelector("#salaryBtn")

gradeBtn.addEventListener("click", function() {
    console.log("gradeBtn clicked");
    studentGradeGenerator();
});

pointsBtn.addEventListener("click", function() {
    console.log("pointsBtn clicked");
    speedDetector();
});

salaryBtn.addEventListener("click", function() {
    console.log("salaryBtn clicked!");
    netSalaryCalculator();
});
