// Configuración de partículas
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#2E86C1"
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
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#2E86C1",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
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
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});

// Animación de la barra de progreso
document.addEventListener('DOMContentLoaded', function() {
  // Iniciar con ancho 0 y luego animar
  const progressBar = document.querySelector('.progress');
  setTimeout(() => {
    progressBar.style.width = '5%';
  }, 500);
});

// Funciones para compartir en redes sociales
function compartirEnFacebook() {
  const url = encodeURIComponent(window.location.href);
  const titulo = encodeURIComponent(document.title);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${titulo}`, '_blank');
}

function compartirEnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const titulo = encodeURIComponent(document.title);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${titulo}`, '_blank');
}

function compartirEnWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const titulo = encodeURIComponent(document.title);
  window.open(`https://api.whatsapp.com/send?text=${titulo} ${url}`, '_blank');
}

// Animación al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  // Detectar elementos cuando entran en el viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated');
        
        if (entry.target.classList.contains('donation-info')) {
          entry.target.classList.add('animate__fadeInUp');
        } else if (entry.target.classList.contains('image-container')) {
          entry.target.classList.add('animate__fadeInLeft');
        } else if (entry.target.classList.contains('text-container')) {
          entry.target.classList.add('animate__fadeInRight');
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observar elementos
  document.querySelectorAll('.donation-info, .image-container, .text-container').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const donationInput = document.getElementById('donation-amount');
    const finalAmount = document.getElementById('final-amount');
    
    donationInput.addEventListener('input', function() {
      const amount = parseFloat(this.value) || 0;
      const fee = Math.round((amount * 0.06) + 33.90 + ((amount * 0.06 + 33.90) * 0.21));
      const total = amount + fee;
      
      finalAmount.textContent = `Monto final con comisiones: $${total.toFixed(2)}`;
    });
  });