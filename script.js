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

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.getElementById("sidebar");

    // Buka sidebar
    menuBtn.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    // Tutup sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Klik di luar sidebar buat nutup
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menuDropdown = document.querySelector(".menu-dropdown");

    // Toggle menu pas diklik
    menuBtn.addEventListener("click", function () {
        menuDropdown.classList.toggle("active");
    });

    // Klik di luar buat nutup menu
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove("active");
        }
    });
});
