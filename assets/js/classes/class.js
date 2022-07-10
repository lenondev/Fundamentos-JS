// Creación de clases
// Esta es la mejor forma de programar con clases en JS
// primera letra del nombre en mayúscula
class Persona {
    // 'use strict' está por defecto

    // propiedad estática
    static _conteo = 0;

    // getter de conteo estático para poder acceder desde Persona. sin necesidad de instanciar
    static get getConteo(){
        return `Hay ${this._conteo} instancias de Persona`;
    }

    // método estático
    static mensaje() {
        console.log('Hola, soy un método estático');
    }
    
    // atributos de la clase
    nombre = '';
    codigo = '';
    frase  = '';
    comida  = '';

    // constructor
    constructor(nombre='Sin nombre', codigo='Sin código', frase='Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++; // contabilizamos cuántas instancias de Persona se inicializan
    }

    // getters and setters
    set setComida (comida) {
        this.comida = comida.toUpperCase();
    }

    get getComida(){
        return `La comida favorita es: ${this.comida}`;
    }

    // métodos 
    quienSoy() {
        console.log(`Hola, soy ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(this.frase);
    }
}

// Para acceder a esta clase tenemos que instanciar elementos del tipo Persona
const spiderman = new Persona('Peter Parker','Spiderman','Tu amigo y vecino'); // Le pasamos los parámetros definidos en el constructor

console.log(spiderman);
spiderman.miFrase(); // llamada a método

// llamada a setter
spiderman.setComida = 'Pizza';

// llamada al getter
console.log(spiderman.getComida);

// llamada al método estático con el getter
console.log(Persona.getConteo);

// llamamos al método estático
Persona.mensaje();