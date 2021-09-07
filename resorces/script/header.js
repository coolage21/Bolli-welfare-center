//header
$('.header-include').load('header.html', function(){
  //gnb
  $("nav > ul").on("mouseenter focusin", function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  $("nav > ul").on("mouseleave focusout", function () {
    $(this).removeClass("on");
  });

  //all button
  let openButton = document.querySelector('.open-button');
  let allmenuWrap = document.querySelector('.allmenu-wrap');
  openButton.addEventListener('click', function (){
      allmenuWrap.classList.add('visible');
  })
  let closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', function (){
      allmenuWrap.classList.remove('visible');
  });
})

//footer
$('.footer-include').load('footer.html')