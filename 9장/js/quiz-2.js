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


// 기존 클래스를 확장하여(상속받아) 새로운 클래스 선언
class Cat extends Pet {
    constructor(name,type,color) {
        super(name, color); // 상위 클래스의 프로퍼티 재사용
        this.type = type; // 새로운 프로퍼티 정의
    }

    // 새로운 매서드 정의
    catinfo() {
        document.write(`<h1>이름 : ${this.name}, 품종 : ${this.type}, 색깔 : ${this.color}</h1>`);
    }
}

// 객체 생성
const pet2 = new Cat("보리", "러시안블루", "회색");
pet2.catinfo();
pet2.doing();