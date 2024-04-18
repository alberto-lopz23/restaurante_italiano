document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;

    // Aquí puedes implementar la lógica para enviar la reserva al servidor o mostrar un mensaje de confirmación
    alert('Reserva realizada:\nFecha: ' + date + '\nHora: ' + time + '\nNúmero de Personas: ' + guests);
});

// Obtener todos los elementos de título de menú
var menuItems = document.querySelectorAll('.menu-item');

// Iterar sobre cada elemento de título de menú
menuItems.forEach(function(item) {
    // Agregar un evento de clic a cada elemento de título de menú
    item.querySelector('h3').addEventListener('click', function() {
        // Obtener el submenú correspondiente al elemento de título de menú actual
        var submenu = item.querySelector('.submenu');
        // Alternar la visibilidad del submenú
        if (submenu.style.display === 'none') {
            submenu.style.display = 'block';
        } else {
            submenu.style.display = 'none';
        }
    });
});

