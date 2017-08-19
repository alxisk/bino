document.addEventListener('DOMContentLoaded', ready);

function ready() {

var menu = document.querySelector('.nav__menu');
var cross = document.querySelector('.nav__cross');
var navList = document.querySelector('.nav__list');
var workExample = document.querySelector('.work-example');
var workExampleWrap = document.querySelector('.recent-works__examples');
var switcher = document.querySelector('.switch');
var caseFeatures = document.querySelector('.case-study__items');
var offerWrap = document.querySelector('.pricing__offers');
var blogArticle = document.querySelector('.blog-post__article');
var blogPostWrap = document.querySelector('.blog__posts');


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

setElementWrapHeight(workExample, workExampleWrap);
setElementWrapHeight(blogArticle, blogPostWrap);

window.addEventListener('resize', function() {
  setElementWrapHeight(workExample, workExampleWrap);
  setElementWrapHeight(blogArticle, blogPostWrap);
});

switcher.addEventListener('click', function() {
  var target = event.target;

  if (target.classList.contains('switch__item--active')) return;

  [].forEach.call(this.children, function(item) {
    if (item.firstElementChild.checked == true) {
      item.classList.add('switch__item--active');
      caseFeatures.children[[].indexOf.call(item.parentElement.children, item)]
        .classList.add('case-study__feature-item--active');
    } else {
      item.classList.remove('switch__item--active');
      caseFeatures.children[[].indexOf.call(item.parentElement.children, item)]
        .classList.remove('case-study__feature-item--active');
    }
  })
});

offerWrap.addEventListener('click', function() {
  var target = event.target;

  if (target.classList.contains('arrow--left')) {
    moveSlider(this, 100);
  }

  if (target.classList.contains('arrow--right')) {
    moveSlider(this, -100);
  }
});

function toggleMenu() {
  navList.classList.toggle('nav__list--closed');
}

function setElementWrapHeight(element, elementWrap) {
  if (window.innerWidth < 768) {
    elementWrap.style.height = element.clientWidth * 4 + 'px';
    return;
  }

  elementWrap.style.height = element.clientWidth * 2 + 'px';
}

function moveSlider(parent, val) {
  var newMargin = (parseInt(parent.style.marginLeft) || 0) + val;
  parent.style.marginLeft = Math.max(Math.min(newMargin, 0), -200) + '%';
}

}
