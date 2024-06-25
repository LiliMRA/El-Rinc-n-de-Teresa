/* Carrusel de imágenes */
const carrusel = document.querySelector(".carrusel-inner");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

let intervalo = null;

let step = 1;

/**Abrimos función para que empiece el carrusel */
const start = () => {
    intervalo = setInterval(function() {
        carrusel.scrollLeft = carrusel.scrollLeft + step;

        if (carrusel.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (carrusel.scrollLeft === 0) {
            step = step * -1;
        }
    }, 30);
};

/**Función para que se detenga el carrusel*/
const stop = () => {
    clearInterval(intervalo);
};

/**Llamamos a la función stop para que se detenga cuando se pase el cursor encima de una imagen */
carrusel.addEventListener('mouseover', () => {
    stop();
});

/**Llamamos a la función start para que vuelva a funcionar el carrusel cuando se quite el cursor de las imágenes */
carrusel.addEventListener('mouseout', () => {
    start();
});

/**Iniciamos la función */
start();



// SEGUNDO CARRUSEL
/**Realiza las mismas funciones que el primer carrusel, pero con diferentes nombres de variables */
const carrusel2 = document.querySelector(".carrusel-inner2");

let maxScrollLeft2 = carrusel2.scrollWidth - carrusel2.clientWidth;

let intervalo2 = null;

let step2 = 1;

const start2 = () => {
    intervalo2 = setInterval(function() {
        carrusel2.scrollLeft = carrusel2.scrollLeft + step2;

        if (carrusel2.scrollLeft === maxScrollLeft2) {
            step2 = step2 * -1;
        } else if (carrusel2.scrollLeft === 0) {
            step2 = step2 * -1;
        }
    }, 30);
};

const stop2 = () => {
    clearInterval(intervalo2);
};

carrusel2.addEventListener('mouseover', () => {
    stop2();
});

carrusel2.addEventListener('mouseout', () => {
    start2();
});

start2();

