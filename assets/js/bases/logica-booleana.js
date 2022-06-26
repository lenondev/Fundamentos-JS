
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o negación');
console.log(true); // regresa true
console.log(!true); // regresa false
console.log(!false); // regresa true
console.log(!regresaFalse()); // regresa true


console.warn('And'); // Regresa true, si todos los valores son verdaderos
console.log(true && true); // regresa true
console.log(true && false); // regresa false
console.log(false && false); // regresa false
console.log(!false && !false); // true

console.log('======================');
console.log(regresaFalse() && regresaTrue()); // regresa false (el operador and solo evalua la primera condición porque ya es false)

console.log(regresaTrue() && regresaFalse()); // regresa false y si evalua las dos condiciones porque la primera es verdadera.


console.warn('OR'); // para que el Or regrese true, por lo menos una de las condiciones tiene que ser true.
console.log(true || false); // regresa true
console.log(false || false); // regresa false
console.log(false || 'La condición no se cumple'); // regresa el string porque el valore es false y la condición no se cumple
console.log(regresaTrue() || regresaFalse()); // regresa true y no evalua la segunda condición porque la primera ya es true.
console.log(regresaFalse() || regresaTrue()); // regresa true y si evalua las dos condiciones porque la primera es false y pasa a la siguiente condición.

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo';
console.log({a1}); // regresa 'hola mundo' porque es el último valor que consigue y es el que se le asigna a la variable. true es un valor pero como tiene el && pasa a evaluar el segundo valor también.

// Ahora bien, si el ejemplo anterior tuviera un false
const a2 = false && true && 'Hola mundo';
console.log({a2}); // regresaría false, porque no todos los valores son true y el operador && no evalua más condiciones.

// Pasamos a las asignaciones con OR
const a3 = soyFalse || 'No soy falso';
console.log(a3); // regresa no soy falso

const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
console.log(a4); // regresa ya no soy falso de nuevo porque  es el primer valor true que consigue