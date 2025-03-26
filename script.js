document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }
    updateDarkModeIcon();

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        updateDarkModeIcon();
    }

    function updateDarkModeIcon() {
        const isDarkMode = body.classList.contains("dark-mode");
        if (darkModeToggle) {
            darkModeToggle.src = isDarkMode ? "img/dark.png" : "img/white.png";
        }
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    } else {
        console.error("Dark mode button not found!");
    }

    // Sidebar Menu (Tombol Titik Tiga)
    const menuButton = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    function closeSidebar(event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", function (event) {
            event.stopPropagation();
            sidebar.classList.toggle("active");
        });
    } else {
        console.error("Menu button not found!");
    }

    document.addEventListener("click", closeSidebar);

    // GIF Icon Navigation
    const gifIcon = document.getElementById("gif-icon");
    if (gifIcon) {
        gifIcon.addEventListener("click", function () {
            window.location.href = "hype/index.html"; // Ganti dengan halaman yang lo mau
        });
    } else {
        console.error("GIF icon not found!");
    }
});
