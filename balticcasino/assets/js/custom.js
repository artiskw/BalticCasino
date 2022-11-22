jQuery(function ($) {
    jQuery(document).ready(function () {

        // Toggles paragraphs display
        $(".show").click(function(){
            $(this).find(".icon-down").toggle();
            $(this).find(".icon-up").toggle();
            $(this).find(".more").toggle();
            $(this).find(".less").toggle();
            $(this).find(".show-text") .toggle();
          });

        // Mobile menu
        $(".hamburger").click(function () { //clik funkcija
            $(this).toggleClass("is-active");
            $(".menu-breakpoint-menu-container").toggleClass("is-active"); //tad kad uzspiedīšu uz hamburger, atversies menu
            $(".page-container, footer").toggleClass("page-background"); //scss kodā raksru, page conatainer iedotu papildus klasi -->page-background<--- un footer
        });

        // Slider
        $(".slider-container").slick({
            infinite: true,
            dots: true,
            appendDots: $(".slider-dots"),
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false
        });

        // Guides block
        $(".info, .close").click(function () {
            $(this).parent().toggleClass("is-active");
            $(this).parent().parent().parent().parent().find(".info-paragraf").toggleClass("is-active");
        });

        // For internet explorer
        if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
            $(".btn-container").addClass("ie-btn-container");
        }
    });
})





