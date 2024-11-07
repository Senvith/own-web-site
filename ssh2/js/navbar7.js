document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".imgo");

    function animateOnScroll() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isInViewport) {
                element.classList.add("animate");
            } else {
                element.classList.remove("animate"); // Remove to re-trigger animation
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);

    // Initial check to animate elements already in view
    animateOnScroll();
});
