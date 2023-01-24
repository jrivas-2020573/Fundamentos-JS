// Async - Await 

//Al agregarle async a una funcion devuelve una promesa

let getNombre = () => {
    return new Promise( (resolve, reject) =>{
        setTimeout(() =>{
           resolve('Juan Jose');
        }, 3000);
    });
}

let saludar = async () => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludar().then(msg => {
    console.log(msg);
});