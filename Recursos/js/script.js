// Muestra un mensaje de bienvenida cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    alert('¡Bienvenido al currículum de Betsy Daniela Velazquez Osorio!');
});

// Cambiar tema (modo claro/oscuro)
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = 'Cambiar Tema';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '10px';
toggleThemeButton.style.right = '10px';
toggleThemeButton.style.padding = '10px 15px';
toggleThemeButton.style.backgroundColor = '#1abc9c';
toggleThemeButton.style.color = '#fff';
toggleThemeButton.style.border = 'none';
toggleThemeButton.style.borderRadius = '5px';
toggleThemeButton.style.cursor = 'pointer';

document.body.appendChild(toggleThemeButton);

let isDarkTheme = true;
toggleThemeButton.addEventListener('click', () => {
    if (isDarkTheme) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        toggleThemeButton.style.backgroundColor = '#555';
        toggleThemeButton.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#2c3e50';
        document.body.style.color = '#ecf0f1';
        toggleThemeButton.style.backgroundColor = '#1abc9c';
        toggleThemeButton.style.color = '#fff';
    }
    isDarkTheme = !isDarkTheme;
});

// Animación al pasar el mouse por las secciones principales
const sections = document.querySelectorAll('main h1, aside h2');
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.color = '#1abc9c';
        section.style.transform = 'scale(1.1)';
        section.style.transition = 'all 0.3s ease';
    });

    section.addEventListener('mouseout', () => {
        section.style.color = '';
        section.style.transform = 'scale(1)';
    });
});

// Función para copiar el correo al portapapeles
const emailElement = document.querySelector('aside p:nth-child(6)'); // Selecciona el correo
emailElement.style.cursor = 'pointer';

emailElement.addEventListener('click', () => {
    const email = emailElement.innerText.replace('Email: ', '').trim();
    navigator.clipboard.writeText(email).then(() => {
        alert(`Correo copiado al portapapeles: ${email}`);
    });
});
