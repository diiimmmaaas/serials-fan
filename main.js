const carousel = document.querySelector(".serialsFun-carousel");
const prevButton = document.querySelector(".serialsFun-prev-button");
const nextButton = document.querySelector(".serialsFun-next-button");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 4;
    moveCarousel();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex + 4 < carousel.children.length) {
    currentIndex += 4;
    moveCarousel();
  }
});

function moveCarousel() {
  carousel.style.transform = translateX(-${currentIndex * 160}px); // 160px = ширина изображения + отступ
}

moveCarousel();
