// Un sigleton es una instancia única de una clase.

class Singleton {
 
    static instancia;
    nombre = '';

    constructor(nombre = ''){
        
        // Doble exclamación porque en principio necesitamos que la condición sea false. Así la instancia procede a crearse con los atributos correspondientes. Pero luego necesitamos que de true, solo para que nos devuelva la instancia previamente creada.
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }
    
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
console.log(`el nombre en la instancia1 es ${instancia1.nombre}`);
console.log(`el nombre en la instancia2 es ${instancia2.nombre}`);
