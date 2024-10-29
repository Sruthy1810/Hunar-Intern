// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split(".html")[0];
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Background color transitions based on scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    document.body.style.background = scrollPos > 100 ? "linear-gradient(135deg, #e0c3fc, #8ec5fc)" : "linear-gradient(135deg, #8ec5fc, #e0c3fc)";
});
