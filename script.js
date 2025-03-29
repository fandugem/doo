document.addEventListener("DOMContentLoaded", function () {
    // ** Dark Mode Toggle **
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;

    function applyDarkMode() {
        const darkMode = localStorage.getItem("darkMode");

        if (darkMode === "enabled" || (!darkMode && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
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

    applyDarkMode();

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);

    // ** Sidebar Menu **
    const menuButton = document.getElementById("menu-btn");
    const closeButton = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    function closeSidebar(event) {
        if (!sidebar.contains(event.target) && event.target !== menuButton) {
            sidebar.classList.remove("active");
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Biar klik tombol nggak langsung nutup
            toggleSidebar();
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    }

    // Hapus event listener yang bikin semua klik dianggap close sidebar
    document.addEventListener("click", function (event) {
        if (sidebar.classList.contains("active") && !sidebar.contains(event.target) && event.target !== menuButton) {
            sidebar.classList.remove("active");
        }
    });

    // ** Navigasi GIF Icon **
    const gifIcon = document.getElementById("gif-icon");
    if (gifIcon) {
        gifIcon.addEventListener("click", function () {
            window.location.href = "hype/index.html";
        });
    }
});
