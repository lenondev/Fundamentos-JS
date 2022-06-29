

// Ejemplo de asincronía en el que usamos la función setTimeOut() para modificar el texto del botón pasados 2 segundos de haberlo presionado.
let button = document.getElementById('clicker');
button.addEventListener('click',()=>{
    setTimeout( function(){
        button.innerText = 'Hit me again';
    }, 2000);
});

// Otro ejemplo con setTimeOut
const timer = () => {
    setTimeout(()=>{
        let start = Date.now();
        // console.log('Duration: ' + (end-start));
        console.log(`Start: ${start}`);
    }, 1000);
    let end = Date.now();
    console.log(`End: ${end}`);
};
timer();