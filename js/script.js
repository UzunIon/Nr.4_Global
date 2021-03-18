"use strict";

var parrentSideNav = document.getElementsByClassName("side__nav-list");
var activeSideItem = Array.from(document.querySelectorAll(".side__nav-items"));
var sections = document.querySelectorAll(".section");

var _loop = function _loop(i) {
  activeSideItem[i].addEventListener("click", function (event) {
    var currentNavPos = document.querySelector(".is-active");
    var currentContentPos = document.querySelector(".section-active");

    if (event.target == activeSideItem[i]) {
      event.target.classList.add("is-active");
      currentNavPos.classList.remove("is-active");
      sections[i].classList.add("section-active");
      currentContentPos.classList.remove("section-active"); // currentContentPos.classList.add("section-next")
    } else {
      return;
    }
  });
};

for (var i = 0; i < activeSideItem.length; i++) {
  _loop(i);
} // for( let i = 0; i < activeSideItem.length; i++ ){


window.addEventListener('wheel', function (e) {
  // e.preventDefault();
  var currentPos = document.querySelector(".is-active");
  var currentCont = document.querySelector(".section-active");
  var delta = e.deltaY || e.detail || e.wheelDelta;
  console.log(e);
  setTimeout(function () {
    if (delta >= 100) {
      /* adaugat conditie || daca nu e primul sau ultimul elem*/
      var nextElem = currentPos.nextElementSibling;
      var nextCont = currentCont.nextElementSibling;
      nextElem.classList.add("is-active");
      currentPos.classList.remove("is-active");
      nextCont.classList.add("section-active");
      currentCont.classList.remove("section-active");
    } else if (delta >= -100) {
      /* adaugat conditie || daca nu e primul sau ultimul elem sau de facut ca din ultimul elem sa fie scroll la prim*/
      var _prevElem = currentPos.previousElementSibling;
      var _prevCont = currentCont.previousElementSibling;

      _prevElem.classList.add("is-active");

      currentPos.classList.remove("is-active");

      _prevCont.classList.add("section-active");

      currentCont.classList.remove("section-active");
    } else if (prevElem == null || prevCont == null) {
      return;
    } else {
      return;
    }
  }, 400);
}); // }

window.addEventListener("touchstart", startTouch, false);
window.addEventListener("touchmove", moveTouch, false); // Swipe Up / Down / Left / Right

var initialY = null;

function startTouch(e) {
  initialY = e.touches[0].clientY;
}

;

function moveTouch(e) {
  var currentPos = document.querySelector(".is-active");
  var currentCont = document.querySelector(".section-active");

  if (initialY === null) {
    return;
  }

  var currentY = e.touches[0].clientY; // console.log(clientY)

  var diffY = initialY - currentY; // console.log(diffY)
  // sliding vertically

  setTimeout(function () {
    if (diffY > 0) {
      var nextElem = currentPos.nextElementSibling;
      var nextCont = currentCont.nextElementSibling;
      nextElem.classList.add("is-active");
      currentPos.classList.remove("is-active");
      nextCont.classList.add("section-active");
      currentCont.classList.remove("section-active");
    } else {
      var _prevElem2 = currentPos.previousElementSibling;
      var _prevCont2 = currentCont.previousElementSibling;

      _prevElem2.classList.add("is-active");

      currentPos.classList.remove("is-active");

      _prevCont2.classList.add("section-active");

      currentCont.classList.remove("section-active");
    }
  }, 500);
  initialY = null; // e.preventDefault();
}

; //   SLIDER

var sliderBtnPrev = document.querySelector(".slider__prev");
var sliderBtnNext = document.querySelector(".slider__next");
var sliderItems = document.querySelectorAll(".slider__item");
var sliderLenghts = sliderItems.length; // let slideritem = document.querySelectorAll(".works__slider-item");
// let curItem = document.querySelector(".center__item");

function ShowPrevItem() {
  sliderItems.forEach(function (item, i) {
    item[i].classList.add("center__item");
    item[i].classList.add("left__item");
    item[i].classList.add("right__item");
    item[i].classList.remove("center__item");
    item[i].classList.remove("left__item");
    item[i].classList.remove("right__item");
    console.log(item);
  });
} // let count = 0
// function ShowPrevItem() {
//   sliderItems[count].classList.remove("center__item");
//   // sliderItems[count].classList.remove("left__item");
//   // sliderItems[count].classList.remove("right__item");
//   if(count > 0) {
//     count--;
//   } else {
//     count = sliderLenghts - 1;
//   }
//   // sliderItems[count].classList.add("right__item");
//   sliderItems[count].classList.add("center__item");
//   // sliderItems[count].classList.add("left__item");
//   // console.log(count)
// }
// function ShowNextItem() {
//   sliderItems[count].classList.add("center__item");
//   // sliderItems[count].classList.add("left__item");
//   // sliderItems[count].classList.add("right__item");
//   if(count < sliderLenghts - 1) {
//     count++;
//   } else {
//     count = 0;
//   }
//   sliderItems[count].classList.remove("center__item");
//   // sliderItems[count].classList.remove("left__item");
//   // sliderItems[count].classList.remove("right__item");
//   // console.log(count)
// }


sliderBtnPrev.addEventListener('click', ShowPrevItem); // sliderBtnNext.addEventListener( 'click', ShowNextItem );
//  BURGER

var BurgerBtn = document.querySelector(".header__burger-btn");
var wrapp = document.querySelector(".wrapper");
var headerNav = document.querySelector(".header__nav");
var headerItems = document.querySelectorAll(".header__nav-items");

function OpenBurger() {
  wrapp.classList.add("open");
  headerNav.style.visibility = "visible";
}

function OpenPages() {
  var _loop2 = function _loop2(_i) {
    headerItems[_i].addEventListener('click', function () {
      var currentContentPos = document.querySelector(".section-active");
      currentContentPos.classList.remove("section-active");

      sections[_i].classList.add("section-active");
    });
  };

  for (var _i = 0; _i < headerItems.length; _i++) {
    _loop2(_i);
  }

  wrapp.classList.remove("open");
  headerNav.style.visibility = "hidden";
}

BurgerBtn.addEventListener('click', OpenBurger);
headerItems.forEach(function (item) {
  item.addEventListener('click', OpenPages);
});