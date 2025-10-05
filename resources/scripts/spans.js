document.addEventListener("DOMContentLoaded", () => {   
    const techItems = document.querySelectorAll(".tech-list span");
    techItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1 + 0.3}s`;
    });
});