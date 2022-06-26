let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',

};

// Forma de acceder a los valores:
console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Coords: ', personaje.coords);
console.log('latitud: ', personaje.coords.lat);
console.log('longitud: ', personaje.coords.lng);

console.log('No. de Trajes: ', personaje.trajes.length);
console.log('Último traje : ', personaje.trajes[personaje.trajes.length-1]);

console.log('Dirección: ', personaje.direccion.ubicacion, ' ', personaje.direccion.zip);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);

console.log('Última película: ',personaje["ultima-pelicula"]);

// Más detalles

// Eliminar atributos del objeto:
delete personaje.edad;
console.log(personaje);


// Convertir cada atributos en conjuntos de par-valor (mediante arrays)
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Para añadir nuevos atributos al objeto podemos hacerlo de la siguiente manera: 
personaje.casado = true;
console.log(personaje);

// Para bloquear el objeto de tal manera que no se pueda crear, eliminar o editar sus atributos podemos hacerlo con: 
Object.freeze(personaje);
Object.freeze(personaje.direccion);
personaje.casado = false;
console.log(personaje);


//Para obtener un listado de los nombres de los atributos del objeto en forma de array lo hacemos con:
let propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

//Para obtener un listado de los valores de los atributos del objeto en forma de array lo hacemos con:
let valores = Object.values(personaje);
console.log(valores);