// 클래스 상성
class Pet {
    // 프로퍼티 생성.
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // 매서드
    doing() {
        document.write(`<h1>${this.color} ${this.name}가 달린다</h1>`);
    }
}

// 객체 생성
const pet1 = new Pet("바둑이", "하얀");
pet1.doing();
