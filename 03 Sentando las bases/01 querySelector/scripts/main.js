
let favorito = document.querySelector('.comment');
console.log(favorito.classList.add);// Es recomendable usar el console para averiguar que parte del codigo falla
favorito.classList.add('comentFavorito');

//Creamos una variable, donde se guarda el elemento que selecionamos (querySelector(''))
//luego añadimos la clase donde se guardo todos los estilos. 


let elementoHr = document.querySelectorAll("hr");
for (let i=0 ; i<elementoHr.length; i++){
    elementoHr[i].classList.add('comentFavorito');
}



const comentarioLargo = document.querySelectorAll('.comment--text');

for(let i=0; i < comentarioLargo.length; i++){
    if(comentarioLargo[i].innerText.length > 50){
        comentarioLargo[i].classList.add('ocultar');
    }
}



let comentarioMasLargo = document.querySelectorAll('.comment--text');
console.log(comentarioMasLargo);

let comentMax = comentarioMasLargo[0];
for(let i = 1; i<comentarioMasLargo.length; i++){

    if (comentarioMasLargo[i].innerText.length > comentMax.innerText.length){
        comentMax = comentarioMasLargo[i];
        }
    }
    console.dir(comentMax.classList,add);
    comentMax.classList.add('ocultar');

    // Metodo contiene una funcion
    //Propiedad de un objeto puede tener un valor de tipo string, number, etc







