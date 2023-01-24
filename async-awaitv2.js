let trabajadores = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Yuman' },
    { id: 3, nombre: 'Marcos' }

]

let salarios = [
    { id: 1, monto: 2000 },
    { id: 2, monto: 1000 }
]

const getTrabajador = async (id) => {

    let encontrarTrabajador = trabajadores.find(t => t.id === id);

    if (!encontrarTrabajador) {
        throw new Error(`El usuario con id: ${id}, no existe en la DB`);
    } else {
        return encontrarTrabajador;
    }

}

const getSalario = async(trabajador) => {
    
        let encontrarSalario = salarios.find(s => s.id === trabajador.id);

        if (encontrarSalario) {
            throw new Error(`El salario con el id: ${trabajador.id}, no tiene salario y no existe`);
        } else {
            return {
                nombre: trabajador.nombre,
                monto: encontrarSalario.monto,
                id: trabajador.id
            }
        }   

}


let getInformacion = async(id) =>{
    try {
        let trabajadorBuscado = await getTrabajador(id);
        let salarioTrabajadorBuscado = await getSalario(trabajadorBuscado);
        return `El usuario ${salarioTrabajadorBuscado.nombre} tiene un salario de ${salarioTrabajadorBuscado.monto}`;
    } catch (error) {
        throw error
    }
}

getInformacion(2)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

