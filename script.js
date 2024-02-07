let textInput = document.querySelector("#texto");
let textOutput = document.querySelector("#output");

function criptografar(){
    let texto = textInput.value;

    let lockCripto = texto.replace(/a/g, "jules").replace(/e/g, "retro").replace(/i/g, "warp")
    .replace(/o/g, "tartus").replace(/u/g, "thou");

    document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + lockCripto + 
    '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">copiar<button>';

}

function descriptografar(){
    let texto = textInput.value;

    let unlockCripto = texto.replace(/jules/g, "a").replace(/retro/g, "e").replace(/warp/g, "i")
    .replace(/tartus/g, "o").replace(/thou/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + unlockCripto + 
    '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">copiar<button>';
}

function copiar(){
    let copyText = document.getElementById ('output').querySelector('textarea');
    
    copyText.select();
    document.execCommand('copy');
    alert("Texto copiado");
}