document.addEventListener("DOMContentLoaded", function() {
    // Function to handle smooth scrolling
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Smooth scroll to sections when clicking navigation links
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            var target = this.getAttribute("href");
            smoothScroll(target, 1000);
        });
    });

    // Smooth scroll to top when clicking the "Back to Top" button
    var backToTopButton = document.querySelector(".back-to-top-btn");
    backToTopButton.addEventListener("click", function(e) {
        e.preventDefault();
        smoothScroll("#top", 1000);
    });

    // Toggle mobile navigation menu
    var menuToggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("slide");
    });
});

