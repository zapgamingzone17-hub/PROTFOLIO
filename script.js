let name = "Arpit";
let age = 20;

console.log(name);
console.log(age);

const text = "Hello, I'm Arpit";
let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text[i];
        i++;
        setTimeout(typeText, 100);
    }
}

typeText();
