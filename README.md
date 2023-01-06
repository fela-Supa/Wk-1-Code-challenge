# phase-1-Wk1-Codechallenge

## Description
This is an application comprised of:

- Student Grades Generator
- Speed Limit Detector
- Net Salary Calculator


# Running The Live Hosted Application 
On your browser [open this link](https://phase-1-week-1-code-challenge.vercel.app/) to access the live web application

* The web page has a navigation section at the top containing the links to the challenges.
* Click on the specific challenge you want to go to.
* Each challenge has an input field with a placeholder to describe what value to enter.
* After inputing the value, click on the button below the input field to display the results.

# Running Application on Local Server

## Getting Started
In order for you to use the content on this repo ensure you have the following:

* A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)
*  nodejs 9.0+


## Installation

To use this repo on your machine requires some simple steps

### Alternative One

* Open a terminal / command line interface on your computer
* Clone the repo by using the following to create a copy on your local machine:

        git clone https://github.com/sainamercy/phase-1-week-1-code-challenge 
       
* Change directory to the repo folder:

        cd phase-1-week-1-code-challenge 

* (Optional) Open it in ``Visual Studio Code``

        code .

* (Alternate Option) Open it in any editor of your choice.

### Alternative Two

* On the top right corner of this page there is a button labelled ``Fork``.
* Click on that button to fork the repo to your own account.
* Take on the process in ``Alternative One`` above.
* Remember to replace your username when cloning.

        git clone https://github.com/your-username-here/phase-1-week-1-code-challenge


## Running the application

To run the application, you can use the following steps to run the app.

* Install required dependencies from npm

      npm install

* Run the application

      npm start

# Brief Challenge Description

* All the challenges were solved using JavaScript.
* A user interface has been created to test all the challenges.
* Each challenge has its own file where the main functions have been exported and compiled in one file - `index.js`.

### Challege-1 Student Grade generator

* One main function was created to solve the challenge
* `if else statement` was used to check for various conditions
* A range of `0 - 100` was set at the begining of the function to avoid grading invalid scores

### Challenge-2 Speed Detector

* One main function was created to solve the challenge
* `if else statement` was used to check for various conditions
* A speed range of upto `400km/hr` was set to avoid unrealistic speed

### Challenge-3 Net Salary Calculator

* The function had several conditions to check. Therefore, a couple of helper functions were created.
* `if else statement` was used to check for various conditions
* Minimum deductable income for `NHIF` is set to `ksh. 1000`
* The `NSSF` deduction calculation assumes a rate of `6%` through out
* Minimum deductable income for `NSSF` is set to `ksh. 3000`
* The `payee` calculation incorporated `pension relief` and checked for conditions to match as much as possible to the internet sources
* A main Function `netSalaryCalculator` was created to merge all the functions


# Authors
This project was contributed to by:
- [Alvin Njonjo](https://github.com/fela-Supa)

# License
The project is licensed by `ISC`.




