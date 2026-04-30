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

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.body.style.backgroundPosition = `
        ${50 + x}% ${50 + y}%,
        ${50 - x}% ${50 - y}%,
        center
    `;
});
