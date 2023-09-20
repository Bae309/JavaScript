const num = [1,3,4,6,5,11,18,20,17];

//반복문 for로 배열에서 10보다 큰 값 출력하기
for (i=0;i<num.length;i++) {
    if (num[i] > 10){
        document.write(num[i] + ` `);
        
    }
    
}
document.write(`<br>`)
document.write(`<hr>`)


// 반복문 forEach로 배열에서 10보다 큰 값 출력하기

num.forEach(function(number) {
    if (number > 10){
        document.write(`${number} `);
    }
});
document.write(`<br>`)
document.write(`<hr>`)


// 반복문 for...of로 배열에서 10보다 큰 값 출력하기

for(key of num) {
    if(key > 10) {
        document.write(`${[key]} `);
    }
   
}