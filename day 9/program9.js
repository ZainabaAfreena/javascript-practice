//    programms using functions

// function findLargestNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//       return num1;
//     } else if (num2 > num1 && num2 > num3) {
//       return num2;
//     } else {
//       return num3;
//     }
//   }



//   let num1 = 100;
//   let num2 = 50;
//   let num3 = 30;

//   result = findLargestNumber(num1, num2, num3);

//   console.log(`The largest number is: ${result}`);

// //   swapping numbers
// function swap(a, b) {
//   console.log(`a=${a} b=${b}`);
//   let temp;
//   temp = a;
//   a = b;
//   b = temp;
//   console.log(`The value of a after swapping: ${a}`);
//   console.log(`The value of b after swapping: ${b}`);
// }

// swap(10, 20);
// swap(50, 70);
// swap(40, 80);

// factorail of a number

function Factorial(n) {
  let sum = 1;
 for (let i = 1; i <= n; i++) {
    sum = sum * i;
  } 
  console.log(`Factorial of number ${n} is ${sum}`);
}

Factorial(8);
Factorial(6);
Factorial(3);
Factorial(1);
Factorial(2);
Factorial(5);


