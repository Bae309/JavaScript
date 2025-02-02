// 배열 요소에 같은 함수 적용하기 - map()
// 각 배열 요소에 똑같은 함수를 실행한 후 
// 그 결과를 새로운 배열로 변환하는 메서드
let numbers = [1,2,3,4,5]
let newNumber = numbers.map(number => number * 2)
console.log("newNumber : ", newNumber); 

// 기존 요소 값애 3을 곱하고 , 인덱스를 더한 값을 새로운 배열에 저장.
let numbers2 = [1,2,3,4,5]
let newNumber2 = numbers2.map((number,index) => (number*3) + index)
console.log("newNumber2 : ", newNumber2);

// 특정 조건으로 골라내는 filter() 매서드
// 배열 요소의 값이나 인덱스, 배열을 받아서 함수를 실행하고,
// return 문으로 반환한 값을 새로운 배열에 추가

// 점수배열에서 80점 이상만 고랄서 highscore 배열을 만들기
let scores = [90, 35, 77, 92, 45]
highScore = scores.filter(score => score >= 80)
console.log("highScore : ", highScore);

// 80점 이상인 값과 인덱스를 함께 찾고 싶을때 
let highScore2 = scores.filter((score, index) =>  {
    if(score >= 80) {
        console.log(`index : ${index}, score : ${score} `)
        return score;
    }
});

// 값 하나로 누적하기 reduce()메서드
let numbers3 = [1,2,3,4,5]
let result = numbers3.reduce((total, current) => total + current, 0) // 0은 total의 첫번째 값
/*
    total = 0
    current = 1~5
    total = total + current
*/

console.log("result : ", result);