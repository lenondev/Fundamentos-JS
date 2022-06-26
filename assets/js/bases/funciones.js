
// Creación:
function saludar(nombre) {
    // console.log(arguments);
    console.log('Hola,' + nombre);
    return [10,5];

    //Esto nunca se ejecutará por estar después del return.
    console.log('Soy un codigo que va después del return');
}

// Ejecución:
const retornoDeSaludar = saludar('Lenon'+', ejecutaste una función tradicional.', 27, true, 'Venezuela'); // Pasar argumentos a la función mediante su ejecución
console.log({retornoDeSaludar});

// // Función anónima:
// const saludar2 = function(){
//     console.log('Hola Mundo!');
// };

// // Ejecución función anónima: 
// saludar2();


// Funciones de flecha o lambda function:
const saludarFlecha = (nombre) => {
    console.log('Hola '+ nombre + ', ejecutaste una función flecha.');
}

saludarFlecha('Lenon');

// Más ejemplos de función de flecha:
// Cuando la función ocupa solo la línea de código del return, podemos resumir la función flecha de la siguiente manera:
const suma = (a,b) => a+b;

// Y ejecutamos:
console.log(suma(2,2));


// Algunas propiedades de las funciones: 
function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

// Transformamos la función anterior a función lambda o flecha para simplificar líneas de código:
const getAleatorioFlecha = () => Math.random();
console.log(getAleatorioFlecha());

