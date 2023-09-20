const student = {
    major : "컴퓨터공학부",
    idNum : 20209501,
    name : '배성윤'
}

for(key in student) {
    document.write(`${key} : ${student[key]}<br>`);
}