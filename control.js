const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

function validar(e){
    e.preventDefault();
    const alerta = document.getElementById('alerta');
    const formatoEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    alerta.innerText = '';
    if(usuario.value === '' || clave.value === ''){
        
        alert('No pueden dejarse campos vacíos')
  return;
    }else if( !usuario.value.match(formatoEmail)){
        // alerta.innerText = 'Falta el arroba en el usuario”'; }
        alert('Falta el arroba en el usuario')
  } else{
        alerta.innerText = '¡Usuario y clave correctos!'; }
  }

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('form1').addEventListener('submit', validar)
  });
