// 클래스 상성
class BookC {
    // 프로퍼티 생성.
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    // 매서드
    buy() {
        console.log(`${this.title}을 ${this.price}원에 구매했습니다`);
    }
}

// 객체 생성
const book1 = new BookC("Java", 25000);
book1.buy();

// 기존 클래스를 확장하여(상속받아) 새로운 클래스 선언
class TextBookC extends BookC {
    constructor(title,price,major) {
        super(title, price); // 상위 클래스의 프로퍼티 재사용
        this.major = major; // 새로운 프로퍼티 정의
    }

    // 새로운 매서드 정의
    buyTextbook() {
        console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
    }
}

// 객체 생성
const book2 = new TextBookC("자바스크립트", 23000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();