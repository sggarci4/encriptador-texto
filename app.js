// seccion de codigo para quitar acentos si el usuario quiere ingresar acentos
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
// seccion de codigo para para no permitir ingresar  caracteres especiales
document.getElementById("mensaje").addEventListener('keydown', function(event) {
  var regex = new RegExp("^[a-zA-Z ]+$");
  var key = event.key;
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});
// funcion para que realice el encriptado del texto ingresado al presionar el boton de encriptar
function encriptarTexto (){
    let textoOriginal = document.getElementById('mensaje')
    let textoFinal = document.getElementById('cont-encrip')
    console.log(textoOriginal.value);
    let textoModificado = textoOriginal.value.replace(/[aeiou]/g, function(match) {
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
    // seccion para poder ajustar la altura del textarea cont-encrip, donde se muestra el el texto encriptado
    textoFinal.value = textoModificado;    
    if (textoModificado && textoFinal) {
      textoFinal.value = textoModificado;
      ajustarAlturaTxtA(textoFinal);
    }   
    // fin de ajuste de altura de textarea    
    document.getElementById('mensaje').value = '';
    document.getElementById('elementos-mensajes').style.display= "none";
    document.getElementById('btn-copiar').style.display = "inline-block";
}
// funcion para que realice el desencriptado del texto ingresado al presionar el boton de desencriptar
function desencriptarTexto() {
    textoModificado =  document.getElementById('mensaje');
    textoFinal = document.getElementById('cont-encrip');
    console.log(textoModificado);
    textoOriginal = textoModificado.value
    .replace(/ufat/g, 'u')
    .replace(/ober/g, 'o')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e')
    .replace(/ai/g, 'a');
    console.log(textoOriginal);
    textoFinal.value = textoOriginal;    
    if (textoOriginal && textoFinal) {
      textoFinal.value = textoOriginal;
      ajustarAlturaTxtA(textoFinal);
    }       
    document.getElementById('cont-encrip').value = textoOriginal;
    document.getElementById('mensaje').value = '';


}
// funcion para copiar el texto  generado por el sistema al portapapeles
function copiarTexto() {
    let textoCopiado = document.getElementById("cont-encrip").value;
    navigator.clipboard.writeText(textoCopiado)
}
//funcion  para ajustar la altura del textarea cont-encrip,donde se muestra el resultado
function ajustarAlturaTxtA(textarea) {
  if (window.innerWidth <= 1024) {    
    textarea.style.height = 'auto'; // Restablece la altura a 'auto' para medir correctamente el contenido
    textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta la altura al contenido
  }
}