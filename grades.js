function generateGrade() {
  //prompt user to input student marks.
  const grades = prompt("Enter student marks(0 to 100);");
  //convert the input to a number.
  grades = parseFloat(marks);
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

  //shows the grade and marks f
  console.log(`The grade for marks ${marks} is: ${grades}`);
}
//calling the function
generateGrade();
