document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("toggle-darkmode");
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
