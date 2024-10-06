document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('menubutton');
    var element = document.getElementById('navigation');
    var moved = false; // Állapot nyomon követése

    button.addEventListener('click', function() {
        if (element) {
            if (moved) {
                element.style.transform = 'translateY(-50px)'; // Alaphelyzet
            } else {
                element.style.transform = 'translateY(0)'; // Mozgás 100 pixel lefelé
            }
            moved = !moved; // Állapot váltása
        } else {
            console.error('Element with id "styleMe" not found.');
        }
    });
});
