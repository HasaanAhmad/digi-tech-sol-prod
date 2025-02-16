// Initialize components after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerEl = document.getElementById('spinner');
            if (spinnerEl) {
                spinnerEl.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var stickyNav = document.querySelector('.sticky-top');
        if (stickyNav) {
            if (window.pageYOffset > 300) {
                stickyNav.style.position = 'fixed';
                stickyNav.style.top = '0';
                stickyNav.style.width = '100%';
                stickyNav.style.zIndex = '99';
            } else {
                stickyNav.style.position = '';
            }
        }
    });

    // Initialize other plugins
    if (typeof $.fn.waypoint !== 'undefined') {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    if (typeof $.fn.owlCarousel !== 'undefined') {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
}); 