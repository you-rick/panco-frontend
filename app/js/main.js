$(function () {
    $(".item-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
    });

    $(".search-toggle").on("click", function () {
        $(".search-dropdown").toggleClass("shown");
    });

    $(".scroll-top").on("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
});
