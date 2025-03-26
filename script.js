document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    } else {
        console.error("Dark mode button not found!");
    }

    // Sidebar Menu
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menu-btn");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    function closeSidebar(event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", toggleSidebar);
    } else {
        console.error("Menu button not found!");
    }

    document.addEventListener("click", closeSidebar);

    // GIF Icon Navigation
    const gifIcon = document.getElementById("gif-icon");

    if (gifIcon) {
        gifIcon.addEventListener("click", function () {
            window.location.href = "second_page.html"; // Ganti sesuai halaman tujuan
        });
    } else {
        console.error("GIF icon not found!");
    }
});
