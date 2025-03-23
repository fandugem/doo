# forto-fandu-marketing
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Marketing Specialist | Digital Strategist</p>
    </header>

    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="about">
        <h2>About Me</h2>
        <p>Introduce yourself briefly, mention your experience in marketing, and what makes you unique.</p>
    </section>

    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="project">
            <img src="images/project1.jpg" alt="Project 1">
            <h3>Project Name</h3>
            <p>Description of the marketing project you've worked on.</p>
        </div>
        <!-- Add more projects here -->
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>SEO Optimization</li>
            <li>Social Media Marketing</li>
            <li>Google Ads & Facebook Ads</li>
            <li>Copywriting</li>
            <li>Email Marketing</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">Your Profile</a></p>
    </section>

    <footer>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
    </footer>
</body>
</html> 
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

section {
    padding: 50px;
    border-bottom: 1px solid #ddd;
}

.project img {
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
}

footer {
    background-color: #333;
    color: white;
    padding: 10px;
}
/* Efek fade-in saat scroll */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.show {
    opacity: 1;
    transform: translateY(0);
}
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Panggil pas pertama kali halaman dimuat
});
<section id="about" class="fade-in">
    <h2>About Me</h2>
    <p>Introduce yourself briefly, mention your experience in marketing, and what makes you unique.</p>
</section>
<section id="contact" class="fade-in">
    <h2>Contact</h2>
    <form action="https://formspree.io/f/yourformid" method="POST">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
}

input, textarea {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background-color: #333;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}
.dark-mode {
    background-color: #121212;
    color: white;
}

.dark-mode header, 
.dark-mode footer {
    background-color: #1e1e1e;
}

.dark-mode nav ul li a {
    color: white;
}
<button id="toggle-dark">🌙 Dark Mode</button>
document.getElementById("toggle-dark").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
