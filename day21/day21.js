let name = document.getElementById("name");
let pass = document.getElementById("password");



function dataStore() {
    event.preventDefault();
    let getReg = JSON.parse(localStorage.getItem('register'));

   if(name.value !== getReg.uname){
    alert('invalid username')
   } else    if(pass.value !== getReg.upass){
    alert('invalid password')
   } else{
    window.location = 'wel.html';
    localStorage.setItem('isLogged', 'true')
    console.log('success');
   }
}

function saveData(){
   event.preventDefault();

    const obj = {
        uname: name.value,
        upass: pass.value
    }

    window.location = 'day21.html';
    localStorage.setItem('register', JSON.stringify(obj))
}

function showName(){
    let myName = JSON.parse(localStorage.getItem('register'));
    let spn = document.querySelector('span');
    spn.textContent = myName.uname

}

function logOut(){
    window.location = 'day21.html';
    localStorage.removeItem('isLogged')
}