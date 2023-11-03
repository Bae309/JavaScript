// 리스트를 삭제하면 해당 리스트 내용 삭제하기
// 모든 span 함목 가져오기
const buttons = document.querySelectorAll("p>span");

for(let button of buttons) {
    button.addEventListener("click", function() {
        // 해당항목을 클릭했을 때 그 항목이 삭제됨
        // this.remove(this);
        // this : 이벤트가 발생한 노드를 가리킴(자기자신)
        // this를 쓰기 위해서는 꼭 화살표 함수가 아닌 익명 함수를 사용해야 한다.(정해진 규칙)
        // this를 이용해 화살표함수를 하면 최상위 함수를 가리키게 된다.

        // 부모노드에서 삭제하기
        this.parentNode.remove();
    })
}