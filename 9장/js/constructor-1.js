// 생성자 함수 정의하기(만들기)
function Book(title, page, done = false) {
    this.title = title;
    this.page = page;
    this.done = done;

    // 매서드
    this.finish = function() {
        let str = '';
        this.done === false ? (str = '읽는 중') : (str = '완독');
        return str;
    }
}

// 생성자 함수를 사용하여 객체 만들기
// 3개의 인수를 가지고 객체 생성
const book1 = new Book("모던자바스크립트", 650, false);
const book2 = new Book("JAVA", 650, true);

document.write(`<h2> 생성자 함수로 객체 만들기 </h2>`);
document.write(`${book1.title} - ${book1.finish()}<br>`)
document.write(`${book2.title} - ${book2.finish()}<br>`)


// 클래스 만들기
class Book2{
    // constructor() 함수 안에 프로퍼티를 작성
    constructor(title, page, done = false) {
        this.title = title;
        this.page = page;
        this.done = done;
    }

    // constructor() 함수 밖에 메서드 작성
    // function 예약어 사용안함. ()만 작성
    finish() {
        let str = '';
        this.done === false ? (str = '읽는 중') : (str = '완독');
        return str;
    }
    
}

const book3 = new Book2("모던자바스크립트", 650, false);
const book4 = new Book2("JAVA", 650, true);

document.write(`<hr><h2> 클래스로 객체 만들기 </h2>`);
document.write(`${book3.title} - ${book3.finish()}<br>`)
document.write(`${book4.title} - ${book4.finish()}<br>`)