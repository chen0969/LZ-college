$(document).ready(function () {
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        console.log("This is a mobile device.");
        setWidth();
        setTimeout(mobileOwl, 100);
        setTimeout(runSlider, 110);
    } else {
        console.log("This is not a mobile device.");
        setWidth();
        setTimeout(runOwl, 100);
        setTimeout(runSlider, 110);
    }
});

function setWidth() {
    // Check if the device is not a mobile device
    // section width
    let sectionW = $(".carousel-inner").width();
    $(".news_class").each(function () {
        $(this).width(sectionW);
    });
    $(".callAction").width(sectionW);
    $(".contact > div").width(sectionW);
    $(".butmBanner").width(sectionW);
    $("ul.nav.nav-tabs").width(sectionW);
}

function runSlider() {
    $(".broccoliSlider .cards.slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        draggable: true,
        verticalSwiping: true,
        pauseOnHover: false,
        arrows: false,
        // rwd
        responsive: [{
            breakpoint: 800,
            settings: {
                dots: false,
                slidesToShow: 2,

            }
        }]
    });

    $(".verticalSlide.slider").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            vertical: true,
            draggable: true,
            verticalSwiping: true,
            pauseOnHover: false,
            arrows: false,
            // rwd
            responsive: [{
                breakpoint: 800,
                settings: {
                    dots: false,
                    slidesToShow: 1,

                }
            }]
        },

    );
}

function runOwl() {
    $('.owl-carousel-one').owlCarousel({
        loop: true, //循環
        margin: 10, //與右邊圖片的距離
        nav: true, //導航
        dots: true,
        mouseDrag: false, // 滑鼠拖曳
        touchDrag: false, // 觸控拖曳
        navText: ['<', '>'],
        autoplay: true, //自動
        startPosition: 'URLHash',
    });
    //最新課程
    $('.owl-carousel-new').owlCarousel({
        items: 1,
        loop: true, //循環
        margin: 10, //與右邊圖片的距離  
        dots: true, //切換按鈕
    });

    //熱門課程輪播
    $('.owl-carousel-best').owlCarousel({
        items: 3,
        loop: true, //循環
        margin: 50, //與右邊圖片的距離
        nav: true, //導航文字
        dots: true,
        autoplay: false, //自動
    });

    //理周推薦
    $('.owl-carousel-recommend').owlCarousel({
        items: 4,
        loop: true, //循環
        margin: 50, //與右邊圖片的距離
        nav: false, //導航文字
        dots: false,
        autoplay: true, //自動
    });

    //影音
    $('.owl-carousel-video').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
    });
}

function mobileOwl() {
    console.log("mobile ver");
    $('.owl-carousel-one').owlCarousel({
        loop: true, //循環
        margin: 50, //與右邊圖片的距離
        nav: false, //導航
        dots: false,
        mouseDrag: false, // 滑鼠拖曳
        touchDrag: false, // 觸控拖曳
        navText: ['<', '>'],
        autoplay: true, //自動
        startPosition: 'URLHash',
    });
    //最新課程
    $('.owl-carousel-new').owlCarousel({
        items: 1,
        loop: true, //循環
        margin: 10, //與右邊圖片的距離  
        dots: false, //切換按鈕
    });

    //熱門課程輪播
    $('.owl-carousel-best').owlCarousel({
        items: 1,
        loop: true, //循環
        margin: 50, //與右邊圖片的距離
        nav: false, //導航文字
        dots: false,
        autoplay: false, //自動
    });

    //理周推薦
    $('.owl-carousel-recommend').owlCarousel({
        items: 1,
        loop: true, //循環
        margin: 50, //與右邊圖片的距離
        nav: false, //導航文字
        dots: false,
        autoplay: true, //自動
    });

    //影音
    $('.owl-carousel-video').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
    });
}