var hi = "hello"; //전역 변수

// function change() {
//     // 함수 안에서 전역변수 값 수정 가능
//     hi = "bye"; // 지역변수
// }

// console.log(hi);
// change();
// console.log(hi);

function change() {
    var hi = "bye"; // 지역변수. 이 함수에서만 사용가능(시험 유력)
}

console.log(hi);
change();
console.log(hi);
