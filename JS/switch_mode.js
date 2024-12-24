document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.querySelector(".theme-switch__checkbox");
  const body = document.body;

  // Inicializar el tema según el estado del switch
  const setTheme = () => {
    if (themeSwitch.checked) {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    } else {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
    }
  };

  // Listener para cambios en el switch
  themeSwitch.addEventListener("change", setTheme);

  // Configuración inicial del tema
  setTheme();
});
