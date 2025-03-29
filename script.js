document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;

    // Function to apply dark mode based on localStorage or system preference
    function applyDarkMode() {
        const darkMode = localStorage.getItem("darkMode");

        if (darkMode === "enabled" || (!darkMode && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }

        updateDarkModeIcon();
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        updateDarkModeIcon();
    }

    // Function to update the dark mode icon
    function updateDarkModeIcon() {
        if (darkModeToggle) {
            darkModeToggle.src = body.classList.contains("dark-mode") ? "img/putih.png" : "img/hitam.png";
        }
    }

    // Apply dark mode on page load
    applyDarkMode();

    // Add event listener to the dark mode toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }

    // Listen for system dark mode preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyDarkMode);

    // Sidebar Menu
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
            event.stopPropagation(); // Prevent immediate sidebar close
            toggleSidebar();
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (sidebar.classList.contains("active") && !sidebar.contains(event.target) && event.target !== menuButton) {
            sidebar.classList.remove("active");
        }
    });

    // GIF Icon Navigation
    const gifIcon = document.getElementById("gif-icon");
    if (gifIcon) {
        gifIcon.addEventListener("click", function () {
            window.location.href = "hype/index.html";
        });
    }

    // Sidebar swipe functionality for touchscreen devices
    let startX = 0;

    // Detect horizontal scroll with mouse/trackpad
    document.addEventListener("wheel", function(event) {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            if (event.deltaX > 20) {
                sidebar.classList.add("active");
            } else if (event.deltaX < -20) {
                sidebar.classList.remove("active");
            }
        }
    });

    // Detect swipe on touchscreen devices
    document.addEventListener("touchstart", function(event) {
        startX = event.touches[0].clientX;
    });

    document.addEventListener("touchmove", function(event) {
        let endX = event.touches[0].clientX;
        let diffX = endX - startX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                sidebar.classList.add("active");
            } else {
                sidebar.classList.remove("active");
            }
        }
    });
