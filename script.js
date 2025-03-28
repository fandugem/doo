(document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("toggle-darkmode");
  const body = document.body;

  // Check localStorage, if dark mode is enabled, apply it
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
      window.location.href = "hype/index.html"; // Change to the target page
    });
  }
}))

;document.addEventListener("DOMContentLoaded", function () {
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

function applyDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
    document.querySelector(".sidebar").classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country_code;
            if (countryCode === "ID") {
                applyTranslation("id");
            } else {
                applyTranslation("en");
            }
        })
        .catch(error => console.error("Gagal mendapatkan lokasi:", error));
});

function applyTranslation(lang) {
    const translations = {
        "en": {
            "welcome": "Welcome to My Website",
            "about": "About Me",
            "contact": "Contact"
        },
        "id": {
            "welcome": "Selamat Datang di Website Saya",
            "about": "Tentang Saya",
            "contact": "Kontak"
        }
    };

    document.querySelector("#about").textContent = translations[lang]["welcome"];
    document.querySelector("#my-think").textContent = translations[lang]["about"];
    document.querySelector("#contact").textContent = translations[lang]["contact"];
}

document.addEventListener("scroll", function () {
    document.body.classList.add("glow-effect");
    setTimeout(() => {
        document.body.classList.remove("glow-effect");
    }, 2000);
});

document.addEventListener("scroll", function () {
    let scrollX = window.scrollX;
    let screenWidth = window.innerWidth;
    
    if (scrollX > screenWidth / 4) {
        document.querySelector(".sidebar").classList.add("show");
    } else {
        document.querySelector(".sidebar").classList.remove("show");
    }
});
