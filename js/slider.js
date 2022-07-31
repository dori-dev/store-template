let slideIndex = 1;

function autoSlider() {
  slideIndex += 1;
  if (slideIndex > 3) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex, false);
}

function setSlide(input, index, call) {
  if (call) {
    clearInterval($sliderInterval);
    $sliderInterval = setInterval(autoSlider, 5000);
  }
  slideIndex = index;
  let item = document.getElementById(input);
  let slides = [...document.querySelector(".slider .slides").children];
  slides.forEach((element) => {
    element.classList.remove("active");
  });
  item.classList.add("active");
}

$sliderInterval = setInterval(autoSlider, 5000);
