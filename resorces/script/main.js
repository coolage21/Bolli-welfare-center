//전체페이지
let openButton = document.querySelector('.open-button');
let allmenuWrap = document.querySelector('.allmenu-wrap');
openButton.addEventListener('click', function () {
    allmenuWrap.classList.add('visible');
})
let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function () {
    allmenuWrap.classList.remove('visible');
});


//비주얼페이지
$('.visual-slide').slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
});

//홀트패밀리
$('.partner-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    // vertical: true,
    // verticalSwiping: true,
    speed: 1000
});