/** First Slider */
$(".slider-one")
    .not(".slick-initialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider-btn.prev",
        nextArrow: ".site-slider-btn.next",
    });