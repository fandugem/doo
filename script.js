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