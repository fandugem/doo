document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("toggle-darkmode");
    const body = document.body;

    // Cek localStorage dan langsung apply dark mode kalau sebelumnya aktif
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }
    updateDarkModeIcon(); // Panggil supaya ikon sesuai saat reload

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        updateDarkModeIcon(); // Ubah ikon tiap kali dark mode berubah
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
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menu-btn");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    function closeSidebar(event) {
        if (sidebar && !sidebar.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    }

    function toggleSidebar() {
    const menuButton = document.getElementById("menu-btn");
    menuButton.innerText = "Web masih dalam pengembangan";
    setTimeout(() => {
        menuButton.innerText = "☰"; // Balikin ke ikon semula setelah 2 detik
    }, 2000);
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
            window.location.href = "hype/index.html"; // Ganti dengan halaman yang lo mau
        });
    } else {
        console.error("GIF icon not found!");
    }
});
