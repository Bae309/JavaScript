// 버튼의 요소 가져오기
const btn = document.querySelector("button"); // 문서에서 태그가 버튼인 것을 가지고 와서 btn 변수에 넣어라는 뜻

/*
// display() 함수 정의
function display() {
    alert("버튼을 클릭했습니다.");
}

// 버튼을 클릭하면 diaplay()함수 실행
btn.addEventListener("click", display);
*/

// 함수에 직접 작성하여 콜백 함수 실행
btn.addEventListener("click",() => {
    alert("버튼 클릭!");
});