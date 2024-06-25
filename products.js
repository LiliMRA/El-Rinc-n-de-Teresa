/** VENTANAS MODALES CON DESCRIPCIÓN DE LOS PRODUCTOS */
/* CAJA 1*/ 

//Seleccionamos los elementos sobre los que trabajar
const open1 = document.getElementById('open1');

const modal_container = document.getElementById('modal_containerP');

const close1 = document.getElementById('close1');

//Llamamos al evento para que cuando se haga click sobre el bontón 'Ver más' de cada producto aplique lo siguiente:
open1.addEventListener('click', () => {
    modal_container.classList.add('show'); //Se le añade la clase show, para que con su css sea visible
    modal_container.classList.remove('hidden'); //Se retira la clase show, para que retorne a su css oculto original
});

//Al hacer click sobre el botón 'Cerrar', aplicamos lo siguiente:
close1.addEventListener('click', () => {
    modal_container.classList.add('hidden'); // Añadimos su css original de oculto
    modal_container.classList.remove('show');
});


/** Realizamos las mismas funciones para el resto de tarjetas de productos, pero con diferentes nombres de variables */
/* CAJA 2*/ 
const open2 = document.getElementById('open2');

const modal_container2 = document.getElementById('modal_containerP2');

const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
    modal_container2.classList.add('show');
    modal_container2.classList.remove('hidden');
});

close2.addEventListener('click', () => {
    modal_container2.classList.add('hidden');
    modal_container2.classList.remove('show');
});

/* CAJA 3*/ 
const open3 = document.getElementById('open3');

const modal_container3 = document.getElementById('modal_containerP3');

const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
    modal_container3.classList.add('show');
    modal_container3.classList.remove('hidden');
});

close3.addEventListener('click', () => {
    modal_container3.classList.add('hidden');
    modal_container3.classList.remove('show');
});

/* CAJA 4*/ 
const open4 = document.getElementById('open4');

const modal_container4 = document.getElementById('modal_containerP4');

const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
    modal_container4.classList.add('show');
    modal_container4.classList.remove('hidden');
});

close4.addEventListener('click', () => {
    modal_container4.classList.add('hidden');
    modal_container4.classList.remove('show');
});

/* CAJA 5*/ 
const open5 = document.getElementById('open5');

const modal_container5 = document.getElementById('modal_containerP5');

const close5 = document.getElementById('close5');

open5.addEventListener('click', () => {
    modal_container5.classList.add('show');
    modal_container5.classList.remove('hidden');
});

close5.addEventListener('click', () => {
    modal_container5.classList.add('hidden');
    modal_container5.classList.remove('show');
});

/* CAJA 6*/ 
const open6 = document.getElementById('open6');

const modal_container6 = document.getElementById('modal_containerP6');

const close6 = document.getElementById('close6');

open6.addEventListener('click', () => {
    modal_container6.classList.add('show');
    modal_container6.classList.remove('hidden');
});

close6.addEventListener('click', () => {
    modal_container6.classList.add('hidden');
    modal_container6.classList.remove('show');
});

/* CAJA 7*/ 
const open7 = document.getElementById('open7');

const modal_container7 = document.getElementById('modal_containerP7');

const close7 = document.getElementById('close7');

open7.addEventListener('click', () => {
    modal_container7.classList.add('show');
    modal_container7.classList.remove('hidden');
});

close7.addEventListener('click', () => {
    modal_container7.classList.add('hidden');
    modal_container7.classList.remove('show');
});

/* CAJA 8*/ 
const open8 = document.getElementById('open8');

const modal_container8 = document.getElementById('modal_containerP8');

const close8 = document.getElementById('close8');

open8.addEventListener('click', () => {
    modal_container8.classList.add('show');
    modal_container8.classList.remove('hidden');
});

close8.addEventListener('click', () => {
    modal_container8.classList.add('hidden');
    modal_container8.classList.remove('show');
});

/* CAJA 9*/ 
const open9 = document.getElementById('open9');

const modal_container9 = document.getElementById('modal_containerP9');

const close9 = document.getElementById('close9');

open9.addEventListener('click', () => {
    modal_container9.classList.add('show');
    modal_container9.classList.remove('hidden');
});

close9.addEventListener('click', () => {
    modal_container9.classList.add('hidden');
    modal_container9.classList.remove('show');
});

/* CAJA 10*/ 
const open10 = document.getElementById('open10');

const modal_container10 = document.getElementById('modal_containerP10');

const close10 = document.getElementById('close10');

open10.addEventListener('click', () => {
    modal_container10.classList.add('show');
    modal_container10.classList.remove('hidden');
});

close10.addEventListener('click', () => {
    modal_container10.classList.add('hidden');
    modal_container10.classList.remove('show');
});

/* CAJA 11*/ 
const open11 = document.getElementById('open11');

const modal_container11 = document.getElementById('modal_containerP11');

const close11 = document.getElementById('close11');

open11.addEventListener('click', () => {
    modal_container11.classList.add('show');
    modal_container11.classList.remove('hidden');
});

close11.addEventListener('click', () => {
    modal_container11.classList.add('hidden');
    modal_container11.classList.remove('show');
});

/* CAJA 12*/ 
const open12 = document.getElementById('open12');

const modal_container12 = document.getElementById('modal_containerP12');

const close12 = document.getElementById('close12');

open12.addEventListener('click', () => {
    modal_container12.classList.add('show');
    modal_container12.classList.remove('hidden');
});

close12.addEventListener('click', () => {
    modal_container12.classList.add('hidden');
    modal_container12.classList.remove('show');
});