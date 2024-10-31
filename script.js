const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const form = document.querySelector(".contato__formulario")
const campos = document.querySelectorAll(".contato__campo");
const spans = document.querySelectorAll(".campo__span")

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block'
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none'
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }
    else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}