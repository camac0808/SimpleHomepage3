<<<<<<< HEAD
/* =================================================================
                          자동으로 슬라이드쇼 
================================================================*/

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelectorAll("#slides img");
const slidesContainer = document.getElementById("slides");
let current = 0;
let slideWidth = 1200;

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

// fade 효과 주기
// function showSlide() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }
//   slides[current].style.opacity = 1;
// }


// 슬라이드 가운데로 위치
function setSlide() {
  slidesContainer.style.transform = `translateX(-${slideWidth * 3}px)`;
}
setSlide();

// 양옆에 복사본 만들기
function makeClone() {
  for (let i = 0; i < slides.length; i++) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slidesContainer.appendChild(cloneSlide);
  }
  for (let i = slides.length - 1; i >= 0; i--) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slidesContainer.prepend(cloneSlide);
  }
  setTimeout(() => {
    slidesContainer.classList.add("animated");
  }, 100);
}
makeClone();

// slide 이동
function moveSlide(num) {
  slidesContainer.style.left = `${-num * slideWidth}px`;
  current = num;
  console.log(current, slides.length)
  if (current === slides.length || current === -slides.length) {
    setTimeout(() => {
      slidesContainer.classList.remove('animated');
      slidesContainer.style.left = '0px';
      current = 0;
    }, 500);
    setTimeout(() => {
      slidesContainer.classList.add('animated');
    }, 600);
  }
}

function prevSlide() {
  moveSlide(current - 1);
}

function nextSlide() {
  moveSlide(current + 1);
}

// setInterval(() => {
//   current += 1;
//   if (current <= slides.length - 1) {
//     showSlide(current);
//   }
//   if (current === slides.length - 1) {
//     setTimeout(() => {
//       slidesContainer.style.transition = "0s";
//       slidesContainer.style.transform = "translate3d(0px, 0px, 0px)";
//       current = 0;
//     }, 1001);
//   }
// }, 2000);

// 2초마다 슬라이드 자동 넘김
// setInterval(() => {
//   if (current < slides.length - 1) {
//     nextSlide();
//   }
//   if (current === 0) {
//     current += 1;
//   }
// }, 2000);
=======
let slides = document.querySelectorAll("#slides img");
let slideContainer = document.querySelector("#slides");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let current = 0;

prev.addEventListener("click", prevSlide); // 이전 이미지 표시
next.addEventListener("click", nextSlide); // 다음 이미지 표시

// 현재 이미지 표시 함수
function showSlides(current) {
  for (let i = 0; i < slides.length; i++) {
    slideContainer.style.transition = "0.5s ease-out";
    slideContainer.style.transform = `translateX(-${1200 * current}px)`;
  }
}

// 이전 이미지 표시 함수
function prevSlide() {
  if (current > 0) {
    current -= 1;
  } else {
    // 첫번째 위치이므로 (current=0) 마지막으로 보내야된다
    current = slides.length - 1;
  }
  showSlides(current);
}

// 다음 이미지 표시 함수
function nextSlide() {
  if (current < slides.length - 1) {
    current += 1;
  } else {
    // 마지막 위치이므로 (current=2) 처음으로 보내야한다
    current = 0;
  }
  showSlides(current);
}
console.log(prev, next, slides);

setInterval(function () {
  nextSlide();
  if (current === slides.length - 1) {
    setTimeout(function () {
      slideContainer.style.transition = "0s";
      slideContainer.style.transform = "translateX(0px)";
    }, 200);
  }
}, 1000);
/* =================================================================
                          자동으로 슬라이드쇼 
================================================================*/
>>>>>>> 9a67b9a6b9cdc8e26eb9cf4637e314df0f8eadce
