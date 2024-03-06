let xhr = new XMLHttpRequest();
xhr.open("GET","product.json");
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status == 200) {
        let product = JSON.parse(xhr.responseText);
        document.querySelector("#result").innerHTML = `
        <ul>
            <li>상품명 : ${product.data.name} </li>
            <li>생산년도 : ${product.data.year} </li>
        </ul>
        `;
    };
};