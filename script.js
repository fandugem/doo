document.addEventListener("DOMContentLoaded", function () {
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
            darkModeToggle.src = body.classList.contains("dark-mode") ? "img/putih.png" : "img/hitam.png";
        }
    }

    applyDarkMode();

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }

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
            event.stopPropagation();
            toggleSidebar();
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    }

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

let sidebar = document.querySelector(".sidebar");
let startX = 0;
let scrollTimeout;

// --- DETEKSI SCROLL DENGAN MOUSE / TRACKPAD ---
document.addEventListener("wheel", function(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) { 
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (event.deltaX > 20) { // Scroll kanan → buka sidebar
                sidebar.classList.add("active");
            } else if (event.deltaX < -20) { // Scroll kiri → tutup sidebar
                sidebar.classList.remove("active");
            }
        }, 50); // Delay biar lebih smooth
    }
});

// --- DETEKSI SWIPE DI HP / TOUCHSCREEN ---
document.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX;
});

document.addEventListener("touchmove", function(event) {
    let endX = event.touches[0].clientX;
    let diffX = endX - startX;

    if (Math.abs(diffX) > 50) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (diffX > 0) { // Swipe kanan → buka sidebar
                sidebar.classList.add("active");
            } else { // Swipe kiri → tutup sidebar
                sidebar.classList.remove("active");
            }
        }, 50); // Delay biar gak terlalu responsif
    }
});
