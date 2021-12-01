var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

if(sessionStorage.getItem("orderList")) {
    console.log("existed");
}else {
    console.log("not existed");
    const order = [];
    sessionStorage.setItem("orderList", JSON.stringify(order));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//ITEM SELECTOR
const item_00 = document.getElementById('item_00');
const item_01 = document.getElementById('item_01');
const item_02 = document.getElementById('item_02');
const item_03 = document.getElementById('item_03');
const item_04 = document.getElementById('item_04');
const item_05 = document.getElementById('item_05');

item_00.addEventListener("click", () => {
    sessionStorage.setItem("itemDetail", "item_00");
})
item_01.addEventListener("click", () => {
    sessionStorage.setItem("itemDetail", "item_01");
})
item_02.addEventListener("click", () => {
    sessionStorage.setItem("itemDetail", "item_02");
})
item_03.addEventListener("click", () => {
    sessionStorage.setItem("itemDetail", "item_03");
})
item_04.addEventListener("click", () => {
    sessionStorage.setItem("itemDetail", "item_04");
})
item_05.addEventListener("click", () => {
    sessionStorage.setItem("itemDetail", "item_05");
})