const menu = document.querySelector("#bttn");
const nav = document.querySelector("#nav");

menu.addEventListener('click', function() {
    
    const menuVisible = nav.style.display !== "none";


    if(menuVisible) {
        nav.style.diplay = "none";
    }

    else {
        nav.style.display = "block";
    }

});

