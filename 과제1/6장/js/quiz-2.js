// 버튼과 네비게이션 요소 가져오기
const bttn = document.getElementById("bttn");
const nav = document.getElementById("nav");

// 버튼 클릭 이벤트 처리
bttn.addEventListener("click", function() {
    // 네비게이션 요소에 'active' 클래스 추가/제거하여 토글
    nav.classList.toggle("active");
    bttn.classList.toggle("active");
});