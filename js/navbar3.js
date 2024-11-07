document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".t_left img");

    function animateOnScroll() {
        const rect = image.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInViewport) {
            image.classList.add("animate");
        } else {
            image.classList.remove("animate"); // Remove to re-trigger animation
        }
    }

    window.addEventListener("scroll", animateOnScroll);

    // Initial check to animate if image is already in view
    animateOnScroll();
});


document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".body_to .t_right");

    function animateOnScroll() {
        const rect = image.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInViewport) {
            image.classList.add("animate");
        } else {
            image.classList.remove("animate"); // Remove to re-trigger animation
        }
    }

    window.addEventListener("scroll", animateOnScroll);

    // Initial check to animate if image is already in view
    animateOnScroll();
});
