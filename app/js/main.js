$(function () {
    var wWidth = $(window).width();
    var slidesNumber = 3;

    if (wWidth > 900) {
        slidesNumber = 3;
    } else if (wWidth > 600 && wWidth <= 900) {
        slidesNumber = 2;
    } else {
        slidesNumber = 1;
    }

    $(".item-slider.home").slick({
        slidesToShow: slidesNumber,
        slidesToScroll: 1,
        dots: false,
        infinite: false
    });
    $(".item-slider.internal").slick({
        slidesToShow: wWidth > 900 ? 4 : slidesNumber,
        slidesToScroll: 1,
        dots: false,
        infinite: false
    });

    if (wWidth < 1024) {
        $(".mobile-product-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            arrows: false
        });
    }

    $(".search-toggle").on("click", function (e) {
        e.preventDefault();
        $(".search-dropdown").toggleClass("shown");
        $(".search-toggle.open").toggleClass("active");
        $("body").toggleClass("o-hidden");
    });

    $(".scroll-top").on("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $(window).on('scroll load', function () {
        var $header = $('.main-header');
        var topNav = ".topbar-navigation";
        var topPos = $(this).scrollTop();

        if (topPos >= 48) {
            $header.addClass('fixed');
            if (!$("#header_nav " + topNav).length) {
                $(topNav).appendTo("#header_nav");
            }
            return false;
        }
        $header.removeClass('fixed');
        if (!$("#topbar_nav " + topNav).length) {
            $(topNav).appendTo("#topbar_nav");
        }

    });

    $(".dropdown-toggle").on("click", function (e) {
        e.preventDefault();
        var $parent = $(this).closest(".custom-dropdown");
        $(".custom-dropdown").not($parent).removeClass("active");
        $parent.toggleClass("active");
    });

    $('body').on('click', function (e) {
        console.log(e.target);
        if ($(e.target).closest('.custom-dropdown').length === 0) {
            $(".custom-dropdown").removeClass("active");
        }
    });

    $(".filter-toggle").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".products-wrapper").toggleClass("filter-shown");
    });

    $(".toggle-rows").on("click", function () {
        var number = $(this).attr("data-row");
        var $parent = $(this).closest(".custom-dropdown");
        $("#grid_container").attr("data-rows", number);
        $parent.find(".col-number-label").text(number);
    });

    $(window).on("orientationchange", function () {
        var $label = $(".col-number-label:visible");
        var txt = $label.attr("data-default");
        $label.text(txt);
        $(".toggle-rows.default:visible").trigger("click");

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


    $(".footer-col-toggle").on("click", function () {
        if (wWidth < 768) {
            $(this).closest(".col").toggleClass("shown");
        }
    });

    $(".cart-toggle.mobile").on("click", function () {
        $(this).closest(".cart").toggleClass("active");
    });

    $(".topnav-toggle").on("click", function () {
        $(this).toggleClass("active");
        $(".mobile-nav").toggleClass("shown").scrollTop(0);
        $("body").toggleClass("o-hidden");
        $(".mobile-nav-overlay").toggleClass("shown");
    });

    $(".mobile-nav-overlay").on("click", function (e) {
        $(".topnav-toggle").trigger("click");
    });


    $(".mobile-nav a.parent").on("click", function (e) {
        e.preventDefault();
        $(this).siblings(".submenu").addClass("shown");
        $(".mobile-nav").scrollTop(0).toggleClass("submenu-shown", $(".submenu.shown").length !== 0);

    });

    $(".mobile-nav a.back").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".submenu").removeClass("shown");
        $(".mobile-nav").toggleClass("submenu-shown", $(".submenu.shown").length !== 0);
    });

    $(".mobile-nav .dropdown-toggle").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".dropdown-box").toggleClass("shown");
    });


});


