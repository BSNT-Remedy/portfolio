
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.add("loaded");
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((el) => {
      const revealTop = el.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

document.querySelectorAll('.skill').forEach(img => {
    const delay = (Math.random() * 2).toFixed(2); 
    img.style.animationDelay = `${delay}s`;
});