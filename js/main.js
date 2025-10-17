
// Navigation handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Statut selection handling
const statutSelect = document.getElementById('statut');
const autrePrecision = document.getElementById('autre-precision');

statutSelect.addEventListener('change', function() {
    if (this.value === 'autre') {
        autrePrecision.style.display = 'block';
    } else {
        autrePrecision.style.display = 'none';
    }
});

// Form submission handling
//const contactForm = document.querySelector('form');
//contactForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//    alert('Merci pour votre message ! Nous vous recontacterons très rapidement.');
//    this.reset();
//    autrePrecision.style.display = 'none';
//});

// Effet de flou sur le header au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('backdrop-blur-md');
    } else {
        header.classList.remove('backdrop-blur-md');
    }
});

//<!-- Script mobile menu -->    
document.addEventListener("DOMContentLoaded", function () {
const toggleBtn = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    // toggle aria for accessibility
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));

    // change icon (fa-bars <-> fa-times)
    if (icon) {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    }
});

// Fermer le menu quand on clique sur un lien
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    toggleBtn.setAttribute("aria-expanded", "false");
    if (icon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
    });
});
});