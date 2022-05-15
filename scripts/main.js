
/*----> CAMBIO DE IMAGEN CON ONCLICK <---- */

let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if(miSrc === 'imagenes/pngwing.com.png') {
        miImage.setAttribute('src', 'imagenes/mozilla2.png');            
    }else{
        miImage.setAttribute('src', 'imagenes/pngwing.com.png')
    }
}

/* ----> MENSAJE PERSONALIZADO <----*/

// SE VA A UTILIZAR EL WEB STORAGE API

let miBoton = document.querySelector('button');

let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
  }

if(!localStorage.getItem('nombre')) {
      estableceNombreUsuario();
}else{
      let nombreAlmacenado = localStorage.getItem('nombre');
      miTitulo.innerHTML = 'Mozilla es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}


