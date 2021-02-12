const menuBtn = document.querySelector('.menu-burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

menuBtn.addEventListener('click', function (event) {
    if (event.currentTarget.classList.contains('active')) {
        event.currentTarget.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    } else {
        event.currentTarget.classList.add('active');
        menu.classList.add('active');
        body.classList.add('lock');
    }

})