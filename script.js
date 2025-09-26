
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeModal");

  setTimeout(() => {
    loader.classList.add("hidden");

    setTimeout(() => {
      modal.classList.add("show");
    }, 200);
  }, 4000);

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.add("loaded");
  });
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