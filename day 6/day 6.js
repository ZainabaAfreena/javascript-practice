//  some of the programs are with same logic with little changes

let num = 5;
let sum = 0;

console.log(`\n--- Square of Numbers ---`);
for (let i = 0; i <= num; i++) {
  sum = num * num;
}
console.log("Square of the", num, "is", sum);

console.log(`\n--- Cube of Numbers ---`);
for (let i = 0; i <= num; i++) {
  sum = num * num * num;
}
console.log("Cube  of the", num, "is", sum);

console.log(`\n--- Table of Numbers ---`);
let table = 10;
for (let i = 1; i <= table; i++) {
  sum = num * i;
  console.log(`${num} * ${i} = ${sum}`);
}

console.log(`\n--- Sum of Numbers ---`);
for (let i = 0; i <= num; i++) {
  sum = sum + i;
}
console.log("sum of the", num, "is", sum);

console.log(`\n--- Factorial of Numbers ---`);
sum = 1;
for (let i = 1; i <= num; i++) {
  sum = sum * i;
}
console.log(`factorail of number ${num} is ${sum}`);

// 8.square of a number:-
// let num = 5;
// let sum = 0;

console.log(`\n--- Square of Numbers ---`);
for (let i = 0; i <= num; i++) {
  sum = num * num;
}
console.log("Square of the", num, "is", sum);

// 9.cube of a number:-

// let num = 5;
// let sum = 0;

console.log(`\n--- Cube of Numbers ---`);
for (let i = 0; i <= num; i++) {
  sum = num * num * num;
}
console.log("Cube  of the", num, "is", sum);

// 10. prime number:-
// let num = 23;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log(` ${num} is a Prime Number`);
    break;
  } else {
    console.log(`${num} is Not a Prime Number`);
    break;
  }
}

let n = 23;
let flag = true;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Is Prime Number ");
} else {
  console.log("Not Prime Number ");
}

// function Inputformuser(){
//     let n = 23;
// let flag = true;
// }
// let flag = true;

// function Logic(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       flag = false;
//       break;
//     }
//   }
//   Dispaly();
// }

// function Dispaly() {
//   if (flag) {
//     console.log("Is Prime Number ");
//   } else {
//     console.log("Not Prime Number ");
//   }
// }

// console.log(Logic(7));

// 11.Fibonnaci series:-

let first = 0;
let second = 1;
let val = 10;
for (let i = 2; i <= val; i++) {
  result = first + second;
  first = second;
  second = result;
  console.log("Fibonacci Series");
  console.log(result);
}
