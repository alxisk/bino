var menu = document.querySelector('.nav__menu');
var cross = document.querySelector('.nav__cross');
var navList = document.querySelector('.nav__list');

document.querySelector('.nav').addEventListener('click', function(event) {
  var target = event.target;

  if (target == menu) {
    toggleMenu();
  }

  if (target == cross || target.classList.contains('nav__item')
                      || target.parentElement.classList.contains('nav__item')) {
    toggleMenu();
  }
});

function toggleMenu() {
  navList.classList.toggle('nav__list--closed');
}
