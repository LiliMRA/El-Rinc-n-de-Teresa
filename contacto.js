/**Ventana modal para añadir comentarios */

//Seleccionamos los elementos sobre los que vamos a trabajar 
const open = document.getElementById('comentar');

const modal_container = document.getElementById('modal_container');

const close = document.getElementById('cancelar');

//Llamamos a este evento para que al hacer click sobre el botón 'Comentar', apliquemos lo siguiente:
open.addEventListener('click', () => {
    modal_container.classList.add('show'); // Aplicamos la clase show para que con su css sea visible dicha ventana modal
    modal_container.classList.remove('hidden'); // Al hacer click sobre el botón 'Cancelar', aplicamos el css hidden para que se vuelva oculta 
});

close.addEventListener('click', () => {
    modal_container.classList.add('hidden');
    modal_container.classList.remove('show');
});