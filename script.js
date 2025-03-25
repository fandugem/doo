document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("toggle-darkmode");
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

document.addEventListener("mousemove", function(event) {
    let anime = document.getElementById("anime");
    let x = event.clientX;
    anime.style.left = x + "px";
});
