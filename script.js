console.log("JavaScript conectado correctamente");
    
const changeButton = document.getElementById("change-button");
const messageText = document.getElementById("message-text");

changeButton.addEventListener("click", function() {
    messageText.textContent = "El mensaje fue cambiado correctamente";
});
