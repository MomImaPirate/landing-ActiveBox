$(function () {
    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");

    //высота элемента без padding
    //let introH = intro.height();

    //высота элемента c padding
    let introH = intro.innerHeight();

    //получаем высоту скролинга (расстояние от верха)
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("navToggle");

    console.log(introH);
    console.log(scrollPos);

    checkScroll(scrollPos, introH);


    //меняем класс шапки при скролле
    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);

    });

    function checkScroll() {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /*SmoothScroll*/
    $("[data-scroll]").on("click", function (event) {
        //отмена стандартного поведения ссылки
        event.preventDefault();

        //сохраняем id блока
        let elenemtId = $(this).data('scroll');
        console.log(elenemtId);

        //получаем позицию от верха страницы
        let elementOffset = $(elenemtId).offset().top;
        console.log(elementOffset);

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });


    /*navToggle*/
    
    $(navToggle).on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});

/*Reviews  https://kenwheeler.github.io/slick/ */
let slider = $("#reviewsSlider");

slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false
  });