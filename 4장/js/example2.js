// 화살표 함수 정의
let sum = (a, b) => a + b;

// 두 정수 입력 받기
let num1 = parseInt(prompt("첫번째 숫자를 입력하세요"));
let num2 = parseInt(prompt("두번째 숫자를 입력하세요"));

// 결과 화면에 출력하기
document.write(`첫번째 숫자와 두번째 숫자의 합은 ${sum(num1,num2)}입니다.`);