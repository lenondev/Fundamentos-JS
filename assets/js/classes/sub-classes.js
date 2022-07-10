
class Persona {

    static _conteo = 0;

    static get getConteo(){
        return `Hay ${this._conteo} instancias de Persona`;
    }
    static mensaje() {
        console.log('Hola, soy un método estático');
    }
    
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre='Sin nombre', codigo='Sin código', frase='Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++; 
    }

    set setComida (comida) {
        this.comida = comida.toUpperCase();
    }

    get getComida(){
        return `La comida favorita es: ${this.comida}`;
    }

    quienSoy() {
        console.log(`Hola, soy ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(this.frase);
    }
}

class Heroe extends Persona{ // extends para heredar de Persona
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }
}

const spiderman = new Heroe ('Peter Parker','Spiderman','Tu amigo y vecino'); 

console.log(spiderman);


