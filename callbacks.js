//CALLBAKS

//No es mas que una funcion dentro de otra
//Responde a el tiempo en que se ejecuta

// setTimeout( function() {
//     console.log('Hola mundo');
// }, 3000);

// console.log('hola xd');

// setTimeout( () => {
//      console.log('Hola papus');
// }, 5000);

const getUserById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Juan'
    }

    if (id === 20) {
        callback(`El usuario con id: ${id}, no existe en la DB`);
    } else {
        callback(null, usuario);
    }

    //Ternarios es lo mismo que el if else
    // id === 20
    //     ? callback(`El usuario con id: ${id}, no existe en la DB`)
    //     : callback(null, usuario)
      
}

getUserById(20 ,(err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario en la base de datos', usuario);
})

