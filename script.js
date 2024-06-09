function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Typing effect
const text = "I Am A Web Developer...";
let index = 0;
const speed = 100; // typing speed in milliseconds

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typing effect when the window loads
window.onload = typeWriter;
