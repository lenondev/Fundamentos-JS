
// operador spread 
// Sirve para pasar múltiples argumentos como elementos individuales de un array.

// Primer ejemplo:

// Creamos una función de ejemplo
const funcionDeSuma = (x,y) => x + y;

// Creamos un array de valores o argumentos:
let data = [20,20];

// el operador se pone antes del parámetro de la función y no acepta parámetros posteriores. (Anteriores sí)
// Dicho parámetro separa los elementos del array 'data' y se suman con la función.
let results = funcionDeSuma(...data);

// Imprimer
console.log(results);


// Segundo ejemplo

// El operador spread también nos sirve para añadir elementos de un array dentro de otro array: 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6, ...array1];

console.log(array2);

// Tercer ejemplo
// complementando el ejemplo anterior, también podemos usar el operador spread para añadir un array al final con el método push.

let num = [7];
array2.push(...num);
console.log(array2);

// Cuarto ejemplo
// Sirve también para añadir los valores divididos de otros arrays

let arr1 = [1];
let arr2 = [2];
let arr3 = [...arr1, ...arr2, ...[3,4]];
let arr4 = [5];

const funcionDeSuma2 = (a,b,c,d,e) => a + b + c + d + e;

// Se suman todos los elementos de los arrays como valores independientes y devuelve el resultado total
let result = funcionDeSuma2(...arr3, ...arr4);

console.log(result);

// Quinto ejemplo
// Con el operador spread, podemos romper la referencia de objeto juan y convertir también en objeto a ana y pasarle nuevos valores a sus parámetros.

// Debemos notar que usamos el operador spread fuera del parámetro de una función, en este casi si que es el operador spread y no un parámetro rest.

let juan = {nombre: 'Juan',
            edad: 45,
            estaVivo: true};
let ana = {...juan};
ana.nombre = 'Ana';
ana.edad = 25;
ana.estaVivo = true;

console.log({juan, ana});


// Parámetro rest: 
// Cuando creamos una función flecha y queremos obtener los argumentos en modo de array:

const muestraArgumentos = (...arguments) => (arguments);

let argumentos = muestraArgumentos(10, 'Hola', true, false, 'coca cola');

console.log(argumentos);


// Otro ejemplo de arrays

const frutas = ['Pera', 'Manzana', 'Naranja'];
const otrasFrutas = [...frutas]
let frutaExtra = 'Mango'

otrasFrutas.push(frutaExtra);
console.table({frutas, otrasFrutas});


// También se puede picar el array con un .slice() sin parámetros. Pero esta forma de separar un array del otro es menos eficiente, en cuanto al tiempo de ejecución.

// console.time('slice')
// const otrasFrutas = frutas.slice();
// console.timeEnd('slice');




