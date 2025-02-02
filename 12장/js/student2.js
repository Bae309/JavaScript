let xhr = new XMLHttpRequest();
xhr.open("GET","student-2.json");
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status == 200) {
        let student = JSON.parse(xhr.responseText);
        renderHTML(student);
    }
};

function renderHTML(contents) {
    let output = "";
    for(let content of contents) {
        output += `
            <h2>${content.name}</h2>
            <ul>
                <li>전공 : ${content.major}</li>
                <li>전공 : ${content.grade}</li>
            </ul>
            <hr>
        `;
    }
    document.querySelector("#result").innerHTML = output;
}