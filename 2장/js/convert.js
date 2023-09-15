// 섭씨 온도 = (화씨 온도 - 32) / 1.8
// 프로포트로 회씨 온도 입력 받는다.
// 섭씨 온도 계산하고, 출력한다.
// 출력릉  alert() 또는 Doucument.write()중 하나 선택
// 화씨 온도 oo도는 섭씨 온도 oo도입니다.

// 섭씨 : cel  화씨 : fah

//<내 풀이>
/*let fah = prompt("화씨 온도 입력 : ");

function change() {
    let cel = ((fah - 32) / 1.8).toFixed(1);
}

change();
*/

//<풀이>
// 1. 화씨 온도 입력 받기 - 실수형으로 변환
let fah = parseFloat(prompt("화씨 온도를 입력하시오 : "));

// 2. 섭씨 온도 계산하기 
let cel = ((fah - 32) / 1.8).toFixed(1);

// 3. 출력하기
alert("화씨" + fah + "도는 섭씨 " + cel + "도 입니다.");
document.write("화씨 " + fah + "도는 섭씨 " + cel + " 도 입니다.");