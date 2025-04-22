document.addEventListener("DOMContentLoaded", function () {
    // Scroll Fade-In Animation
    const fadeInElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeInElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    // Debounce scroll event to improve performance
    let debounceTimer;
    window.addEventListener("scroll", function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(checkScroll, 100); // Check scroll after 100ms of no scrolling
    });

    checkScroll(); // Initial check for any elements already in view
});
