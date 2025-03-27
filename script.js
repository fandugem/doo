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
        if (darkModeToggle) {
            darkModeToggle.src = body.classList.contains("dark-mode") ? "img/dark.png" : "img/white.png";
        }
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    } else {
        console.error("Dark mode button not found!");
    }

    // Sidebar Menu
    const menuButton = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeButton = document.getElementById("close-btn");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    function closeSidebar(event) {
        if (!sidebar.contains(event.target) && event.target !== menuButton && event.target !== closeButton) {
            sidebar.classList.remove("active");
        }
    }

   document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.querySelector(".darkmode-btn");
    const body = document.body;

    // Cek kalau sebelumnya user udah aktifin dark mode
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle Dark Mode
    darkModeBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Simpan preferensi di localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.removeItem("darkMode");
        }
    });
});

    // GIF Icon Navigation
    const gifIcon = document.getElementById("gif-icon");
    if (gifIcon) {
        gifIcon.addEventListener("click", function () {
            window.location.href = "hype/index.html"; // Ganti dengan halaman tujuan
        });
    } else {
        console.error("GIF icon not found!");
    }
});
