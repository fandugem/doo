document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;

    // Check localStorage, if dark mode is enabled, apply it
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
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

    // Sidebar Menu
    const menuButton = document.getElementById("menu-btn");
    const closeButton = document.getElementById('close-btn');
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
        menuButton.addEventListener("click", toggleSidebar);
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    }

    document.addEventListener("click", closeSidebar);

    // GIF Icon Navigation
    const gifIcon = document.getElementById("gif-icon");
    if (gifIcon) {
        gifIcon.addEventListener("click", function () {
            window.location.href = "hype/index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");

    // Sidebar toggle
    menuToggle.addEventListener("click", function () {
        sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0px";
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && event.target !== menuToggle) {
            sidebar.style.left = "-250px";
        }
    });

    // Auto dark mode based on system preference
    function applyDarkMode() {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }
    applyDarkMode();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);
});
