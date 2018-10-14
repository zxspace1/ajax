//const slideShow = $('.slide-show');
//const slides = $('.single-slide');
//const prev = $('.slide-nav-prev');
//const next = $('.slide-nav-next');
//let slideCount = slides.length;
//let slideWidth = 100 / slideCount;
//let slideIndex = 0;
//
//function slide(newSlideIndex) {
//    if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
//        return;
//    }
//    let marginLeft = (newSlideIndex * (-100)) + '%';
//
//    slideShow.animate({
//        'margin-left': marginLeft
//    }, 1000);
//
//    slideIndex = newSlideIndex;
//}
//
//
//slideShow.css({
//    'width': slideCount + '00%'
//});
//
//slides.each(function (ind) {
//    $(this).css({
//        'width': slideWidth + '%',
//        'margin-left': ind * slideWidth + '%'
//    });
//});
//
//prev.on('click', function () {
//    slide(slideIndex - 1);
//});
//
//next.on('click', function () {
//    slide(slideIndex + 1);
//});
const slideShow = $('.slide-show');
const slides = $('.single-slide');
const prev = $('.slider-nav-prev');
const next = $('.slider-nav-next');
let slideCount = slides.length;
let slideWidth = 100 / slideCount;
let slideIndex = 0;


function slide(newSlideIndex) {

    if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
        return;
    }



    let marginLeft = (newSlideIndex * (-100)) + '%';


    slideShow.animate({
        'margin-left': marginLeft
    }, 1000);
    slideIndex = newSlideIndex;
}



slideShow.css({
    'width': slideCount + '00%'
});

slides.each(function (ind) {
    $(this).css({
        'width': slideWidth + '%',
        'margin-left': ind * slideWidth + '%'
    });
});

prev.on('click', function () {
    slide(slideIndex - 1);
});

next.on('click', function () {
    slide(slideIndex + 1);
});
