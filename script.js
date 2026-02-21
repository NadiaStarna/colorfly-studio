// 1️⃣ Obtener los elementos del HTML
var generateBtn = document.getElementById("generate-btn");
var paletteContainer = document.getElementById("palette-container");
var colorCountSelect = document.getElementById("color-count");
var colorTypeSelect = document.getElementById("color-type");

// 2️⃣ Función para generar color HEX
function generateHexColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 3️⃣ Función para generar color HSL
function generateHslColor() {
    var h = Math.floor(Math.random() * 361); // 0 a 360
    var s = Math.floor(Math.random() * 101); // 0 a 100%
    var l = Math.floor(Math.random() * 101); // 0 a 100%
    // Concatenación simple, no backticks
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

// 4️⃣ Función para generar la paleta
function generatePalette() {
    // Limpiar paleta anterior
    paletteContainer.innerHTML = "";

    // Cantidad y tipo de color
    var count = parseInt(colorCountSelect.value);
    var type = colorTypeSelect.value;

    // Generar los cuadros
    for (var i = 0; i < count; i++) {
        var color;
        if (type === "hex") {
            color = generateHexColor();
        } else {
            color = generateHslColor();
        }

        // Crear contenedor del cuadro + texto
        var wrapper = document.createElement("div");
        wrapper.className = "color-wrapper";

        var box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;

        // Texto dentro del cuadro
        var text = document.createElement("span");
        text.textContent = color;
        box.appendChild(text);

        wrapper.appendChild(box);
        paletteContainer.appendChild(wrapper);
    }
}

// 5️⃣ Conectar el botón
generateBtn.addEventListener("click", generatePalette);