

// Creación de un closure o cierre
const creaSaludo = (mensaje) => {
    return (nombre) => {
        return `${mensaje}, ${nombre}!`;
    };
};

const textoSaludo = creaSaludo('Boa noite');
console.log(textoSaludo('amigo'));