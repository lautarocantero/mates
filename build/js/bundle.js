const header = document.querySelector('.header-titulo');
const tipos = document.querySelector('#tipos');
const operacionesDiv = document.querySelector('#operaciones');

//eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',cargar);
    header.addEventListener('click',redireccionar);
}

function redireccionar(){
    window.location.href = 'index.html';
}


//funciones

function cargar(){
    cargarTipos();
    cargarOperaciones();
}

async function cargarTipos(){

    const resultado = await fetch ('./matrices.json');
    const db = await resultado.json();

    const {matris} = db;

    matris.forEach(matrix => {

        const {tipo,texto,img} = matrix;

        // console.log(tipo);
        
        const divTipo = document.createElement('DIV');
        divTipo.classList.add('apartados');
        divTipo.innerHTML = 
        `
        <p><strong>${tipo}</strong>: ${texto} </p>
        <img src="${img}" alt="matriz_fila">        
        `
        tipos.appendChild(divTipo);
    });

}

async function cargarOperaciones(){

    const resultado = await fetch ('./matrices.json');
    const db = await resultado.json();

    const {operaciones} = db;

    operaciones.forEach(operacion => {

        const {nombre,texto,img,propiedades} = operacion;
        

        const divOperacion = document.createElement('DIV');
        divOperacion.classList.add('apartados');
        divOperacion.innerHTML = 
        `
        <p><strong>${nombre}</strong>: ${texto} </p>
        <img src="${img}" alt="matriz_fila">
        <p>${propiedades}</p>        
        `
        operacionesDiv.appendChild(divOperacion);
        console.log('aca');
    });

}

console.log('adios a todos');