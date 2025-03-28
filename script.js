document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menu-btn");
    
    // **Dark Mode Handling**
    function applyDarkMode() {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const savedMode = localStorage.getItem("darkMode");

        if (savedMode === "enabled" || (savedMode === null && prefersDark)) {
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
            darkModeToggle.src = body.classList.contains("dark-mode") ? "img/dark.png" : "img/white.png";
        }
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }

    // Apply dark mode on load
    applyDarkMode();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);

    // **Sidebar Handling**
    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    function closeSidebar(event) {
        if (!sidebar.contains(event.target) && event.target !== menuButton) {
            sidebar.classList.remove("active");
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", toggleSidebar);
    }

    document.addEventListener("click", closeSidebar);

    // **GIF Icon Navigation**
    const gifIcon = document.getElementById("gif-icon");
    if (gifIcon) {
        gifIcon.addEventListener("click", function () {
            window.location.href = "hype/index.html";
        });
    }
});
