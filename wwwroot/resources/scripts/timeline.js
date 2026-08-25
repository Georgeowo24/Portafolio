window.initTimeline = function() {
    // Quitamos el document.addEventListener("DOMContentLoaded", ...)
    const items = document.querySelectorAll(".timeline-item");

    // Validación por si acaso la función se llama y no hay elementos
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // evita reanimar
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
};