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
