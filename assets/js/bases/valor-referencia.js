

// objeto literal 

let persona = { nombre: 'Juan',
                Apellido: 'Pérez',
                edad : 20,
};

const crearPersona = (nombre, apellido, edad) => {
    return {nombre, apellido, edad}
}

let persona1 = crearPersona('Juan','Perez', 25);

console.log(persona1);

