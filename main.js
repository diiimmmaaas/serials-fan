const carousel = document.querySelector('.serialsFun-carousel');
const items = document.querySelectorAll('.serialsFun-carousel-item');
const prevButton = document.querySelector('.serialsFun-prev-button');
const nextButton = document.querySelector('.serialsFun-next-button');
let currentIndex = 0;
let itemsPerPage = 4;
let itemWidth = items[0].offsetWidth + 40;

function updateCarousel() {
  if (window.innerWidth <= 900 && window.innerWidth > 520) {
    itemsPerPage = 3
    itemWidth = items[0].offsetWidth;
  } else if (window.innerWidth <= 520) {
    itemsPerPage = 2;
    itemWidth = items[0].offsetWidth;
  }  else {
    itemsPerPage = 4;
    itemWidth = items[0].offsetWidth;
  }
  showItem(currentIndex);
}
updateCarousel();


function showItem(index) {
  const translateX = `-${index * itemsPerPage * itemWidth}px`;
  carousel.style.transform = `translateX(${translateX})`;
}

function nextItem() {
  if (currentIndex + 1 < items.length/itemsPerPage) {
    currentIndex += 1;
    showItem(currentIndex);
    console.log('itemWidth', itemWidth);
    console.log('currentIndex', currentIndex);
    console.log('itemsPerPage', itemsPerPage);
    console.log('items.length', items.length);
  }

}

function prevItem() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    showItem(currentIndex);
  }
}

nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

window.addEventListener('resize', updateCarousel);

showItem(currentIndex);

var openModalBtnsWithClassName = document.getElementsByClassName("for-big-screen");
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

var openModalBtnsWithClassNameSmall = document.getElementsByClassName("for-small-screen");
var closeModalBtnSmall = document.getElementById("serialsFunCloseModalBtnSmall");
var modalSmall = document.getElementById("serialsFunModalSmall");

console.log('openModalBtnsWithClassNameSmall', openModalBtnsWithClassNameSmall);
console.log('closeModalBtnSmall', closeModalBtnSmall);
console.log('modalSmall', modalSmall);

for (let i = 0; i < openModalBtnsWithClassNameSmall.length; i++) {
  const openModalBtnSmall = openModalBtnsWithClassNameSmall[i]
  openModalBtnSmall.addEventListener("click", function() {
    modalSmall.style.display = "block";
  });
}

closeModalBtnSmall.addEventListener("click", function() {
  modalSmall.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modalSmall) {
    modalSmall.style.display = "none";
  }
});

