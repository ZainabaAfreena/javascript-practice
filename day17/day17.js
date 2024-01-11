// let a=[10];
// console.log(a);
// let b=a;
// console.log(b);
// let c=b;
// console.log(c);

// c.push("afreen");
// console.log(a);
// console.log(b);
// console.log(c);


// spread operator

// let a=[10,20];
// console.log(a);
// let b=[...a];
// console.log(b);
// let c=b;
// console.log(c);

// c.pop();
// console.log(a);
// console.log(b);
// console.log(c);


// destructor operator

// let b=['Afreen', 'Azma','Afrath','Afeeda'];
// let [a,c,...rest]=b
//  console.log(a);
//  console.log(c);
//  console.log(...rest);

// let b=['Afreen', 'Azma','Afrath','Afeeda'];
// let c=['a','b',...b];
// console.log(b);


let s = [2,3,4];
let s2 = [...s];
let [a,...rest] = s;

//  rest operator
function ss(a,...res){
    console.log(res);
}

ss(2,3,4,5,6)