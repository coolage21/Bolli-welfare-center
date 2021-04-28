let openButton = document.querySelector('.open-button');
let allmenuWrap = document.querySelector('.allmenu-wrap');
openButton.addEventListener('click', function () {
    allmenuWrap.classList.add('visible');
})
let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function () {
    allmenuWrap.classList.remove('visible');
});