const open = document.querySelector("#open"); // 아이디가 open인 버튼 선택
const modalBox = document.querySelector("#modal-box"); // 아이디가 modal-box인 버튼 선택
const openmodal = document.querySelector("#open"); // 아이디가 open인 항목 선택
const close = document.querySelector("#close"); // 아이디가 close인 버튼 선택

open.addEventListener("click", () => {  // 아이디가 open인 '프로필 버튼' 버튼을 클릭시 모달박스가 나오게 하는 함수
    modalBox.classList.toggle("active");
});

close.addEventListener("click", () => { // 아이디가 close인 'x' 버튼을 클릭시 모달박스가 사라지게 하는 함수
    modalBox.classList.toggle("active");
});

let modalTimer; // 타이머 변수

// 5초 후에 모달박스를 삭제
setTimeout(() => {
    modalBox.classList.remove("active");
  }, 5000);

if(modalTimer) { // 이미 타이머가 실행중인지 확인하고 중지
    clearTimeout(modalTimer);
}
