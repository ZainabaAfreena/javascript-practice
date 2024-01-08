let display = document.querySelector("#display");

function cal(val) {
  display.value += val;
}

function cls() {
  display.value = "";
}

function res() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "error";
  }
}

// console.log('first line');
// try{
//     console.log(a);
// }catch(e){
//     console.log('error ')
// }
// console.log('scnd line')