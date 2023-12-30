// let gettag = document.querySelector('h4');
// console.log(gettag.outerHTML);

// let getId = document.querySelector('.hi');
// console.log(getId.outerHTML);

// let getClass = document.querySelectorAll('.hi');
// console.log(getClass.outerHTML)

// for (const iterator of getClass) {
//     console.log(iterator.outerHTML)
// }

// console.log(document)

// let usingId = document.getElementById('hello');
// console.log(usingId.outerHTML);

// let usingClass = document.getElementsByClassName('hi');
// for (const iterator of usingClass) {
//     console.log(iterator.outerHTML)
// }

// let usingTag = document.getElementsByTagName('h4');
// for (const iterator of usingTag) {
//     console.log(iterator.outerHTML)
// }

// let getId = document.querySelector('.hi');
// console.log(getId.textContent);

// console.log('outerText',getId.outerText); ✂
// console.log('innerText',getId.innerText); ✂

// console.log('innerHTML - ',getId.outerHTML);
// console.log('innerHTML - ',getId.innerHTML);
// console.log('textContent',getId.textContent);

// let getId = document.querySelector("#hello");
// console.log(getId);

// getId.textContent = "somthing";
// console.log(getId.textContent);

// let a = 20;
// console.log(a);
// a = 30;
// console.log(a);

// let ladooId = document.querySelector("#ladoo");
// ladooId.style.color = 'yellow';
// ladooId.style.backgroundColor = 'red';

let car = document.querySelector('#jimmy');
let telPhone = document.querySelector('#phone');

console.log(car.outerHTML);

console.log(car.type);
console.log(car.id);
console.log(car.value);


let display = document.querySelector('#displaySomething');
let displayPhone = document.querySelector('#disPhone');
let showPhoneError = document.querySelector('#phoneError');
console.log(display.textContent);

display.textContent = car.value;

if(telPhone.value.length !== 10 )
{
    phoneError.textContent = 'enter 10 digit';

}
else{

    displayPhone.textContent = telPhone.value;
}







