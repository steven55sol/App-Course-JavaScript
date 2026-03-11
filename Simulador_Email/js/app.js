const $Email = document.querySelector('#email');
const $Asunto = document.querySelector('#asunto');
const $Mensaje = document.querySelector('#mensaje');
const $btnSubmit = document.querySelector('#btn-submit');

// Asignando eventos

$Email.addEventListener('input', validar);
$Asunto.addEventListener('input', validar);
$Mensaje.addEventListener('input', validar);

const email = {
    email: "",
    asunto: "",
    mensaje: ""
}


//Validando campos

function validar(e){
    if(e.target.value.trim() === ''){
        MostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        email[e.target.id] = '';
        comprobarEmail();
        return;
    }

    if(e.target.id === 'email' && !validarEmail(e.target.value)){
        MostrarAlerta('El email no es valido', e.target.parentElement);
        return;
    }

    limpiarAlerta(e.target.parentElement);

    //Agregando datos al objeto email
    email[e.target.id] = e.target.value;
    
    comprobarEmail();

}

//Creando Alertas

function MostrarAlerta(mensaje, referencia){
    //Limpiando alertas
    limpiarAlerta(referencia);

    //Creando Alerta HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    //Agregando alerta
    referencia.appendChild(error);
}


function limpiarAlerta(referencia){
    
    //Direccion de la alerta
    const alerta = referencia.querySelector('.error');
    
    //Validadndo si existe
    if(alerta){
        alerta.remove(); //Removiendo alerta
    }

}

function validarEmail(email){
    
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const resultado = regex.test(email);

    return resultado;
}

function comprobarEmail(){

    if(Object.values(email).includes("")){
        $btnSubmit.style.opacity = 0.5;
        $btnSubmit.disabled = true;
    }else{
        $btnSubmit.style.opacity = 1;
        $btnSubmit.disabled = false;
    }
}

comprobarEmail();