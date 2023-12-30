
// asynchronous function-Functions running in parallel with other functions(multi tasking) are called asynchronous
console.log("before settimeout");

// Promise();
// fetch();
// async await
// setInterval()
// setTimeOut()

let stop2 = setTimeout(function () {
  console.log("after 4 seconds");
}, 4000);

let a = 1;
let stop1 = setInterval(() => {
  console.log(a++);
}, 1000);

setTimeout(() => {
  clearInterval(stop1);
}, 3000);

setTimeout(() => {
  console.log("stoped before 4 seconds");
  clearTimeout(stop2);
}, 3000);

console.log("after settimeout");

let createNewPromise = new Promise(function (success, reject) {
  if (true) {
    success("success: a is greater");
  } else {
    reject("reject: b is great");
  }
});

createNewPromise
  .then(function (result) {
    console.log("then state: ", result);
  })
  .catch((err) => {
    console.log("catch state: ", err);
  });