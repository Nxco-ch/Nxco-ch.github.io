// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animation d'apparition au défilement (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Cibler toutes les cartes et les éléments de la grille
    const animateElements = document.querySelectorAll('.card, .project-item');
    
    animateElements.forEach(el => {
        // État initial caché
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        
        observer.observe(el);
    });

    // 2. Effet de surbrillance doux sur les tags au clic
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.style.backgroundColor = "#0077b6";
            tag.style.color = "#ffffff";
            
            setTimeout(() => {
                tag.style.backgroundColor = "#e1f5fe";
                tag.style.color = "#0077b6";
            }, 300);
        });
    });

    console.log("Interface médicale initialisée avec succès.");
});
