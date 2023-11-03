const imgBox = document.querySelector("#container > img");

container.addEventListener("mouseover", function() {
    imgBox.src = "images/pic-6.jpg";
});

container.addEventListener("mouseout", function() {
    imgBox.src = "images/pic-1.jpg";
});