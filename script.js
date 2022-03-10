//Capturar los campos del input 
var inputMensaje = document.querySelector("#input-texto"); 
var inputMensajeCodificado = document.querySelector("#msg");

function encriptar(){ 
    //Capturar el texto del input 
    var mensaje = inputMensaje.value; 
    //validacion de mayúsculas y acentos
    var errorMayusculas = [];
    var errorAcentos = [];
    
    if(mensaje.toString().match(/[A-Z]/g)){
        errorMayusculas = mensaje.toString().match(/[A-Z]/g); //letras mayusculas de la a la z global
        alert("Hay letras mayúsculas: "+ errorMayusculas + " , ingresa el texto nuevamente."); 
        return; //si cumple la condicion no continua hasta ingresar la letra en minuscula
    }
    if(mensaje.toString().match(/[áéíóú]/g)){
        errorAcentos = mensaje.toString().match(/[áéíóú]/g); //vocales á,é,í,ó,ú
        alert("Hay vocales con acento: "+ errorAcentos +" , ingresa el texto nuevamente.");
        return; //si cumple la condicion no continua hasta ingresar la vocal sin acento
    }

    //Convertir o reemplazar las vocales de acuerdo a las reglas
    var convertirLetras = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    
    //Pasar el texto modificado al input del mensaje codificado
    inputMensajeCodificado.value = convertirLetras;   
}

function desencriptar(){
    //Capturar el texto del input 
    var mensaje = inputMensaje.value; 
    //validacion de mayúsculas y acentos
    var errorMayusculas = [];
    var errorAcentos = [];
     
    if(mensaje.toString().match(/[A-Z]/g)){
        errorMayusculas = mensaje.toString().match(/[A-Z]/g); //letras mayusculas de la a la z global
        alert("Hay letras mayúsculas: "+ errorMayusculas + " , ingresa el texto nuevamente."); 
        return; //si cumple la condicion no continua hasta ingresar la letra en minuscula
    }
    if(mensaje.toString().match(/[áéíóú]/g)){
        errorAcentos = mensaje.toString().match(/[áéíóú]/g); //vocales á,é,í,ó,ú
        alert("Hay vocales con acento: "+ errorAcentos +" , ingresa el texto nuevamente.");
        return; //si cumple la condicion no continua hasta ingresar la vocal sin acento
    }
    
    //Convertir o reemplazar las vocales de acuerdo a las reglas
    var convertirLetras = mensaje.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
    
    //Pasar el texto modificado al input del mensaje codificado
    inputMensajeCodificado.value = convertirLetras;
}

function copiar(){
    //capturar el texto del input del mensaje codificado
    const copiarTexto = document.getElementById("msg"); 
    //seleccionar texto
    copiarTexto.select(); 
    //Marcar el texto con color
    navigator.clipboard.writeText(copiarTexto.value);
}


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 

    Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/