let dis = document.getElementById('display');
function cal(n){
    console.log(n);
    dis.value+=n;
    
};
function clearthis(){
    dis.value='';
}

function calThis(){
    try{
        dis.value = eval(dis.value);
    }catch(err){
        alert('error')
    }
}

