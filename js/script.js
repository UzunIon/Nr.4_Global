"use strict";

var parrentSideNav = document.getElementsByClassName("side__nav-list");
var activeSideItem = Array.from(document.querySelectorAll(".side__nav-items"));
var sections = document.querySelectorAll(".section"); // console.log(sections)
// console.log(activeSideItem[0])
//  if( sections.includes.className( "Work")){
// console.log(sections[2])
//  }

var _loop = function _loop(i) {
  activeSideItem[i].addEventListener("click", function (event) {
    var currentNavPos = document.querySelector(".is-active");
    var currentContentPos = document.querySelector(".section-active");

    if (event.target == activeSideItem[i]) {
      event.target.classList.add("is-active");
      currentNavPos.classList.remove("is-active");
      sections[i].classList.add("section-active");
      currentContentPos.classList.remove("section-active");
      currentContentPos.classList.add("section-next");
    } else {
      return;
    }
  });
};

for (var i = 0; i < activeSideItem.length; i++) {
  _loop(i);
} // activeSideItem.forEach(function(item, index, arr)  {
//     // console.log(index)
//     // console.log(item, index, arr)
//     item.addEventListener( 'click', e =>{
//         let target = e.target;
//         let currentTarget = e.currentTarget;
//         let currentPos = document.querySelector(".is-active");
//         //  console.log(e.index)
//         // console.log(sections[1])
//         target.classList.add("is-active");
//         currentPos.classList.remove("is-active");
//         if( item.className = "is-active" && arr[1]){
//             sections[1].classList.add(".sections-active");
//         }else{
//             return;
//         }
//     });
// for( let i = 0; i < activeSideItem.length; i++ ){


window.addEventListener('wheel', function (e) {
  // e.preventDefault();
  var currentPos = document.querySelector(".is-active");
  var currentCont = document.querySelector(".section-active");
  var delta = e.deltaY || e.detail || e.wheelDelta;
  console.log(e);

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
    var prevElem = currentPos.previousElementSibling;
    var prevCont = currentCont.previousElementSibling;
    prevElem.classList.add("is-active");
    currentPos.classList.remove("is-active");
    prevCont.classList.add("section-active");
    currentCont.classList.remove("section-active");
  } else {
    return;
  }
}); // }
// document.querySelector(".wrapper").addEventListener('swiped', function(e) {
//     console.log(e.target); // element that was swiped
//     console.log(e.detail.dir); // swipe direction
//   });
// HAMMER for swipes
// const targetElement = document.getElementById('.wrapper'),
// mc = new Hammer(targetElement);
// mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
// mc.on('swipeup swipedown', function(e) {
// console.log(e)
// console.log(targetElement);
// });

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

  var currentY = e.touches[0].clientY;
  var diffY = initialY - currentY; // sliding vertically

  if (diffY > 0) {
    var nextElem = currentPos.nextElementSibling;
    var nextCont = currentCont.nextElementSibling;
    nextElem.classList.add("is-active");
    currentPos.classList.remove("is-active");
    nextCont.classList.add("section-active");
    currentCont.classList.remove("section-active");
  } else {
    var prevElem = currentPos.previousElementSibling;
    var prevCont = currentCont.previousElementSibling;
    prevElem.classList.add("is-active");
    currentPos.classList.remove("is-active");
    prevCont.classList.add("section-active");
    currentCont.classList.remove("section-active");
  }

  initialY = null;
  e.preventDefault();
}

;