// let hello; // undefined / declared (this is defined but not gave any value)
// hello = 10; //this is called initialization

// somethimg that is not declared is called not defined
// for ex: name is not defined above so if we call, this shows not defined

//// operators
// 1.Arithmatic operators(+,-,/,*,%,**,--,++)
// 11+2=13
// 11-2=9
// 11/2=5.5
// 11*2=22
// 10%3=1
// 10**2=100

//// 2.Assignment operators(=,+=,-=,%=,*=,/=)
// let a=10
// a+=2 it can be written as a=a+2 ==> a=10+2=12
// a-=2 it can be written as a=a-2 ==> a=10-2=8
// a%=2 it can be written as a=a%2 ==> a=10%2=5
// a*=2 it can be written as a=a*2 ==> a=10*2=24
// a/=2 it can be written as a=a/2 ==> a=10/2=5

////3.comparision operator(==,===,!=,!===)  it consider only true or false
// for ex:  x=10, y="10"
// 1.== it cheaks number not type
// so it is true

// 2.=== it cheaks type first then number
// so it is false because y in string and x in number

// 3.!= it is opposite of ==
// so it is false

// 4.!== it is opposite of ===
// so it is  true

// Scope : it is written inside the  Flower brackets
// it can be called local scope or block or scope

// it has two types : local scope and global scope
// And two variables :global variables and local variables(it is decalred inside the scopes)

// let, const --> this is local scope
// var --> this is a global scope

// global variables
// let num = 123456;
// var aa = "afreen";
// const PIE = 3.14;

// //  local varaibles
// {
//   let num = 123456;
//   var aa = "afreen";
//   const PIE = 3.14;
// }

let a1 = "vhvhv";
var aa = "afreen";
console.log(a1, aa);
console.log("");
{
  var aa = "aashfiya";
  let a1 = "zainaba";
  console.log(a1, aa);
  console.log("");
//   {
//     var aa = "naa";
//     let a1 = "aaaa";
//     console.log(a1, aa);
//     console.log("");
//   }
//   console.log(a1, aa);
//     console.log('');
}
console.log(a1, aa);
console.log("");





