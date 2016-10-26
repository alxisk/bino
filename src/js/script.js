document.addEventListener('DOMContentLoaded', ready);

function ready() {

var menu = document.querySelector('.nav__menu');
var cross = document.querySelector('.nav__cross');
var navList = document.querySelector('.nav__list');
var workExample = document.querySelector('.work-example');
var workExampleWrap = document.querySelector('.recent-works__examples');


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

document.querySelector('.recent-works__sort').onclick = function() {
  var target = event.target;

  if (target.classList.contains('recent-works__sort-item')) {
    [].forEach.call(target.parentElement.children, function(item) {
      if (item.classList.contains('recent-works__sort-item--active')) {
        item.classList.remove('recent-works__sort-item--active');
      }
    });

    target.classList.toggle('recent-works__sort-item--active');
  }
}

setWorkExampleHeight();
window.addEventListener('resize', setWorkExampleHeight);

function toggleMenu() {
  navList.classList.toggle('nav__list--closed');
}

function setWorkExampleHeight() {
  if (window.innerWidth < 768) {
    workExampleWrap.style.height = workExample.clientWidth * 4 + 'px';
    return;
  }

  workExampleWrap.style.height = workExample.clientWidth * 2 + 'px';
}

}
