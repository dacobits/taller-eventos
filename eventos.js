let elDiv = document.getElementById('contenedor')
let boton = document.getElementById('boton');

elDiv.addEventListener('click', function(){
    alert('Hola, Soy el Div!')
})

boton.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('¡Hola!');
});