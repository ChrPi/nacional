//seleccion de elementos html para trabajar
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const gandalf = document.getElementById('gandalf')


//Hacer que los campos sean obligatorios
form.addEventListener('submit', (e)=> {
    e.preventDefault(); //saco el evento por defecto del navegador y evito que se refresque la pagina 
    checkRequired([username, email, password, password2]);
    checkLength(username, 4, 12);
    checkLength(password, 6, 15);
    checkPasswordMatch(password, password2);
    
});

const showError = (input, mensaje) => {
    const formControl = input.parentElement;
    const showGandalf = gandalf.parentElement;

    formControl.classList.add("error")
    showGandalf.classList.add("error")
    const small = formControl.querySelector("small")
    small.innerText = mensaje;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    const showGandalf = gandalf.parentElement;
    formControl.className = "form-control success";
    showGandalf.className = "gif-container";
}

const checkRequired = (inputArr = []) => {
    if(inputArr.length ===0) {
        return;
    }

    inputArr.forEach((input) => {
        if(input.value.trim() == "") {
            showError(input, "Este campo es obligatorio"); 
            return;   
        }
        showSuccess(input);
    });
};

const checkLength = (input, min, max) => {
    if(input.value.length < min) {
        showError(input, `Debes tener al menos ${min} caracteres`)
    }else if(input.value.length > max) {
        showError(input, `Debe ser menor a ${max} caracteres`)
    };
};

const checkPasswordMatch = (input1, input2) => {
    if(input1.value !== input2.value){
        showError(input2, 'La contraseña no coincide');
    };
};