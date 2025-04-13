const codeBlock = document.getElementById("code-block");
const lineNumbers = document.getElementById("line-numbers");

// Actualizar los números de línea
function updateLineNumbers() {
    let lineNumberText = "";

    // Crear los números de línea
    for (let i = 1; i <= 25; i++) {
        lineNumberText += `${i}\n`;
    }

    lineNumbers.innerText = lineNumberText;
}

// Llamar a la función al cargar la página
updateLineNumbers();