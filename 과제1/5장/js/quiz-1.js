const viewBtn = document.querySelector("#view");

// hidden 클래스를 가진 모든 요소 선택
const hidden = document.querySelectorAll(".hidden");

// 함수에 직접 작성하여 콜백 함수 실행
viewBtn.addEventListener("click", () => {
  // hidden 클래스를 가진 요소들에 대해 토글 적용
  hidden.forEach((element) => {
    element.classList.toggle("hidden");
  });
});