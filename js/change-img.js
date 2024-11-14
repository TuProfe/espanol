// Selecciona el elemento de la imagen
const imgElement = document.getElementById("img-izq");

// Genera una secuencia aleatoria de números del 1 al 10 sin repetir
function generateRandomSequence() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

// Almacena la secuencia y el índice actual
const imageSequence = generateRandomSequence();
let currentIndex = 0;

// Función para cambiar la imagen cada 2 segundos
function changeImage() {
    if (currentIndex >= imageSequence.length) {
        currentIndex = 0; // Reinicia el índice al final de la secuencia
    }
    
    // Cambia la imagen por la correspondiente en la secuencia
    imgElement.src = `images/intro-izq/${imageSequence[currentIndex]}.png`;
    
    // Incrementa el índice para la siguiente imagen
    currentIndex++;
}

// Llama a la función changeImage cada 2 segundos
setInterval(changeImage, 2000);

// Carga la primera imagen inmediatamente al cargar la página
window.onload = changeImage;

imgElement.addEventListener("click", function() {
    changeImage();
});

