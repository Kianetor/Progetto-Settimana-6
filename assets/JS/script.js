// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.


const themeToggle = document.getElementById('theme-toggle');
const themeText = themeToggle.querySelector('.theme-text');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeText.textContent = 'Tema chiaro';
    } else {
        themeText.textContent = 'Tema scuro';
    }
});
