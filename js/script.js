"use strict";

var activeSideItem = Array.from(document.querySelectorAll(".side__nav-items"));
var sections = Array.from(document.querySelectorAll(".section")); // console.log(sections);
// console.log(activeSideItem);
// function change(){

activeSideItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var target = e.target;
    var currentPos = document.querySelector(".is-active"); // console.log(e);
    // console.log(currentPos);

    if (target != currentPos) {
      target.classList.add("is-active");
      currentPos.classList.remove("is-active");
    } else {
      return;
    } // sections.forEach(item =>{
    //     console.log(item)
    // })

  });
}); // }
// change();

window.addEventListener('wheel', function (e) {
  e.preventDefault();
  var currentPos = document.querySelector(".is-active");
  var delta = e.deltaY || e.detail || e.wheelDelta;
  console.log(currentPos);

  if (delta >= 100) {
    /* adaugat conditie || daca nu e primul sau ultimul elem*/
    var nextElem = currentPos.nextElementSibling;
    nextElem.classList.add("is-active");
    currentPos.classList.remove("is-active");
  } else {
    /* adaugat conditie || daca nu e primul sau ultimul elem sau de facut ca din ultimul elem sa fie scroll la prim*/
    var prevElem = currentPos.previousElementSibling;
    prevElem.classList.add("is-active");
    currentPos.classList.remove("is-active");
  }
});