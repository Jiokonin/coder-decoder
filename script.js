let textInput = document.querySelector("#texto");
let textOutput = document.querySelector("#output");

function criptografar(){
    let texto = textInput.value;

    let lockCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + lockCripto + 
    '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">copiar<button>';

}

function descriptografar(){
    let texto = textInput.value;

    let unlockCripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
    .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + unlockCripto + 
    '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">copiar<button>';
}

function copiar(){
    let copyText = document.getElementById ('output').querySelector('textarea');
    
    copyText.select();
    document.execCommand('copy');
    alert("Texto copiado");
}