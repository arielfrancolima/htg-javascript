/*
let favorito = document.querySelector('.comment');
console.log(favorito.classList.add);// Es recomendable usar el console para averiguar que parte del codigo falla
favorito.classList.add('comentFavorito');

//Creamos una variable, donde se guarda el elemento que selecionamos (querySelector(''))
//luego añadimos la clase donde se guardo todos los estilos. 


let elementoHr = document.querySelectorAll("hr");
for (let i=0 ; i<elementoHr.length; i++){
    elementoHr[i].classList.add('comentFavorito');
}
*/


const comentarioLargo = document.querySelectorAll('.comment--text');

for(let i=0; i < comentarioLargo.length; i++){
    if(comentarioLargo[i].innerText.length > 50){
        comentarioLargo[i].classList.add('ocultar');
    }
}





