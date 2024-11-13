// Función para alternar el menú (abrir/cerrar)
function toggleMenu() {
    const header = document.querySelector('header');

    if (header.classList.contains('menu-visible')) {
        // Si el menú está visible, inicia la animación de cierre
        header.classList.remove('menu-visible');
        header.classList.add('menu-closing');

        // Elimina `menu-closing` después de que termine la animación
        setTimeout(() => {
            header.classList.remove('menu-closing');
        }, 300); // Duración de la animación en ms
    } else {
        // Si el menú está cerrado, muestra el menú con la animación de apertura
        header.classList.add('menu-visible');
    }
}

// Cierra el menú cuando se hace clic fuera de él o en un enlace
document.addEventListener('click', (event) => {
    const header = document.querySelector('header');
    const menu = document.querySelector('header menu');
    const hamburger = document.querySelector('.hamburger');

    if (
        header.classList.contains('menu-visible') &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        // Cerrar el menú con animación de cierre
        header.classList.remove('menu-visible');
        header.classList.add('menu-closing');

        setTimeout(() => {
            header.classList.remove('menu-closing');
        }, 300); // Duración de la animación en ms
    }
});

// Cierra el menú cuando se hace clic en un enlace dentro del menú
document.querySelectorAll('header menu a').forEach((link) => {
    link.addEventListener('click', () => {
        const header = document.querySelector('header');
        header.classList.remove('menu-visible');
        header.classList.add('menu-closing');

        setTimeout(() => {
            header.classList.remove('menu-closing');
        }, 300); // Duración de la animación en ms
    });
});

// Detectar scroll y cerrar el menú si está abierto
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (header.classList.contains('menu-visible')) {
        // Cerrar el menú con animación de cierre cuando se hace scroll
        header.classList.remove('menu-visible');
        header.classList.add('menu-closing');

        setTimeout(() => {
            header.classList.remove('menu-closing');
        }, 300); // Duración de la animación en ms
    }
});
