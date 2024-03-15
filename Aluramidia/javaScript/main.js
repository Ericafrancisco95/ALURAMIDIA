function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* usando For---------------------------- */


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento =  tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    
}


/* usando while ----------------------------- */
/* let contador = 0;

while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento =  tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    contador = contador + 1;
}  */



/*  function tocaSomPom() {
     document.querySelector('#som_tecla_pom').play();  
 }
document.querySelector('.tecla_pom').onclick = tocaSomPom; */