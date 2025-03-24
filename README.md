/forto-fandu-marketing  
│── index.html  
│── style.css  
│── script.js  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - fandu</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>forto-fandu-marketing</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section id="about">
        <h2>About Me</h2>
        <p>Introduce yourself briefly, mention your experience in marketing, and what makes you unique.</p>
    </section>
    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="project">
            <img src="img/project1.jpg" alt="Project 1">
            <h3>Project Name</h3>
            <p>Description of the marketing project you've worked on.</p>
        </div>
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
        <form>
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Your Email">
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>

  <footer>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
        <button id="toggle-darkmode">Dark Mode</button>
    </footer>

   <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #f4f4f4;
    color: #333;
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
    color: white;
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
    text-align: center;
}

button {
    background-color: #555;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
}

.dark-mode {
    background-color: #121212;
    color: white;
}

.dark-mode nav ul li a {
    color: white;
}
document.getElementById("toggle-darkmode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
