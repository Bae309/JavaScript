fetch('student-2.json') // json 파일 읽어오기
.then(response => response.json()) // json 파일을 객체로 반환
.then(json => { // 객체 출력
    let output = '';
    json.forEach(student => {
        output += `
        <h2>${student.name}</h2>
        <ul>
            <li>전공 : ${student.major}</li>
            <li>학년 : ${student.grade}</li>
        </ul>
        <hr>
        `;
    });
    document.querySelector("#result").innerHTML = output;
})
.catch(error => consdole.log(error)); // 오류 발생시 메시지 출력