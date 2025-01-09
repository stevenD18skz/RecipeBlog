// theme-toggle.js
// Selecciona el botón por su ID
const boton = document.getElementById("theme-toggle-button");

// Define la función que se ejecutará al hacer clic
function mostrarMensaje() {
  console.log("¡Has hecho clic en el botón!");
  toggleTheme();
}

// Vincula la función al evento click del botón
boton.addEventListener("click", mostrarMensaje);

// Función para alternar entre temas claros y oscuros
function toggleTheme() {
  const stylesheet = document.getElementById("theme-stylesheet");
  const currentTheme = stylesheet.getAttribute("href");
  const root = document.getElementById("root");

  if (currentTheme === "light-theme.css") {
    stylesheet.setAttribute("href", "dark-theme.css");
    root.classList.add("dark");
    console.log("¡Tema cambiado a oscuro!");
  } else {
    stylesheet.setAttribute("href", "light-theme.css");
    root.classList.remove("dark");
    console.log("¡Tema cambiado a blanco!");
  }
}

// Hacer la función global
window.toggleTheme = toggleTheme;

// Evento para mantener el tema seleccionado después de recargar la página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const stylesheet = document.getElementById("theme-stylesheet");
  const root = document.getElementById("root");

  if (savedTheme) {
    stylesheet.setAttribute("href", savedTheme);
    if (savedTheme === "dark-theme.css") {
      root.classList.add("dark");
    }
  }

  // Guardar el tema seleccionado en localStorage
  document
    .getElementById("theme-toggle-button")
    .addEventListener("click", () => {
      const newTheme = stylesheet.getAttribute("href");
      localStorage.setItem("theme", newTheme);
    });
});
