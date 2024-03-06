function gcd(a,b) {
    while(b !== 0) {
        let temp = a % b; // 'a'를 'b'로 나눈 나머지를 'temp' 변수에 저장
        a = b; // 'a'를 'b'로 업데이트
        b = temp; // 'b'를 'temp'로 업데이트
    }
    return a; // 최대 공약수를 반환
}

// HTML 문서에서 'number1', 'number2', 'calc', 'result' 요소를 가져오기
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const bttn = document.querySelector("#calc");
const result = document.querySelector("#result");

// 'calc' 버튼에 클릭 이벤트 리스너를 추가
bttn.addEventListener('click', function() {
    // 'number1'과 'number2' 입력 요소에서 값을 가져와 정수로 변환
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);

    // 'gcd' 함수를 사용하여 'num1'과 'num2'의 최대 공약수를 계산
    const gCD = gcd(num1, num2);
    result.textContent = `${gCD}`
})

