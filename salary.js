function calculateNetSalary(basicSalary,benefits) {
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
  
function prompt(){
    if(isNaN(calculateNetSalary)); {
        console.log("Input values of Basic Salary and Benefits must be >0");
        
     }
    }
    prompt()
}



calculateNetSalary()