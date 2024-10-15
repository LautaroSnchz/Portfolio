document.addEventListener("DOMContentLoaded", function() {
    // Inicializa el toast
    $('#welcomeToast').toast();

    // Muestra el toast
    $('#welcomeToast').toast('show');



    const heroTitle = document.querySelector('.hero-title');
    heroTitle.classList.add('animate-text');
});

window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        heroSection.style.backgroundColor = '#0056b3'; // Cambia a un azul más oscuro
    } else {
        heroSection.style.backgroundColor = '#007bff'; // Azul original
    }
});


const heroSection = document.querySelector('.hero-section');

heroSection.addEventListener('mouseenter', () => {
    heroSection.style.transition = 'clip-path 0.5s ease';
    heroSection.style.clipPath = 'polygon(0 0, 100% 0, 100% 85%, 0 65%)';
});

heroSection.addEventListener('mouseleave', () => {
    heroSection.style.transition = 'clip-path 0.5s ease';
    heroSection.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 75%)';
});


window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const sectionPosition = heroSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    } else {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(-20px)';
    }
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});



const diagonalSection = document.querySelector('.diagonal-section');

diagonalSection.addEventListener('mouseenter', () => {
    diagonalSection.style.clipPath = 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)';
});

diagonalSection.addEventListener('mouseleave', () => {
    diagonalSection.style.clipPath = 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)';
});
