const toggleButton = document.getElementById("toggle-darkmode");
const darkModeIcon = document.getElementById("darkmode-icon");

const lightIcon = "img/dark.png"; // Ganti nama filenya
const darkIcon = "img/white.png"; // Ganti nama filenya

// Cek dark mode di localStorage (biar tetap kepake setelah refresh)
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeIcon.src = darkIcon;
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.src = darkIcon;
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkModeIcon.src = lightIcon;
        localStorage.setItem("darkMode", "disabled");
    }
});
