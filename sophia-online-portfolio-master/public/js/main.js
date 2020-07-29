//picture slideshow
var slideIndex = 1;
showSlide(slideIndex);

function handleArrow(n) {
  showSlide(slideIndex += n);
}

function handleCircle(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("circle");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-white";
}


//navigation tab transition
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
