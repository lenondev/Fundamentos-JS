// uso de la palabra this para acceder al scope de un atributo en un objeto literal
const pedro = {
    nombre: 'Pedro',
    edad: '25',
    imprimir(){ // Uso de la palabra this para acceder al scope de las variables nombre y edad del objeto pedro
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}
console.log(pedro.nombre,pedro.edad);
pedro.imprimir();


// Modalidades para crear clases en JS
function Persona (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = () =>{
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// nueva instancia de la clase creada
const maria = new Persona('María', 'Fernández');

// llamamos a los atributos y método del objeto creado.
console.log(maria.nombre);
console.log(maria.edad);
maria.imprimir();



