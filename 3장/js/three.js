let num = parseInt(prompt("정수를 입력하시요 : "));

if (num % 3 == 0) {
    alert(num + "은(는) 3의 배수입니다.");
    document.write(num + "은(는) 3의 배수입니다.");
}

else if (num % 3 != 0) {
    alert(num + "은(는) 3의 배수가 아닙니다.");
    document.write(num + "은(는) 3의 배수가 아닙니다.");
}

else {
    alert("올바른 정수를 입력하시요!");
    document.write("올바른 정수를 입력하시요!");
}