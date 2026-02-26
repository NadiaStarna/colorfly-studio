// ==========================
// Elementos del DOM
// ==========================
var generateBtn = document.getElementById("generate-btn");
var paletteContainer = document.getElementById("palette-container");
var colorCountSelect = document.getElementById("color-count");
var colorTypeSelect = document.getElementById("color-type");

var saveButton = document.getElementById("savePalette");
var clearButton = document.getElementById("clearPalettes");
var savedContainer = document.querySelector(".saved-palettes");
var tooltip = document.getElementById("tooltip");

var savedPalettesData = []; // para evitar duplicados

// ==========================
// Funciones de generación de color
// ==========================

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

// ==========================
// Generar paleta principal
// ==========================
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

        // ===== Agregado: guardar color original para copiar correctamente =====
        box.setAttribute("data-color", color);

        // Evento click para copiar color al presionar el óvalo
        box.addEventListener("click", function() {
            var originalColor = this.getAttribute("data-color"); 
            navigator.clipboard.writeText(originalColor).then(function() {
                tooltip.textContent = originalColor + " copiado ✨";
                tooltip.style.opacity = "1";
                setTimeout(function() {
                    tooltip.style.opacity = "0";
                    tooltip.textContent = "Paleta guardada ✨";
                }, 1500);
            });
        });

        var text = document.createElement("span");
        text.className = "color-text";

        if(type === "hsl") { // si es HSL/HCL
            var parts = color.split("(");
            text.innerHTML = parts[0] + "<br>(" + parts[1]; 
        } else {
            text.textContent = color; // HEX
        }

        wrapper.appendChild(box);
        wrapper.appendChild(text);
        paletteContainer.appendChild(wrapper);
    }
}

// ==========================
// Botón generar
// ==========================
generateBtn.addEventListener("click", generatePalette);

// ==========================
// Guardar paleta
// ==========================
saveButton.addEventListener("click", function() {
    var boxes = document.querySelectorAll(".color-box");
    if (boxes.length === 0) return; 

    var currentPalette = [];
    boxes.forEach(function(box) {
        // ===== Modificado: usar color original guardado =====
        currentPalette.push(box.getAttribute("data-color"));
    });

    var paletteString = currentPalette.join(",");

    // Evitar duplicados
    if (savedPalettesData.includes(paletteString)) return;
    savedPalettesData.push(paletteString);

    // Crear contenedor de la paleta
    var paletteGroup = document.createElement("div");
    paletteGroup.className = "saved-group";

    // Mini-óvalos con click para copiar
    currentPalette.forEach(function(color) {
        var mini = document.createElement("div");
        mini.className = "mini-swatch";
        mini.style.backgroundColor = color;

        mini.addEventListener("click", function() {
            navigator.clipboard.writeText(color).then(function() {
                tooltip.textContent = color + " copiado ✨";
                tooltip.style.opacity = "1";
                setTimeout(function() {
                    tooltip.style.opacity = "0";
                    tooltip.textContent = "Paleta guardada ✨";
                }, 1500);
            });
        });

        paletteGroup.appendChild(mini);
    });

    // Botón eliminar de esta paleta
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-palette";
    deleteBtn.addEventListener("click", function() {
        savedContainer.removeChild(paletteGroup);
        var index = savedPalettesData.indexOf(paletteString);
        if (index > -1) savedPalettesData.splice(index, 1);
    });

    paletteGroup.appendChild(deleteBtn);

    // Agregar paleta al contenedor
    savedContainer.appendChild(paletteGroup);

    // Tooltip general al guardar
    tooltip.style.opacity = "1";
    setTimeout(function() {
        tooltip.style.opacity = "0";
    }, 2000);
});

// ==========================
// Limpiar todas las paletas
// ==========================
clearButton.addEventListener("click", function() {
    savedContainer.innerHTML = "";
    savedPalettesData = [];
});