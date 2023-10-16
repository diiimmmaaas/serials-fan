document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".serialsFun-carousel");
  const prevButton = document.querySelector(".serialsFun-prev-button");
  const nextButton = document.querySelector(".serialsFun-next-button");

  let currentIndex = 0;
  const itemWidth = carousel.querySelector(".serialsFun-carousel-item").offsetWidth; // Ширина блока + расстояние между блоками

  console.log('itemWidth', itemWidth);

  function updateCarousel() {
    const offset = currentIndex * -itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  function showNext() {
    currentIndex = Math.min(currentIndex + 4, 11);
    updateCarousel();
  }

  function showPrev() {
    currentIndex = Math.max(currentIndex - 4, 0);
    updateCarousel();
  }

  prevButton.addEventListener("click", showPrev);
  nextButton.addEventListener("click", showNext);
});

var openModalBtnsWithClassName = document.getElementsByClassName("serialsFunOpenModalBtn");
var closeModalBtn = document.getElementById("serialsFunCloseModalBtn");
var modal = document.getElementById("serialsFunModal");


for (let i = 0; i < openModalBtnsWithClassName.length; i++) {
  const openModalBtn = openModalBtnsWithClassName[i]
  openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });
}

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
