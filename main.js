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

// Toggle correct slides
function showSlides(n) {
  var i;

  // All of the slides in the document
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // If slide # is greater than 
  if (n > slides.length) {slideIndex = 1}

  // If slide # is less than 
  if (n < 1) {slideIndex = slides.length}

  // Hide each of the slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Replace each of the dots with the class "active" with ""
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Set the current slide to display as a block element
  slides[slideIndex-1].style.display = "block";

  // Set the current slide's respective dot to the "active" class
  dots[slideIndex-1].className += " active";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}