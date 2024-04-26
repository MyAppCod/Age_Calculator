const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getDOB() {

  let birth = document.getElementById("DOB").value;

  let dob = new Date(birth);
  let dayBirth = dob.getDate();
  let monthBirth = dob.getMonth();
  let yearBirth = dob.getFullYear();


  let now = new Date(document.getElementById("CD").value);

  let yearNow = now.getFullYear();
  let monthNow = now.getMonth();
  let dayNow = now.getDate();

  if (dayBirth > dayNow) {
    dayNow = dayNow + month[monthNow - 1];
    monthNow = monthNow - 1;
  }
  if (monthBirth > monthNow) {
    monthNow = monthNow + 12;
    yearNow = yearNow - 1;
  }
  var d = dayNow - dayBirth; 
  var m = monthNow - monthBirth;
  var y = yearNow - yearBirth;

  if (y > 0) {
    // const message = `Your current Age is ${y} years ${m} months ${d} days`
    document.getElementById("currentAge").innerHTML = "Your current Age is " + y + " years " + m + " months " + d + " days";

    if (dayBirth === dayNow && monthBirth === monthNow) {
      document.getElementById("currentAge").innerHTML = "Happy " + y + " years!!! ";
    }
  } else
    document.getElementById("currentAge").innerText = "Invalid Entry";
  
}
