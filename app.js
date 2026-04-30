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
