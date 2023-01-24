//Callbacks heel

//Base de Datos en arrays
let trabajadores = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Yuman' },
    { id: 3, nombre: 'Marcos' }

]

let salarios = [
    { id: 1, monto: 2000 },
    { id: 2, monto: 1000 }
]

//Callbacks

//Funcion para obtener los trabajadores por el id
const getTrabajador = (id, callback) => {

    let encontrarTrabajador = trabajadores.find(t => t.id === id);

    (!encontrarTrabajador)
        ? callback(`El usuario con id: ${id}, no existe en la DB`)
        : callback(null, encontrarTrabajador);
}


const getSalario = (trabajador, callback) => {
    let encontrarSalario = salarios.find(s => s.id === trabajador.id);

    (!encontrarSalario)
        ? callback(`El salario con el id: ${id}, no tiene salario y no existe`)
        : callback(null, {
            nombre: trabajador.nombre,
            monto: encontrarSalario.monto,
            id: trabajador.id
        });
}

const idBuscar = 1;
getTrabajador(idBuscar, (err, trabajador) => {

    if (err) {
        return console.log(err);
    } else {
        console.log('Todo Ok');   
    }

    getSalario( trabajador, (err, salario) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Todo Ok');   
        }
        
        console.log(`El trabajador buscado es: ${trabajador.nombre} y su salario es de ${salario.monto}`);
    })
});
    
    




