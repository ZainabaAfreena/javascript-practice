// conditional statement ()
// if()--> if the condition is true then it will run the statement inside the block else it will come out of the block
// else if()-->if the previos condition is false then it will take the else condition
// eg:
let mark = 60;

if (mark > 75) {
  console.log("Afreen is distinction with marks", mark, "%");
} else if (mark > 60) {
  console.log("Afreen is first class with marks", mark, "%");
} else if (mark >= 35) {
  console.log("Afreen is pass with marks", mark, "%");
} else {
  console.log("Afreen is fail");
}

// switch case

let a = "56";
switch (a) {
  case "44":
    console.log(a);
    break;
  case "5":
    console.log(a);


    break;
  default:
    console.log("default value");
}


// increment and decrement;

// post increment :  i++
// pre increment  :++i


// post decrement :  i--
// pre decrement  :--i


// let x = 5;
// x++;
// let z = x;
// y= ++x + z (11)