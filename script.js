let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let body = document.getElementById('body')
let css = document.getElementById('text')
function backgroundColor() {
    body.style.background = "linear-gradient(to right , " + color1.value + ", " + color2.value + ")";
    css.textContent = "linear-gradient(to right , " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener('input', backgroundColor)

color2.addEventListener('input', backgroundColor)