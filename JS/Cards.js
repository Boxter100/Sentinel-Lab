document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      // Alternar la clase 'active' para aplicar la animación y los efectos visuales
      card.classList.toggle('active');
      
      const image = card.querySelector('img');
      const content = card.querySelector('.card__content');
      const button = card.querySelector('.button'); // Seleccionamos el botón dentro de la tarjeta
      
      // Alternar la visibilidad entre imagen y contenido
      image.classList.toggle('hidden');
      content.classList.toggle('visible');
      
      // Añadir o quitar la clase 'active' al botón para activar la animación de levitación
      if (content.classList.contains('visible')) {
        button.classList.add('active'); // Iniciar la animación
      } else {
        button.classList.remove('active'); // Detener la animación (si lo deseas)
      }
    });
  });
});
