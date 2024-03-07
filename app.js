
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
const encryptText = document.querySelector("#mensaje");
document.addEventListener("keyup", () => {
    let de = "ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç´",
    a = "AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc",
    re = new RegExp("[" + de + "]", "ug");

    encryptText.value = encryptText.value.replace(re, (match) =>
        a.charAt(de.indexOf(match))
    );

    encryptText.value = encryptText.value.toLowerCase();
});
document.getElementById("mensaje").addEventListener('keydown', function(event) {
  var regex = new RegExp("^[a-zA-Z ]+$");
  var key = event.key;
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});
   
function encriptarTexto (){
    let textoOriginal = document.getElementById('mensaje').value
    console.log(textoOriginal);
    let textoModificado = textoOriginal.replace(/[aeiou]/g, function(match) {
        switch (match) {
          case 'a':
            return 'ai';
          case 'e':
            return 'enter';
          case 'i':
            return 'imes';
          case 'o':
            return 'ober';
          case 'u':
            return 'ufat';
          default:
            return match;
        }
      });
    console.log(textoModificado);
    document.getElementById('cont-encrip').value = textoModificado;
    document.getElementById('mensaje').value = '';
    document.getElementById('elementos-mensajes').style.display= "none";
    document.getElementById('btn-copiar').style.visibility = "visible";
}
function desencriptarTexto() {
    textoModificado =  document.getElementById('mensaje').value;
    console.log(textoModificado);
    textoOriginal = textoModificado
    .replace(/ufat/g, 'u')
    .replace(/ober/g, 'o')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e')
    .replace(/ai/g, 'a');
    console.log(textoOriginal);
    document.getElementById('cont-encrip').value = textoOriginal;
    document.getElementById('mensaje').value = '';


}
function copiarTexto() {
    let textoCopiado = document.getElementById("cont-encrip").value;
    navigator.clipboard.writeText(textoCopiado)
}