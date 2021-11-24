var menuButton = document.getElementById("menu");
var sidemenu = document.getElementById("side");
var isOpened = false;
var section = document.getElementById("sect")

console.log(menuButton.style.left);
console.log("st from nothing");

menuButton.addEventListener("click", () => {
    showMenu();
})

function showMenu()
{
  [sidemenu.style.left, section.style.marginLeft, isOpened] = [
    isOpened ? "-250px" : "0px",
    isOpened ? "0px" : "250px",
    !isOpened
  ];
}

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


var currentSlidePos = 1;
showSlideAt(currentSlidePos);

// Next/previous controls
function moveSlides(value) {
  const slides = document.getElementsByClassName("mySlides");
  const totalSlide = slides.length;
  if (totalSlide === 0) return;

  let newSlidePos = currentSlidePos + value;
  if (newSlidePos > totalSlide - 1) {
    newSlidePos = 0;
  } else if (newSlidePos < 0) {
    newSlidePos = totalSlide - 1;
  }

  currentSlidePos = newSlidePos;
   
  showSlideAt(newSlidePos);
}


// Thumbnail image controls
function showSlideAt(pos) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  Array.from(slides).forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].className = dots[index].className.replace(" active", "");
  })

  slides[pos].style.display = "block";
  dots[pos].className += " active";
}
