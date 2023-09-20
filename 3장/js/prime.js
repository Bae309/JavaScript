// 소수 판단 스크립트 
// 정수를 입력 받는다
// 소수는 1을 제외한 자기 자신으로 나누어 떨어지는 수
// 나누어 떨어진다 = 나머지가 0이다.

/*const num = prompt("정수를 입력하시오") // 정수입력

let isPrime = true; // 소수 여부를 판단하는 변수

if (num == 1 || num == 0) { // 1과 0은 소수가 아니므로 false로 선언
    isPrime = false;
}

else { 
    for (let i = 2; i < num; i++) { 
        if(num % i === 0){  // num이 자기자신의 숫자로만 나누어지는 경우 false로 처리
            isPrime = false;
            break;
        }
        else // num이 자기자신의 숫자외의 숫자로도 나누어지는 경우 true로 그대로 처리
        {
        isPrime = true;
        }
    }
    
}

if(isPrime) { // num이 소수인 겅우 출력
    document.write(`${num}는 소수입니다.`);
}

else{ // num이 소수가 아닌 경우 출력
    document.write(`${num}는 소수가 아닙니다.`);
}*/

const num = prompt("정수를 입력하시오") // 정수입력

let i; 

if (num == 1 || num == 0) { // 1과 0은 소수가 아니므로 false로 선언
    isPrime = false;
}

else { 
    for (let i = 2; i < num; i++) { 
        if(num % i === 0){  // num이 자기자신의 숫자로만 나누어지는 경우 false로 처리
            isPrime = false;
            break;
        }
        else // num이 자기자신의 숫자외의 숫자로도 나누어지는 경우 true로 그대로 처리
        {
        isPrime = true;
        }
    }
    
}

if(isPrime) { // num이 소수인 겅우 출력
    document.write(`${num}는 소수입니다.`);
}

else{ // num이 소수가 아닌 경우 출력
    document.write(`${num}는 소수가 아닙니다.`);
}




