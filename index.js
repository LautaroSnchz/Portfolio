document.addEventListener("DOMContentLoaded", function() {
    // Inicializa el toast
    $('#welcomeToast').toast();

    // Muestra el toast
    $('#welcomeToast').toast('show');

    // Añade clase de animación al título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.classList.add('animate-text');
    }

    // --- Lógica de Traducción (I18n) ---
    const savedLang = localStorage.getItem("portfolio-lang") || "en";
    setLanguage(savedLang);

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem("portfolio-lang") || "en";
            const newLang = currentLang === "en" ? "es" : "en";
            setLanguage(newLang);
        });
    }

    // Evitar recarga en el formulario de contacto para demo
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem("portfolio-lang") || "en";
            const msg = currentLang === "es" 
                ? "¡Mensaje enviado con éxito! (Simulación)" 
                : "Message sent successfully! (Simulation)";
            alert(msg);
            contactForm.reset();
        });
    }
});

// Función de Cambio de Idioma
function setLanguage(lang) {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;

    // Cambiar texto de los elementos correspondientes
    const elements = document.querySelectorAll("[data-en][data-es]");
    elements.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });

    // Cambiar placeholders de inputs y textareas
    const inputs = document.querySelectorAll("[data-placeholder-en][data-placeholder-es]");
    inputs.forEach(input => {
        const placeholderText = input.getAttribute(`data-placeholder-${lang}`);
        input.setAttribute("placeholder", placeholderText);
    });

    // Cambiar texto del botón selector de idioma (muestra el idioma al que se puede cambiar)
    const langText = document.getElementById("langText");
    if (langText) {
        langText.textContent = lang === "es" ? "EN" : "ES";
    }
}

// Control del Scroll de la Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// --- Configuración de Partículas ---

// Partículas en el Hero
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

// Partículas en el Footer
document.addEventListener("DOMContentLoaded", function() {
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
});
