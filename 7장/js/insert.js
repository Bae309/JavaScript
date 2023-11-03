// 버튼 가져오기
const orderBtn = document.querySelector("button");

// 버튼을 클릭하면....
orderBtn.addEventListener("click", () => {
    // 새로운 p 요소 만들기
    let newP = document.createElement("p");
    // 텍스트 만들기 - title의 텍스트 부분만 가지고 와서 텍스트 노드로 생성
    let textNode = document.createTextNode("안녕하세요?");
    // 텍스트노드를 p요소에 추가
    newP.appendChild(textNode);

    // javascript를 기준으로
    let basicNode = document.querySelectorAll("p")[2];
    
    // 앞에 추가
    document.body.insertBefore(newP,basicNode);
    
}, {once : true}); // click 이벤트가 여러번 실행해도 이벤트 리스너는 한번만 실행