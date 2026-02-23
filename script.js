// Obtener elementos
var generateBtn = document.getElementById("generate-btn");
var paletteContainer = document.getElementById("palette-container");
var colorCountSelect = document.getElementById("color-count");
var colorTypeSelect = document.getElementById("color-type");

// Generar color HEX
function generateHexColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generar color HSL
function generateHslColor() {
    var h = Math.floor(Math.random() * 361);
    var s = Math.floor(Math.random() * 101);
    var l = Math.floor(Math.random() * 101);
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

// Generar paleta
function generatePalette() {
    paletteContainer.innerHTML = "";
    var count = parseInt(colorCountSelect.value);
    var type = colorTypeSelect.value;

    for (var i = 0; i < count; i++) {
        var color = type === "hex" ? generateHexColor() : generateHslColor();

        var wrapper = document.createElement("div");
        wrapper.className = "color-wrapper";

        var box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;

        var text = document.createElement("span");
        text.className = "color-text";

        if(type === "hsl") { // si es HSL/HCL
            // separar "HSL" del valor
            var parts = color.split("("); // divide en ["hsl", "…"]
            text.innerHTML = parts[0] + "<br>(" + parts[1]; // pone HSL arriba y valor abajo
        } else {
            text.textContent = color; // HEX queda igual
        }

        wrapper.appendChild(box);
        wrapper.appendChild(text);
        paletteContainer.appendChild(wrapper);
    }
}

// Botón para generar
generateBtn.addEventListener("click", generatePalette);