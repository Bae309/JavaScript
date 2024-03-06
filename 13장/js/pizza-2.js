const pizza = () => {
    return new Promise((resolve, reject) => {
        resolve("피자를 주문합니다.");
    });
};

// 소비코드
const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("피자 도우 준비.");
        }, 3000);
        
    });
};

const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("피자 굽는 중.");
        }, 3000);
        
    });
};

const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("피자 굽기 완료.");
        }, 3000);
        
    });
};

/*
pizza()
    .then((result) => step1(result))
    .then((result) => step2(result))
    .then((result) => step3(result))
    .then((result) => console.log(result))
    .then((result) => console.log('피자가 준비되었습니다.🍕'));
    */

pizza()
    .then(step1)
    .then(step2)
    .then(step3)
    .then(console.log)
    .then((result) => console.log('피자가 준비되었습니다.🍕'));