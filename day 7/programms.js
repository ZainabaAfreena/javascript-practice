// // 1. converting string to toUpperCase
//  let company="BBleads"
// console.log(company.toUpperCase());

// // 2. converting string to toLowerCase
// let company="BBleads"
// console.log(company.toLowerCase());

// 3.swapping a two using third variable
// let a = 50;
// let b = 60;
// result = a;
// a = b;
// b = result;
// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// 4.finding the highest number
let num1 = prompt("Enter a First number?");
let num2 = prompt("Enter a  Second number");
let num3 = prompt("Enter a Third number");
let result;

if (num1 > num2 && num1 > num3) {
  result = num1;
} else if (num2 > num1 && num2 > num3) {
  result = num2;
} else {
  result = num3;
}
console.log(`The largest number is : ${result}`);

// // 5.reversing a number
// let company="BbLeads"
// // result = "sdaeLbB";
// console.log(`The string after reversed: ${company.split('')}`);
