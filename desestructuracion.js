// Objetos en JS

const futbolista = {
    nombre: 'Lionel Messi',
    equipo: 'PSG',
    altura: 1.69
}

//DESESTRUCTURACION

// const nombreJugador = futbolista.nombre;
// const equipoJugador = futbolista.equipo;
// const estaturaJugador = futbolista.altura;

//DESESTRECTURACION DE JS
const {nombre,equipo,altura} = futbolista
console.log(nombre,equipo,altura);


