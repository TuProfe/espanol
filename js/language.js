// Insertar los interruptores en cada div con clase "language"
const languageDivs = document.querySelectorAll('.language');
const languageSwitchHTML = `
  <div class="language-switch">
    <label class="switch">
      <input type="checkbox" class="languageToggle">
      <span class="slider">
        <span class="flag" id="spanish">
          <img src="images/spain.png" alt="España" class="flag-img">
        </span>
        <span class="flag" id="english">
          <img src="images/uk.png" alt="UK" class="flag-img">
        </span>
      </span>
    </label>
  </div>
`;

languageDivs.forEach(div => {
  div.innerHTML = languageSwitchHTML;
});

// Función para sincronizar todos los interruptores, aplicar traducción y cambiar visibilidad de formularios
function syncLanguageSwitches(checked) {
  const language = checked ? "en" : "es"; // 'en' para inglés, 'es' para español
  const toggles = document.querySelectorAll('.languageToggle');

  // Sincronizar el estado de los interruptores
  toggles.forEach(toggle => {
    toggle.checked = checked;
  });
  
  // Aplicar la traducción a todos los elementos con clase 'to-change'
  document.querySelectorAll('.to-change').forEach(element => {
    const htmlContent = element.getAttribute(`data-${language}`);
    if (htmlContent) {
      element.innerHTML = htmlContent;
    }
  });

  // Mostrar u ocultar los formularios según el idioma seleccionado
  const formEsp = document.querySelector('.form-esp');
  const formEng = document.querySelector('.form-eng');

  if (language === 'en') {
    formEsp.style.display = 'block';  // Mostrar formulario en español
    formEng.style.display = 'none';   // Ocultar formulario en inglés
  } else if (language === 'es') {
    formEsp.style.display = 'none';   // Ocultar formulario en español
    formEng.style.display = 'block';  // Mostrar formulario en inglés
  }
}

// Inicializar con idioma español
syncLanguageSwitches(true);

// Agregar eventos de cambio a cada interruptor
document.querySelectorAll('.languageToggle').forEach(toggle => {
  toggle.addEventListener('change', (event) => {
    syncLanguageSwitches(event.target.checked);
  });
});
