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
  function prompt() {
    if (isNaN(speed)) {
      console.log("Invalid input.Please enter the speed of the car.");
      return;
    }
  }
}
speedDemerits();


