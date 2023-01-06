"use strict";
// challenge 3
// accessing elements from the DOM
const nssfDisplay = document.querySelector("#nssf");
const nhifDisplay = document.querySelector("#nhif");
const payeeDisplay = document.querySelector("#payee");

// listing NHIF contribution
const nhifDeductions = function (grossSalary) {
  let deduction;
  if (grossSalary > 1000 && grossSalary <= 6000) {
    deduction = 150;
  } else if (grossSalary >= 6000 && grossSalary < 8000) {
    deduction = 300;
  } else if (grossSalary >= 8000 && grossSalary < 12000) {
    deduction = 400;
  } else if (grossSalary >= 12000 && grossSalary < 15000) {
    deduction = 500;
  } else if (grossSalary >= 15000 && grossSalary < 20000) {
    deduction = 600;
  } else if (grossSalary >= 20000 && grossSalary < 25000) {
    deduction = 750;
  } else if (grossSalary >= 25000 && grossSalary < 30000) {
    deduction = 850;
  } else if (grossSalary >= 30000 && grossSalary < 35000) {
    deduction = 900;
  } else if (grossSalary >= 35000 && grossSalary < 40000) {
    deduction = 950;
  } else if (grossSalary >= 40000 && grossSalary < 45000) {
    deduction = 1000;
  } else if (grossSalary >= 45000 && grossSalary < 50000) {
    deduction = 1100;
  } else if (grossSalary >= 50000 && grossSalary < 60000) {
    deduction = 1200;
  } else if (grossSalary >= 60000 && grossSalary < 70000) {
    deduction = 1300;
  } else if (grossSalary >= 70000 && grossSalary < 80000) {
    deduction = 1400;
  } else if (grossSalary >= 80000 && grossSalary < 90000) {
    deduction = 1500;
  } else if (grossSalary >= 90000 && grossSalary < 100000) {
    deduction = 1600;
  } else if (grossSalary >= 100000) {
    deduction = 1700;
  } else {
    deduction = 0;
  }
  nhifDisplay.innerHTML = `NHIF: ${deduction}`;
  return deduction;
};

// calculating NSSF contribution
const calcNssfDeductions = function (grossSalary) {
  let deductableIncome;
  let deduction;
  const calcDeduction = function () {
    return 0.06 * deductableIncome;
  };

  if (grossSalary >= 3000 && grossSalary <= 18000) {
    deductableIncome = grossSalary;
    deduction = calcDeduction();
  } else if (grossSalary > 18000) {
    deductableIncome = 18000;
    deduction = calcDeduction();
  } else {
    deduction = 0;
  }
  nssfDisplay.innerHTML = `NSSF: ${deduction}`;
  return deduction;
};

// calculating payee
const calcPayee = function (grossSalary) {
  // initializing variables
  let taxBeforeRelief;
  let payee;
  const personalRelief = 2400;
  const nssfDed = calcNssfDeductions(grossSalary);
  const taxableIncome = grossSalary - nssfDed;
  const minTaxableIncome = 24000;
  // first 24 000 = 10%
  //  next 100 000 = 25%
  const secondPart = 100000 / 12;

  //  calculating tax before relief
  if (taxableIncome >= minTaxableIncome) {
    const exceededAmount = taxableIncome - minTaxableIncome;
    if (exceededAmount > 0 && exceededAmount <= secondPart) {
      taxBeforeRelief =
        minTaxableIncome * 0.1 + (secondPart - exceededAmount) * 0.25;
    } else if (exceededAmount > secondPart) {
      // in excess of 388000 = 30%
      const thirdPart = exceededAmount - secondPart;
      taxBeforeRelief =
        minTaxableIncome * 0.1 + secondPart * 0.25 + thirdPart * 0.3;
    }
    payee = parseInt(taxBeforeRelief - personalRelief);
  } else {
    payee = 0;
  }
  payeeDisplay.innerHTML = `PAYEE: ${payee}`;
  return payee;
};

export const netSalaryCalculator = function () {
  // getting grossSalary value
  const grossSalary = document.querySelector("#grossSalary").value;
  // initializing variable
  const nhifDed = nhifDeductions(grossSalary);
  const nssfDed = calcNssfDeductions(grossSalary);
  const taxableIncome = grossSalary - nssfDed;
  const payee = calcPayee(grossSalary);
  const netSalaryDisplay = document.querySelector("#netSalary");
  const taxableIncomeDisplay = document.querySelector("#taxableIncome");
  // display taxable income
  taxableIncomeDisplay.innerHTML = `Taxable income: ${taxableIncome}`;

  const netSalary = taxableIncome - payee - nhifDed;

  // display net salary
  netSalaryDisplay.innerHTML = `Net Salary: ${netSalary}`;
};

//  export main(netSalaryCalculator) function to index.js
export default netSalaryCalculator;