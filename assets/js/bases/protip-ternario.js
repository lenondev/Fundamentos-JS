
// Función para ubicar al número mayor con operador ternario
const elMayor = (a,b) => (a > b) ? `El mayor es ${a}` : `El mayor es ${b}`;
console.log(elMayor(20,30));

console.log('=================');
// Operador ternario con parámetro booleano
const tieneMembresia = (membresia) => (membresia) ? 'Valor: 2$' : 'Valor: 10$';
console.log(tieneMembresia(true));

console.log('=================');

// Operador ternario para generar arreglos: 

amigo = true; 
amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    (amigo) ? 'Thor' : 'Locki',
    'Brenner',
    (()=> 'Nick Fury')(), // Función anónima autoinvocada
    elMayor(25,27),
];

console.log({amigosArr});


// Otro ejemplo para el uso del operador ternario en caso de que tengamos algo parecido a un else if
const nota = 10;
const resultado = nota == 10? 'Excelente' : 
                  nota >= 9 ? 'Notable' :
                  nota >= 8 ? 'Sobresaliente' :
                  nota >  5 ? 'aprobado' : 'reprobado' ;

console.log(resultado);