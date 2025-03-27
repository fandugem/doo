document.addEventListener("DOMContentLoaded", function () {
// Dark Mode Toggle
const darkModeToggle = document.getElementById("toggle-darkmode");
const darkModeBtn = document.querySelector(".darkmode-btn");
const body = document.body;

// Cek localStorage, kalau dark mode aktif, langsung apply  
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
}  

if (darkModeBtn) {  
    darkModeBtn.addEventListener("click", toggleDarkMode);  
}  

// Sidebar Menu  
const menuButton = document.getElementById("menu-btn");  
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

document.addEventListener("click", closeSidebar);  

// GIF Icon Navigation  
const gifIcon = document.getElementById("gif-icon");  
if (gifIcon) {  
    gifIcon.addEventListener("click", function () {  
        window.location.href = "hype/index.html"; // Ganti dengan halaman tujuan  
    });  
}

});
