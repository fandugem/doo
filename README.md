/gym-website  
│── index.html  
│── style.css  
│── script.js  
└── img/ (![Screenshot_2025-02-26-21-05-11-22_0438eb925998df20b3482ec25499d226](https://github.com/user-attachments/assets/b4a596ef-6f27-416d-a5d5-393c4343fe8c)
)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gym Lifestyle</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to Gym Lifestyle</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Gym</h2>
        <p>Going to the gym regularly helps build muscle, burn fat, and improve mental health.</p>
    </section>

    <section id="benefits">
        <h2>Benefits of Working Out</h2>
        <ul>
            <li>Increases strength and endurance</li>
            <li>Helps with weight loss</li>
            <li>Boosts mood and mental health</li>
            <li>Improves overall well-being</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: gym@example.com</p>
        <p>Instagram: <a href="https://instagram.com/gym">Gym IG</a></p>
    </section>

    <button id="toggle-darkmode">Dark Mode</button>

    <footer>
        <p>&copy; 2025 Gym Lifestyle. Stay Strong!</p>
    </footer>

    <script src="script.js">   
    
  </script>
</body>
</html

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("toggle-darkmode");
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: white;
    color: black;
}

/* Header */
header {
    background-color: #222;
    color: white;
    padding: 20px;
}

/* Navigation */
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

/* Sections */
section {
    padding: 50px;
    border-bottom: 1px solid #ddd;
}

/* Button */
button {
    background-color: #555;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin: 20px;
}

/* Dark Mode */
.dark-mode {
    background-color: black;
    color: white;
}
