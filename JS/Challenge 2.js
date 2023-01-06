"use strict";
// challenge 2
// create a function that checks speed limit

export const speedDetector = function () {
  // accessing elements from the DOM
  const speed = document.querySelector("#speed").value;
  const messageOutput = document.querySelector("#messageOutput");
  const pointsOutput = document.querySelector("#pointsOutput");
  // setting a speed range
  if (speed > 0 && speed <= 400) {
    // initializing variables
    const speedLimit = 70;
    let demeritPoints;
    // calculating speed above the speed limit
    const exceededSpeed = speed - speedLimit;
    // checking for various conditions
    if (speed <= speedLimit) {
      demeritPoints = 0;
      messageOutput.innerHTML = "OK";
    } else {
      demeritPoints = Math.ceil(exceededSpeed / 5);
    }
    // display points
    pointsOutput.innerHTML = `points: ${demeritPoints}`;

    if (demeritPoints > 0 && demeritPoints <= 12) {
      messageOutput.innerHTML = "Warning";
    } else if (demeritPoints > 12) {
      messageOutput.innerHTML = "Licence Suspended";
    }
  } else {
    // default to account for speed outside speed limit range
    pointsOutput.innerHTML = "Please enter a valid speed";
    messageOutput.innerHTML = "......";
  }
};
//  export function to index.js
export default speedDetector;