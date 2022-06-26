
// Primero crearemos la función crearPersona de la forma tradicional: 

// function crearPersona(nombre, apellido){
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// };

// // Creamos una persona y ejecutamos la función tradicional:
// const persona1 = crearPersona('Lenon','Acacio');
// console.log(persona1);



// Ahora, reduzcamos el código como unos profesionales:
// Para indicarle a JS que lo que queremos es que devuelva el objeto, debemos envolver nuestros atributos de persona entre paréntesis.
const crearPersona = (nombre, apellido) => ({nombre, apellido});

// Creamos persona y ejecutamos:
const persona = crearPersona('Lenon', 'Acacio');
console.log(persona);

function imprimeArgumentos(){
    console.log( arguments );
}
                           // Parámetros rest para crear un arreglo con todos los argumentos. Ojo: DESPUES del parámetro rest no puede haber ningún otro argumento. Otra cosa, si antes del parámetro rest debemos extraer el valor de algún otro argumento, debemos indicarlo también en la parte de abajo de nuestra función.
const imprimeArgumentos2 = (edad, ...arguments) => {
    console.log( {edad, arguments});
} 

// imprimeArgumentos(10, true, false, 'hola', 'Lenon');
imprimeArgumentos2(10, true, false, 'hola', 'Lenon');

//<-------------------------------------------------------->
//Destructuración de elementos: 

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
};
                                                    //Podemos poner un valor por defecto en el parámtro para aquellos casos que no viene indicado en el objeto. En los casos que si esté indicado el valor en el objeto, machacará al valor predefinido en el argumento.
const imprimePersonaje = ({nombre, codeName, vivo, edad=15}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
}

imprimePersonaje(tony);