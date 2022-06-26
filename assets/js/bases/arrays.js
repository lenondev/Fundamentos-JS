

// Forma Nº 1 de declarar array (poco común)
// const arr = new Array(10);
// console.log(arr);

// Forma Nº 2 de declarar array.
// const arr = [];

//Forma Nº 3 de declarar array (más común)

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos);
console.log(videoJuegos[1]);

// Los arrays aceptan el almacenamiento de todo tipo de datos. A continuación el ejemplo y cómo acceder a ellos:
let listaArreglos = [
    true,
    123,
    'Lápiz',
    'Programador',
    1+2,
    function(){},
    () => {},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',['Dr. Willy', 'Bomberman']]
];

console.log(listaArreglos[8][4][1]);