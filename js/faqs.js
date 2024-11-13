const questions = document.querySelectorAll('.faq-item');

questions.forEach((item) => {
    const question = item.querySelector('.question');

    question.addEventListener('click', () => {
        // Verificar si el item ya está activo (expandido)
        const isActive = item.classList.contains('active');

        // Cerrar todas las respuestas abiertas
        questions.forEach(i => i.classList.remove('active'));

        // Si el item no estaba activo, activarlo
        if (!isActive) {
            item.classList.add('active');
        }
    });
});