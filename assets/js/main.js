document.addEventListener("DOMContentLoaded", () => {
    // Sequential fade for hero
    const seqElements = document.querySelectorAll('.fade-seq1, .fade-seq2, .fade-seq3');
    seqElements.forEach((el, index) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'opacity 1s ease, transform 1s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 500);
    });

    // Scroll fade
    const scrollElements = document.querySelectorAll('.scroll-fade');
    const scrollFade = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        scrollElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if(boxTop < triggerBottom){
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            }
        });
    }
    window.addEventListener('scroll', scrollFade);
    scrollFade();

    // Logo grow animation
    const logo = document.querySelector('.logo-img');
    if(logo){
        logo.style.transform = 'scale(0.5)';
        logo.style.transition = 'transform 1s ease-out';
        setTimeout(() => { logo.style.transform = 'scale(1)'; }, 300);
    }

    // Button hover scale
    const buttons = document.querySelectorAll('button, .btn, .btn-secondary');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
    });

    // Card hover scale
    const cards = document.querySelectorAll('.card, .glass-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.05)');
        card.addEventListener('mouseleave', () => card.style.transform = 'scale(1)');
    });
});
