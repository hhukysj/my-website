 // ======= Typing Animation =======
    var typed = new Typed(".typing", {
      strings: ["Web Developer", "Designer", "Tech Enthusiast", "Creator"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // ======= Background Particles =======
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          this.x += dx / distance * 2;
          this.y += dy / distance * 2;
        }
      }
      draw() {
        ctx.fillStyle = "rgba(0,255,204,0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      initParticles();
    });

    initParticles();
    animate();
        // ======= Theme Toggle =======
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      toggleButton.textContent = document.body.classList.contains("light-theme") ? "🌙" : "☀️";
    });
      const card = document.querySelector('.animated-card');

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--x', '50%');
    card.style.setProperty('--y', '50%');
  });
  // Toggle Navbar for Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// GSAP Animations
window.addEventListener('load', () => {
  gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1 });
  gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
  gsap.from('.btn', { opacity: 0, scale: 0.5, duration: 0.5, delay: 0.6 });
  gsap.from('header', { y: -80, opacity: 0, duration: 0.8 });
});



    