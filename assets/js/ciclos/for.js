
const heroes = ['Batman', 'Superman','Mujer Maravilla','Aquaman'];

// For tradicional:
console.warn('For');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// For in: 
console.warn('For In');
for (let i in heroes) {
    console.log(heroes[i]);
}

/** Diferencias entre for in y for of
 * For in: para mostrar los resultados del array debes colocar el nombre y la posición que sería la del iterador i. 
 * For of: no hace falta colocar el nombre del array y la posición a la hora de mostrar los elementos ya que declaras una variable que barrerá todos esos valores y los mostrará sin más.
 */

// For of:
console.warn('For of');
for (let heroe of heroes) {
    console.log(heroe);
}

// Sumar los elementos de un array
let result = 0;
let arr = [6,6,6,6,6,6,6,6,6,6,4.5,4.5];
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    
}
console.warn('TotalCreditos');

console.log(result);

