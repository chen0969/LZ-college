 //活動維護輪播
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
    //rwd
    responsive: {
        0: {
            items: 1 //出現幾個
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//最新課程
$('.owl-carousel-new').owlCarousel({
    items: 1,
    loop: true, //循環
    margin: 10, //與右邊圖片的距離  
    dots: true, //切換按鈕
    //rwd
    responsive: {
        0: {
            items: 1 //出現幾個
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//熱門課程輪播
$('.owl-carousel-best').owlCarousel({
    items: 3,
    loop: true, //循環
    margin: 50, //與右邊圖片的距離
    nav: true, //導航文字
    dots: true,
    autoplay: false, //自動

    //rwd
    responsive: {
        0: {
            items: 1 //出現幾個
        },
        400: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

//理周推薦
$('.owl-carousel-recommend').owlCarousel({
    items: 3,
    loop: true, //循環
    margin: 50, //與右邊圖片的距離
    nav: false, //導航文字
    dots: false,
    autoplay: true, //自動

    //rwd
    responsive: {
        0: {
            items: 1 //出現幾個
        },
        400: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
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

    //rwd
    responsive: {
        0: {
            items: 1 //出現幾個
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


// slick slider
$(document).ready(function(){
    initializeSectionWidth();
    $(".broccoliSlider .cards.slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      vertical: true,
      draggable: true,
      verticalSwiping: true,
      pauseOnHover:false,
      arrows: false,
      // rwd
      responsive: [
        {
          breakpoint: 750,
          settings: {
            dots: false,
            slidesToShow: 1
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
        responsive: [
            {
              breakpoint: 750,
              settings: {
                dots: false
              }
            }]
      },
      
    );
  });


  function initializeSectionWidth() {
    // Check if the device is not a mobile device
    if (window.innerWidth > 768) {
        // section width
        $(document).ready(function(){
            let sectionW = $(".carousel-inner").width();
            $(".news_class").each(function(){
                $(this).width(sectionW);
            });
            $(".callAction").width(sectionW);
            $(".contact > div").width(sectionW);
            $(".butmBanner").width(sectionW);
        });
    }
}

function link(){
    window.location.replace("#");
}