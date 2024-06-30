# Toy-problem

# Grade generator(challenge 1)

A simple commadn-line application to determine grades based of student marks

# Description

The project prompts the user to input student marks and the grades are outputed as follows:
-A:marks greater than 79
-B:marks between 60 and 79
-C:marks between 50 and 59
-D:marks between 40 and 49
-E:marks less than 40

# installation

To install and run this project locally,follow these steps:
1.clone the repository:
git clone git@github.com:Jeremy-3/Codechallenge1.git

2.navigate to the project directory:
cd codechallenge wk1

# code
```javascript
function generateGrade() {
  //prompt user to input student marks.
  const grades = prompt("Enter student marks(0 to 100);");
   //convert the input to a number.
    grades=parseFloat(marks)
   //check if the marks are within the valid range or not.
  if (marks < 0 || marks > 100) {
    console.log("invalid marks!Please enter a value between 0 and 100.");
  } else {
    const marks = "grade";
    //determines the grade based on marks
    if (marks > 79) {
      grade("A");
    } else if (marks >= 60) {
      grade("B");
    } else if (marks >= 50) {
      grade("C");
    } else if (marks >= 40) {
      grade("D");
    } else if (marks < 40) {
      grade("F");
    }
  }
  
//shows the grade and marks 
  console.log(`The grade for marks ${marks} is: ${grades}`);
}
//calling the function
generateGrade();
```

# Running test

1. open the grades.js file from your folder,run node (name of folder)/grades.js
   2.enter the student marks when prompted

# Speed Demerit Points Calculator

This project is a simple JavaScript program that calculates demerit points based on the speed of a car. If the speed exceeds the limit, the program will compute and display the demerit points. If the demerit points exceed a certain threshold, it will indicate that the driver's license should be suspended.



# How it works

1. The user is prompted to enter the speed of the car.
2. If the speed is less than or equal to the speed limit (70 km/h), the program outputs "Ok".
3. For every 5 km/h over the speed limit, the program adds one demerit point.
4. If the total demerit points exceed 12, the program outputs "License suspended".

# Installation

To install and run this project locally,follow these steps:
1.clone the repository:
git clone git@github.com:Jeremy-3/Codechallenge1.git

2.navigate to the project directory:
cd codechallenge wk1

## code

```javascript
function speedDemerits(speed) {
  const speedlimit = 70;
  const minDemeritPoints = 5;
  const maxDemeritPoints = 12;
  if (speed <= speedlimit) {
    console.log("Ok");
  } else {
    const exccessSpeed = speed - speedlimit;
    const demeritPoints = Math.floor(exccessSpeed / minDemeritPoints);
    console.log(`Points:${demeritPoints}`);

    if (demeritPoints > maxDemeritPoints) {
      console.log("licesnse suspended");
    }
  }
  prompt();
  function prompt(details) {
    if (isNaN(speed)) {
      console.log("Invalid input.Please enter the speed of the car.");
      return;
    }
  }
}
//call function
speedDemerits();
```

# note

1:Ensure that the input provided is a numeric value to avoid errors.
2:This program is intended for educational purposes and might need adjustments for real-world applications.

# Net Salary Calculator

This project is a simple JavaScript program that calculates an individual’s net salary by getting the inputs of basic salary and benefits. It calculates the payee (i.e., tax), NHIF deductions, NSSF deductions, gross salary, and net salary.

# installation
To install and run this project locally,follow these steps:
1.clone the repository:
git clone git@github.com:Jeremy-3/Codechallenge1.git

2.navigate to the project directory:
cd codechallenge wk1
## How It Works

1. Input: The user is prompted to enter their basic salary and benefits.
2. Calculations:
   - Gross Salary: Sum of basic salary and benefits.
   - PAYE (Tax): Calculated based on the KRA tax rates.
   - NHIF Deductions: Calculated based on the NHIF rates.
   - NSSF Deductions: Calculated based on the NSSF rates.
   - Net Salary: Gross salary minus PAYE, NHIF, and NSSF deductions.

## How the rates are calculated

The rates used for calculations are based on the following:

### PAYE (Pay As You Earn) Tax Rates

- Up to Ksh 24,000: 10%
- Ksh 24,001 - Ksh 32,333: 25%
- Ksh 32,334 - Ksh 500,000: 30%
- Ksh 500,001 - Ksh 800,000: 32.5%
- Above Ksh 800,000: 35%

### NHIF Deductions

- Up to Ksh 5,999: Ksh 150
- Ksh 6,000 - Ksh 7,999: Ksh 300
- Ksh 8,000 - Ksh 11,999: Ksh 400
- Ksh 12,000 - Ksh 14,999: Ksh 500
- Ksh 15,000 - Ksh 19,999: Ksh 600
- Ksh 20,000 - Ksh 24,999: Ksh 750
- Ksh 25,000 - Ksh 29,999: Ksh 850
- Ksh 30,000 - Ksh 34,999: Ksh 900
- Ksh 35,000 - Ksh 39,999: Ksh 950
- Ksh 40,000 - Ksh 44,999: Ksh 1000
- Ksh 45,000 - Ksh 49,999: Ksh 1100
- Ksh 50,000 - Ksh 59,999: Ksh 1200
- Ksh 60,000 - Ksh 69,999: Ksh 1300
- Ksh 70,000 - Ksh 79,999: Ksh 1400
- Ksh 80,000 - Ksh 89,999: Ksh 1500
- Ksh 90,000 - Ksh 99,999: Ksh 1600
- Over Ksh 100,000: Ksh 1700

### NSSF Deductions

- Tier I: 6% of pensionable pay up to Ksh 7,000
- Tier II: 6% of pensionable pay between Ksh 7,001 and Ksh 36,000

# code

```javascript
function calculateNetSalary(basicSalary, benefits) {
  //gross salary
  const grossSalary = basicSalary + benefits;
  //payee
  let payee;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if ((grossSalary <= 32, 333)) {
    payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
    payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 500000) * 0.3;
  } else if (grossSalary <= 800000) {
    payee =
      24000 * 0.1 + (500000 - 32333) * 0.3 + (grossSalary - 800000) * 0.325;
  } else {
    payee =
      24000 * 0.1 + (800000 - 500000) * 0.325 + (8000000 - grossSalary) * 0.35;
  }
}
// nhif deductions
function calculateNhif() {
  let nhif;
  if (grossSalary) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  }

  //nssf calculaations
  function calculateNssf() {
    let nssf;
    if (grossSalary <= 70000) {
      nssf = grossSalary * 0.06;
    } else if (grossSalary <= 36000) {
      nssf = 7000 * 0.06 + (grossSalary - 7000) * 0.06;
    } else {
      nssf = 7000 * 0.06 + (36000 - 7000) * 0.06;
    }
  }
  // Net Salary Calculation

  const netSalary = grossSalary - payee - nhif - nssf;

  console.log(`Gross Salary:ksh${grossSalary}`);
  console.log(`Payee:Ksh ${payee}`);
  console.log(`NHIF:Ksh${nhif}`);
  console.log(`NSSF: Ksh ${nssf}`);
  console.log(`Net Salary: Ksh ${netSalary}`);

  function prompt() {
    if (isNaN(calculateNetSalary));
    {
      console.log("Input values of Basic Salary and Benefits must be >0");
    }
  }
  prompt();
}

calculateNetSalary();
```
## note
1:Ensure that the input provided is a numeric value to avoid errors.
2:This program is intended for educational purposes and might need adjustments for real-world application