

class Persona {

    //método con destructuración de argumentos dentro de la clase Persona
    static persPorObj({nombre, apellido,pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const nombre1   = 'Melissa',
      apellido1 = 'Pérez',
      pais1     = 'Venezuela';

const persona1 = new Persona(nombre1,apellido1,pais1);
persona1.getInfo();

// creación de Persona a través de objetos (necesario método con destructuración de argumentos dentro de la clase Persona)
const Lenon = {
    nombre:   'Lenon',
    apellido: 'Acacio',
    pais:     'Venezuela'
}
// Asignamos los valores del objeto a través de una llamada a la clase Persona y a su método persPorObj(), pasando como parámetro el objeto previamente creado
const persona2 = Persona.persPorObj(Lenon);
persona2.getInfo();