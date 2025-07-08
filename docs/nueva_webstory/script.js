// Scroll suave para navegación interna
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  