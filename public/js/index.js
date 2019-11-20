$(document).ready(function () {
    let clicks = 0;

    // Navbar fading
    $('#Navbar a').hover(function () {
        // over
        $(this).css("opacity", 0.5)
    }, function () {
        // out
        $(this).css("opacity", 1)
    });

    // hamburger animation
    $(".hamburger").click(function (e) {
        e.preventDefault();
        if (clicks % 2 == 0) {
            $(this).addClass("is-active");
        }
        if (clicks % 2 != 0) {
            $(this).removeClass("is-active");
        }
        ++clicks;
    });

    // offset for scrolling to about link
    $("#about-link").click(function (e) {
        // prevent default and add offset to scroll
        e.preventDefault();
        const id = '#about';
        const yOffset = -100;
        // select the first item in the array
        const y = $(id)[0].getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });

    });

    // hide menu bar after click 
    $(".nav-item a").click(function () {
        $('.navbar-toggler').click();
    });

    // set the year 
    let year = new Date().getFullYear();
    $("#copyright span").text(String(year));
});