
window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";
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
    document.body.style.overflow = "scroll";
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

const radios = document.querySelectorAll('.radio-group input[type="radio"]');
const schools = document.querySelectorAll('.school');
const schoolLogos = document.querySelectorAll('.school-logo');

schools.forEach((school, index) => {
  school.addEventListener('click', () => {
    radios[index].checked = true;
    schoolLogos.forEach(logo => logo.classList.remove('active'));
    schoolLogos[index].classList.add('active');

    schools.forEach(s => s.classList.remove('active'));
    school.classList.add('active');
  });
});

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    schools.forEach(s => s.classList.remove('active'));
    schools[index].classList.add('active');
    schoolLogos.forEach(logo => logo.classList.remove('active'));
    schoolLogos[index].classList.add('active');
  });
});

document.querySelectorAll('.skill').forEach(img => {
    const delay = (Math.random() * 2).toFixed(2); 
    img.style.animationDelay = `${delay}s`;
});

const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeSendModal");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  document.body.style.overflow = "hidden";
  modal.classList.add("show");
});

closeBtn.addEventListener("click", function() {
  form.reset();
  modal.classList.remove("show");
  document.body.style.overflow = "scroll";
});


const checkbox = document.getElementById('checkbox');
const navbar = document.querySelector('.navbar');

checkbox.addEventListener('change', function() {
  if(this.checked) {
    navbar.style.display = 'block';
  }else {
    navbar.style.display = 'none';
  }
});

const navlinks = document.querySelectorAll('.value');

navlinks.forEach(link => {
  link.addEventListener('click', function() {
    navbar.style.display = 'none';
    checkbox.checked = false;
  })
})