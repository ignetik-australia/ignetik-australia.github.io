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

    $(".hamburger").click(function (e) { 
        e.preventDefault();
        if (clicks%2==0){
            $(this).addClass("is-active");    
        }
        if (clicks%2!=0){
            $(this).removeClass("is-active");
        }
        ++clicks;
    });
});