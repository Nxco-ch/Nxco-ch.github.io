document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // 1. SCROLL REVEAL (PRO VERSION)
    // =========================

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    }, {
        threshold: 0.12
    });

    const elements = document.querySelectorAll('.card, .project-item, .section');

    elements.forEach((el, i) => {
        el.classList.add("hidden");
        el.style.transitionDelay = `${i * 40}ms`;
        observer.observe(el);
    });


    // =========================
    // 2. TAG INTERACTION (SMOOTH FEEDBACK)
    // =========================

    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {

            tag.classList.add("tag-active");

            setTimeout(() => {
                tag.classList.remove("tag-active");
            }, 400);

        });
    });

});
