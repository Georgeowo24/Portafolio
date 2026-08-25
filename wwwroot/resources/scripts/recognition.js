document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("preview-modal");
  const modalImg = document.querySelector(".preview-img");
  const closeBtn = document.querySelector(".close-btn");
  const cards = document.querySelectorAll(".recognition-card img");

  cards.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("active");
    }
  });
});
