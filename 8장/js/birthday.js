// 오늘 날짜 가져오기
const today = new Date();

// 생일 날짜 가져오기
const birthday = new Date("2000-03-09");

// 결과 가져오기
result = document.querySelector("#result");

// 생일로부터 오늘까지 지난 시간 계산
let passedTime = today.getTime() - birthday.getTime();

// 밀리초를 일로 계산
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

// 결과 나타내기
result.innerText = passedDay;