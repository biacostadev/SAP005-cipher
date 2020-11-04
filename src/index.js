import cipher from './cipher.js';

const buttonCodificar = document.getElementById("codificar");
buttonCodificar.addEventListener("click", codificar);
function codificar() {
    const maiuscula = document.getElementById("textCode");
    maiuscula.value = maiuscula.value.toUpperCase();
    const mensagem = document.getElementById("textCode").value;
    const offset = Number(document.getElementById("offsetCode").value);
    const mensagemCodificada = cipher.encode(offset, mensagem);
    document.getElementById("fraseCodificada").innerHTML = `${mensagemCodificada}`;
}

const buttonDecodificar = document.getElementById("decodificar");
buttonDecodificar.addEventListener("click", decodificar);
function decodificar() {
    const maiuscula = document.getElementById("textDecode");
    maiuscula.value = maiuscula.value.toUpperCase();
    const mensagemDec = document.getElementById("textDecode").value;
    const offsetDec = Number(document.getElementById("offsetDecode").value);
    const mensagemDecodificada = cipher.decode(offsetDec, mensagemDec);
    document.getElementById("fraseDecodificada").innerHTML = `${mensagemDecodificada}`;
}