document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.getElementById("menu-btn");
    const closeButton = document.getElementById("close-btn");

    // ---- DARK MODE ----
    function applyDarkMode() {
        const darkMode = localStorage.getItem("darkMode");
        if (darkMode === "enabled") {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
        updateDarkModeIcon();
    }

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        updateDarkModeIcon();
    }

    function updateDarkModeIcon() {
        if (darkModeToggle) {
            darkModeToggle.src = body.classList.contains("dark-mode") ? "img/putih.png" : "img/hitam.png";
        }
    }

    applyDarkMode();

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }

    // ---- SIDEBAR ----
    function applySidebar() {
        const sidebarStatus = localStorage.getItem("sidebarStatus");
        if (sidebarStatus === "open") {
            sidebar.classList.add("active");
        }
    }

    function toggleSidebar() {
        sidebar.classList.toggle("active");
        localStorage.setItem("sidebarStatus", sidebar.classList.contains("active") ? "open" : "closed");
    }

    function closeSidebar(event) {
        if (!sidebar.contains(event.target) && event.target !== menuButton) {
            sidebar.classList.remove("active");
            localStorage.setItem("sidebarStatus", "closed");
        }
    }

    applySidebar();

    if (menuButton) {
        menuButton.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleSidebar();
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            sidebar.classList.remove("active");
            localStorage.setItem("sidebarStatus", "closed");
        });
    }

    document.addEventListener("click", closeSidebar);
});