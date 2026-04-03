const hasLoaded = sessionStorage.getItem("hasLoaded");
const loader = document.getElementById("loader");
const welcomeModal = document.getElementById("welcomeModal");
const closeModalBtn = document.getElementById("closeModal");

if (!hasLoaded) {
    loader.classList.add("active");
    document.body.style.overflow = "hidden";
    sessionStorage.setItem("hasLoaded", "true");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.remove("active");
            setTimeout(() => {
                welcomeModal.classList.add("show");
            }, 200);
        }, 3000);
    });
} else {
    window.addEventListener("load", () => {
        document.body.style.overflow = "scroll";
        document.body.classList.add("loaded");
    });
}

closeModalBtn.addEventListener("click", () => {
  welcomeModal.classList.remove("show");
  document.body.classList.add("loaded");
  document.body.style.overflow = "scroll";
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
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaChange(e) {
  if(!e.matches) return;

  if(checkbox.checked) {
    navbar.style.display = 'block';
  }else {
    navbar.style.display = 'none';
  }
}

checkbox.addEventListener('change', function() {
  handleMediaChange(mediaQuery);
});

mediaQuery.addEventListener('change', handleMediaChange);

const navlinks = document.querySelectorAll('.value');

navlinks.forEach(link => {
  link.addEventListener('click', function() {
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
  })
})