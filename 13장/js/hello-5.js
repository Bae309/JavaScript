async function whatsYourFavorite() {
    let fav = "FrontEnd";
    return fav;
}

async function displaySubject(subject) {
    return `Hello ${subject}`;
}

async function init() {
    const response = await whatsYourFavorite();
    const result = await displaySubject(response);
    console.log(result);
}

init();