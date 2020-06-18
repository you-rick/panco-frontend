$(function () {
    $(".item-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
    });

    $(".search-toggle").on("click", function (e) {
        e.preventDefault();
        $(".search-dropdown").toggleClass("shown");
    });

    $(".scroll-top").on("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })

     $(window).on('scroll load', function () {
        var topPos = $(this).scrollTop();
        if (topPos >= 48) {
            $('.main-header').addClass('fixed');
            $(".topbar-navigation").appendTo("#header_nav");
            return false;
        }
        $('.main-header').removeClass('fixed');
        $(".topbar-navigation").appendTo("#topbar_nav");
    });
});
