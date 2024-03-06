function whatsYourFavorite() {
    let fav = "Javascript";

    // resolve 일때 Javascript를 반환
    return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
    // resolve일때 whatsYourFavorite() 함수의 결과를 받아서 Hello와 함께 프로미스를 반환

    return new Promise((resolve, reject) => resolve(`Hello ${subject}`)); // 뒷부분이 'javascript'
}

whatsYourFavorite()
.then(response => displaySubject(response))
.then(result => console.log(result));