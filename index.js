

/* Obtenemos los elementos HTML */
const area_texto = document.querySelector(".area_texto");
const resultado = document.querySelector(".resultado");
const boton_encriptar = document.querySelector(".boton_encriptar");
const boton_desencriptar = document.querySelector(".boton_desencriptar");
const copiar = document.querySelector(".copiar");
const no_encontrado = document.querySelector(".no_encontrado");
const primer_parrafo = document.querySelector(".primer_parrafo");
const segundo_parrafo = document.querySelector(".segundo_parrafo");



/* Función para encriptar */
function encriptar(texto){
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

/* Función para desencriptar */
function desencriptar(texto){
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}



/* Cuando dan click al botón encriptar */
boton_encriptar.addEventListener("click", function() {
    /* Coloco en "resultado" el valor de encriptar el valor que ingresaron en "area_texto" */
    resultado.value = encriptar(area_texto.value);
    area_texto.value = "";
    no_encontrado.style.display ="none";
    primer_parrafo.style.display ="none";
    segundo_parrafo.style.display ="none";
    resultado.style.display = "block";
});


/* Cuando dan click al botón desencriptar */
boton_desencriptar.addEventListener("click", function() {
    /* Coloco en "resultado" el valor de encriptar el valor que ingresaron en "area_texto" */
    resultado.value = desencriptar(area_texto.value);
    area_texto.value = "";
    no_encontrado.style.display ="none";
    primer_parrafo.style.display ="none";
    segundo_parrafo.style.display ="none";
    resultado.style.display = "block";
});


/* Al dar click en el botón de copiar */
/* Copiar texto al portapapeles */
copiar.addEventListener("click", function() {
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    resultado.value = "";
    alert("Texto copiado");
});

