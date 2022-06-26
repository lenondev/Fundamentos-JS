

let a = 15;

if(a >= 10){ // undefined, null, una asignación
    console.log('A es mayor o igual que 10');
}
else{
    console.log('A es menor a 10');
}
// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();
// console.log({dia});

if(dia === '6'){ // Tres equals quiere decir que son valores idénticos. Dos equals quiere decir que pueden tener un distinto tipado pero el mismo valor. Un equal quiere decir que es una asignación.
    console.log('Hoy es Sábado');
}
else {
    console.log('Hoy no es sábado');
}

// Siempre para comprobar el resultado booleando que nos arroja la condición que estamos planteando podemos mirarlo de la siguiente forma: 

console.log(dia === 6);


// Alternativas a If Else & switch

// Utilizando arraglos y objetos


// Solución al if y else con arrays
// teniendo en cuenta que el getDay ajusta el día de la semana al igual que un array del 0 al 6 donde 0 es domingo y 6 es sabado, podemos también declarar un array con los días de la semana e imprimir el que queramos de acuerdo a la posición del array.
let dia1 = 6;
const diaLetras = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
console.log(diaLetras[dia1] || 'Día no definido');


// Solución al if y else con objetos
const diasDeLaSemana = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado'
};

const diaDeHoy = (dia) => {
    return diasDeLaSemana[dia];
}
console.log(diaDeHoy(dia1) || 'Día no definido');



