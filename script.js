const toggleButton = document.getElementById("toggle-darkmode");
const darkModeIcon = document.getElementById("darkmode-icon");

const lightIcon = "img/dark.png"; // Ganti dengan nama file mode terang
const darkIcon = "img/white.png"; // Ganti dengan nama file mode gelap

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Ganti icon
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.src = darkIcon;
    } else {
        darkModeIcon.src = lightIcon;
    }
});
