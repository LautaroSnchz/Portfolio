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


//                 particulas 
document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                out_mode: "out"
            }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
});

// partículas se inicien en el contenedor 
particlesJS('particles-footer', {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 40,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
