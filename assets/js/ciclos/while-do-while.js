

const carros = ['Mercedez','Tesla','BMW','Volkswagen'];

let i = 0;

console.warn('While');

while (carros[i]) { // Para que funciona la condición debe ser true. Los tipos undefined, null y false, son equivalentes y no permitirían la ejecución del búcle. 
    if (i === 0) {
        console.log(carros[i]);
        break; // podemos detener el búcle en algún punto específico con el break.
    }
    console.log(carros[i]);
    i++;
}


console.warn('Do-While');
let j = 0;

do {
    console.log(carros[j]);
    j++;
    
} while (carros[j]); // Se imprimen lo valores de carros hasta que carros deje de tener un valor.