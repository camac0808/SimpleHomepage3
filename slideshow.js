let slides = document.querySelectorAll("#slides img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let current = 0;

showSlides(current); // 현재 이미지 표시
prev.addEventListener("click", prevSlide); // 이전 이미지 표시
next.addEventListener("click", nextSlide); // 다음 이미지 표시

// 현재 이미지 표시 함수
function showSlides(n) {
  for (let i=0; i<slides.length; i++) {
    slides[i].style.display = "none" // 모든 이미지를 숨김
  }
  slides[n].style.display = "block" // n번째 이미지만 보임
}

// 2초마다 슬라이드 자동으로 보여주기
function intervalSlides(n) {
  for (let i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  nextSlide(n);
  setTimeout(intervalSlides, 2000);
}
intervalSlides(current);

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
  if (current < slides.length-1) {
    current += 1;
  } else {
    // 마지막 위치이므로 (current=2) 처음으로 보내야한다 
    current = 0;
  }
  showSlides(current);
}
console.log(prev, next, slides)


/* =================================================================
                          자동으로 슬라이드쇼 
================================================================*/

