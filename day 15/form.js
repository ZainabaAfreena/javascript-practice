// const = form = document.querySelector("form"),
//         btn = document.querySelector(".btn"),
//         allInput = document.querySelectorAll(".first");

// btn.addEventListener("click", ()=> {
// allInput.forEach(input =>{
//     if(input.value != ""){
//         form.classList.add('secActive')
//     }else{
//         form.classList.remove('secActive')
//         alert("input is empty")
//     }
// })
// })

const form = document.querySelector("form");
const btn = document.querySelector(".btn"),
  allInput = document.querySelectorAll("input");

const getGender = document.getElementsByName("gender");
const getLang = document.getElementsByName("lang");

function handleSubmit() {
  event.preventDefault();
  document.getElementById("showName").textContent =
    document.getElementById("firstName").value;
  document.getElementById("showId").textContent =
    document.getElementById("Id").value;
  document.getElementById("showMail").textContent =
    document.getElementById("emailAddress").value;
  document.getElementById("showNumber").textContent =
    document.getElementById("phoneNumber").value;
  document.getElementById("showAddress").textContent =
    document.getElementById("Address").value;
  document.getElementById("showDob").textContent =
    document.getElementById("DOB").value;
  document.getElementById("showCourse").textContent =
    document.getElementById("course").value;
  document.getElementById("showMessage").textContent =
    document.getElementById("Message").value;

  for (let i of getGender) {
    if (i.checked) {
      document.getElementById("showGender").textContent = i.value;
    }
  }
  for (let i of getLang) {
    if (i.checked) {
      document.getElementById("showLang").textContent += `${i.value}, `;
    }
  }

  console.log("submitted");
}
