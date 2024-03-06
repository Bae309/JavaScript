async function whatsYourFavorite() {
    let fav = "BackEnd";
    return fav;
}

async function displaySubject(subject) {
    return `Hello, ${subject}`;
}

whatsYourFavorite()
.then(displaySubject)
.then(console.log);