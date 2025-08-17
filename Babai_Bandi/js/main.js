$(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
        $("#topMenu").addClass("scrolled");
    } else {
        $("#topMenu").removeClass("scrolled");
    }
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: { items: 1 },     // mobile
            600: { items: 2 },   // tablet
            1000: { items: 3 },   // desktop    
        }
    });

    // Mobile Menu Toggle
    $(".menu-toggle").click(function () {
        $(".menu").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars fa-times");
    });
});

