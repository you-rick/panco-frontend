$(function () {
    $(".item-slider.home").slick({
        slidesToShow: $(this).attr("data-slides") || 3,
        slidesToScroll: $(this).attr("data-slides") || 3,
        dots: true
    });
    $(".item-slider.internal").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false
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
    });

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

    $(".dropdown-toggle").on("click", function (e) {
        e.preventDefault();
        var $parent = $(this).closest(".custom-dropdown");
        $(".custom-dropdown").not($parent).removeClass("active");
        $parent.toggleClass("active");
    });

    $('body').on('click', function (e) {
        if ($(e.target).closest('.custom-dropdown').length === 0) {
            $(".custom-dropdown").removeClass("active");
        }
    });

    $(".filter-toggle").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".products").toggleClass("filter-shown");
    });

    $(".toggle-rows").on("click", function () {
        var number = $(this).attr("data-row");
        $("#grid_container").attr("data-rows", number);
        $("#col_number_label").text(number);
    });


    if ($(".item-slider-photo").length > 5) {
        $(".product-slider").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            vertical: true,
            infinite: false
        });
    }

    $(".item-slider-photo").on("mouseover", function () {
        $(".item-slider-photo").removeClass("active");
        $(this).addClass("active");
        var imgSrc = $(this).find("img").attr("src");
        $("#item_preview").attr("src", imgSrc);
    });


    $(".collapse-toggle").on("click", function () {
        $(this).closest(".custom-collapse").toggleClass("shown");
    });
});


