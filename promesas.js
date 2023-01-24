let trabajadores = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Yuman' },
    { id: 3, nombre: 'Marcos' }

]

let salarios = [
    { id: 1, monto: 2000 },
    { id: 2, monto: 1000 }
]

const getTrabajador = (id) => {

    return new Promise((resolve, reject) => {
        let encontrarTrabajador = trabajadores.find(t => t.id === id);

        (!encontrarTrabajador)
            ? reject(`El usuario con id: ${id}, no existe en la DB`)
            : resolve(encontrarTrabajador);
    });

}


const getSalario = (trabajador) => {
    return new Promise( (resolve, reject) => {
        let encontrarSalario = salarios.find(s => s.id === trabajador.id);
    
        (!encontrarSalario)
            ? reject(`El salario con el id: ${id}, no tiene salario y no existe`)
            : resolve( {
                nombre: trabajador.nombre,
                monto: encontrarSalario.monto,
                id: trabajador.id
            });
    });
    
}

getTrabajador(3)
    .then(trabajador =>  getSalario(trabajador))
    .then(resp => { console.log(`El trabajador buscado es ${resp.nombre} y su salario es de ${resp.monto}`);})
    .catch (err => { console.log(err);})