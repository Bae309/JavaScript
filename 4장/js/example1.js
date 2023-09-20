// 두수를 입력받아 곱한 결과를 리턴하여 화면에 출력하는 함수

function calcMul(num1, num2) {
    let mul = num1 * num2;

    return mul;
}

let num1 = parseInt(prompt("첫번째 정수 입력 : "));
let num2 = parseInt(prompt("두번째 정수 입력 : "));


document.write(`<h1> ${num1}과 ${num2}의 곱은 ${calcMul(num1, num2)}입니다.</h1>`);