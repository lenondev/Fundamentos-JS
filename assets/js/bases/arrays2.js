
// Métodos de los arrays

let juegos = ['Zelda', 'Mario', 'Megaman', 'Pokemon'];
console.log('largo: ', juegos.length);

let primeraPosicion = juegos[0];
let ultimaPosicion = juegos [juegos.length-1]

console.log({primeraPosicion, ultimaPosicion});

//Para conocer los valores y posiciones de los elementos del array:
juegos.forEach((elemento, indice, arr)=> {
    console.log({elemento,indice,arr});
});

//Para añadir/insertar nuevos elementos al final del array: 
let nuevaLongitud = juegos.push('F-1');
console.log({nuevaLongitud, juegos});

//Para añadir/insertar nuevos elementos al inicio del array: 
nuevaLongitud = juegos.unshift('Rocket League')
console.log({nuevaLongitud, juegos});

//Para remover el último elemento del array y lo devuelve:
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//Para remover o añadir elementos de una posición específica:
let pos = 3;
let juegosBorrados = juegos.splice(pos,1);
console.log({juegosBorrados, juegos});







