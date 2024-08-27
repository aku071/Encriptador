// Selección de elementos HTML
const btnEncriptar = document.querySelector("#buttonEn");
const btnDesencriptar = document.querySelector("#buttonDes");

// Botones que inician las funciones
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desEncriptar);

function encriptar() {
    let texto = document.getElementById('EncriptarTexto').value;

    // Validación: solo letras minúsculas y espacios
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("El programa no acepta mayusculas ni caracteres especiales.");
        return;
    }

    let llavesEncriptador = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    let resultado = texto.split('').map(letra => llavesEncriptador[letra] || letra).join('');

    document.getElementById('DesencriptarTexto').value = resultado;
    document.getElementById('EncriptarTexto').value = "";
}

function desEncriptar() {
    let texto = document.getElementById('DesencriptarTexto').value;

    // Validación: solo letras minúsculas y espacios
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas y espacios.");
        return;
    }

    let llavesEncriptador = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
    let resultado = texto;
    for (let [clave, valor] of Object.entries(llavesEncriptador)) {
        resultado = resultado.replaceAll(clave, valor);
    }

    document.getElementById('EncriptarTexto').value = resultado;
    document.getElementById('DesencriptarTexto').value = "";
}

// Establece el año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();
