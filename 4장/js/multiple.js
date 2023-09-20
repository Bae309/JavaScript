function multiple(a,b=5,c=10) {
    return a * b + c;
}

document.write(`<h1>${multiple(5,10,20)}</h1>`);
document.write(`<h1>${multiple(5,10)}</h1>`); 
document.write(`<h1>${multiple(10)}</h1>`);
