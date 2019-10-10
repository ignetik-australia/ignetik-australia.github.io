$(document).ready(function () {
    // Navbar fading
    $('#Navbar a').hover(function () {
        // over
        $(this).css("opacity", 0.5)
    }, function () {
        // out
        $(this).css("opacity", 1)
    });
});