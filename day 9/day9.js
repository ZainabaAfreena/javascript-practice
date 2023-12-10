function sum(a, a) {  //we can use same value 
  console.log(a + a);
  return 20;
  console.log("bb");
}
sum(5, 15);

// arrow function
let sum1 = (a, b) => {  //we cannot use same value (eg:a, a)-it will show syntax error
  console.log(a + b);
  return 20;
  console.log("bb");
};
sum1(5, 15);


let show=function (){
    // return 10;

}
console.log(show());


let value=()=> 10;//arrow function
console.log(value());


// iife:- immediatly invoke function expression, we can write it as ()();


//normal function- we cannot use function expression
(function(){
    let pp=200;
    console.log(pp)
    // return 1;
})();



// using arrow function-we cannot use function expression
(()=>{
    console.log('Afreen')
})();