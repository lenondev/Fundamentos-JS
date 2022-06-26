
/** Horario de tienda:
 * Días de semana abrimos a las 11.
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy.
const dia = 6; // 0: domingo... 1:lunes...
const horaConsulta = 8;

let horaApertura;
let mensaje; // Está abierto. Está cerrado, abrimos al as XX



// Lo que queremos con este primer if es saber el día de la consulta:
// if (dia === 0 || dia === 6) {
//    if ( [0,6].includes(dia) ) { 
//     console.log('Fin de semana');
//     horaApertura = 9;
// }
// else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

// Operador ternario para el primer if (horaApertura: porque es el valor que estamos definiendo):
horaApertura = ([0,6].includes(dia)) ? 9 : 11;


// if (horaConsulta >= horaApertura) {
//     mensaje = 'Está abierto';
// }
// else{
//     mensaje = `Está cerrado, abrimos a las ${horaApertura}`; // Usar Back Ticks para concatenar strings
// }

// Operador ternario para el segundo if (mensaje: porque es el valor que estamos definiendo)

mensaje = (horaConsulta >= horaApertura ) ? 'Está abierto' : `Está cerrado, abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});