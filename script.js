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

document.addEventListener("DOMContentLoaded", function () {
    // Toggle dropdown menu
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Fungsi search
    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const query = searchBar.value.toLowerCase();
            const sections = document.querySelectorAll("section");

            sections.forEach(section => {
                if (section.textContent.toLowerCase().includes(query)) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    });
});
