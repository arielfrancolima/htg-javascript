'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');


function recibirNombre(event) {
  event.preventDefault();
alert("se envio el formulario correctamente");
}

function interceptarNombre(event) {
  if (event.target.value.length<5 || event.target.value.length>50){
    console.log("Error")
  }else{
    console.log(event.target.value);
  }
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
