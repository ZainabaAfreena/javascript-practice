 //javascript: a javascript is a intrepreted language, which is used for advanced website 
// for ex form validation. and it is synchronous and single treaded language  
// wheree it can be asynchronous by usig some functions like 
//  setInterval(), setTimeout(), Promises(), fetch(), async await

// variables: variables are the names where we can store values for any javascript date type
// eg: age=65; name="afreen";
// rules for variables:
// -->number should not start at biginning (ex:(1name))
// --> $,_, digitd can be used anywheere
// -->case sensitive
// --> reserved words or key words cannot be used

// not allowed examples:
//   if = 20;
//   for=20;+
//   1name=45;
//   %name=45;
//   #name=56;

  //  allowed examples:
//   name = 20;
//   n1ame=20;
//   $name=45;
//   _name=41;

// datatypes: it is used to show diffent types of values
// it has two types

// 1.primitive   
// -->Number =>age=10
// -->string  =>name="bbleads"
// -->boolean  =>isTrue=true
// -->BigInt =>num=BigInt(10)
// -->Symbol =>syml=symnbol("@")
// -->null =>price=null
// -->undefined =>und=undefined

// 2.Non primitive
// Object 
// -->array  

// typeof: to find the datatypes of variable that is been declared
// ex: 
let num=10;
console.log(typeof num);  //number

let name="afree";
console.log(typeof name); //string

let isBol=true;
console.log(typeof isBol);  //boolean

let x=BigInt(98765);
console.log(typeof x); //BigInt

let sym=Symbol("@");
console.log(typeof sym); //symbol

let price=null;
console.log(typeof price); //null

let rate;
console.log(typeof rate); //undefined


// let,const,var =>  it is a keyword used to decalre the variables
//automatically decalring varibales

firstName="Afreen"
firstName="zainaba" //automatically decalring the variable with same name which changes the value

// //automatically decalring varibales using var
console.log(digit); //hoisting=> using  variable before declaring.
var digit=10; 
var digit=20; //using var decalring the variable with same name which changes the value
// var and automatically works similar 

// to solve the above problems we use let
// console.log(valPi)//this shows error.  hoistsig is cannot be done using let
// le
let valPi=3.14;
// let valPi;  //we cannot re dececlare a variable
console.log(valPi)
valPi=50; // using let we can chnage the value of variable to solve this problem we use const
console.log(valPi)
















//declaring  variable using const
// let a;
// a = 20;

// const PIE; // while usig the constant we need to initalize the value
const PIE=3.14;
// PIE=3.14;  //this is error cannot re initialize the constantt variables











                 









