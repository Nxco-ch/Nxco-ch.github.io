// =========================
// REVEAL ANIMATION
// =========================

document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }

        });

    }, {
        threshold: 0.12
    });

    const hiddenElements = document.querySelectorAll('.section, .card');

    hiddenElements.forEach((el, i) => {

        el.classList.add('hidden');

        el.style.transitionDelay = `${i * 70}ms`;

        observer.observe(el);

    });

});

// =========================
// MAGNETIC BUTTON EFFECT
// =========================

const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

buttons.forEach(button => {

    button.addEventListener('mousemove', e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform = 'translate(0px, 0px)';

    });

});

// =========================
// NAVBAR BACKGROUND ON SCROLL
// =========================

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 40) {

        navbar.style.background = 'rgba(5,7,15,0.8)';
        navbar.style.borderBottom =
            '1px solid rgba(255,255,255,0.08)';

    } else {

        navbar.style.background = 'rgba(5,7,15,0.55)';
    }

});

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // CINEMATIC SECTION REVEAL
    // =========================

    const sections = document.querySelectorAll(".section");

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(sec => sectionObserver.observe(sec));

    // =========================
    // TIMELINE ANIMATION
    // =========================

    const items = document.querySelectorAll(".timeline-item");

    const timelineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    items.forEach(item => timelineObserver.observe(item));

});

const canvas = document.getElementById("neuralCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const PARTICLE_COUNT = 80;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(0, 212, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function connect(p1, p2) {
    let dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

    if (dist < 120) {
        ctx.strokeStyle = "rgba(124, 58, 237, 0.15)";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }
}

function init() {
    particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].move();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
            connect(particles[i], particles[j]);
        }
    }

    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

const reveals = document.querySelectorAll(".hero-title, .hero-subtitle, .badge");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

reveals.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    document.querySelectorAll(".section").forEach((sec, i) => {
        sec.style.transform = `translateY(${scrollY * 0.02 * (i % 2 ? 1 : -1)}px)`;
    });
});
