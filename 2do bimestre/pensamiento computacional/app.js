const prompt = require("prompt-sync")({ sigint: true });

function loro(texto) {
    for (let i = 0; i < 5; i++) {
        console.log(texto);
    }
}

  // Ejemplo de uso
loro("Hola, soy un loro.");
