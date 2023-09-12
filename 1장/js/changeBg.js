function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) +  ',' + random(255) + ')';
    doucument.body.style.backgroundColor = rndCol;
}

bgChange(); //함수 호출