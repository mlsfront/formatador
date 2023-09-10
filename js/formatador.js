//Converter texto para MAIÚSCULO
function txtMaiusculo() {
    var x = document.getElementById("txtMaiusculo")

    x = x.value.toUpperCase()

    if ((document.getElementById("txtMaiusculo").value != "")) {
    document.getElementById("rTexM").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"
            
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    } 
}

//Converter texto para minúsculas
function txtMinusculo() { 
    var x = document.getElementById("txtMinusculo")

    x = x.value.toLowerCase()

    if ((document.getElementById("txtMinusculo").value != "")) {
    document.getElementById("rTexMin").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    }     
}

//Remover acentos, caracteres especiais, e numeros com Normalize e Expressões Regulares: 
function rmCharNum() { 
    var x = document.getElementById("rmCharNum")

    x = String(x.value).normalize("NFD").replace(/[^a-zA-Z\s]/g, "");

    if ((document.getElementById("rmCharNum").value != "")) {
    document.getElementById("rCharNum").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    }     
}

//Remover acentos: 
function rmAcentos() {     
    var x = document.getElementById("rmAcentos")

    x = String(x.value).normalize("NFD").replace(/[\u0300-\u036f]/g, '');

    if ((document.getElementById("rmAcentos").value != "")) {
        document.getElementById("rAcentos").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"  
            
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    }  
}

/*Removendo todos os caracteres especiais em JavaScript*/
function rmCaracteres() { 
    var x = document.getElementById("rmCaracteres")

    x = String(x.value).normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')

    if ((document.getElementById("rmCaracteres").value != "")) {
    document.getElementById("rCaracteres").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"    
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    }    
}

/*Substituindo caracteres especiais*/
function subCaracteres() { 
    var x = document.getElementById("subCaracteres")

    //com numeros
    x = String(x.value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/([^\w]+|\s+)/g, '-').replace(/\-\-+/g, '-').replace(/(^-+|-+$)/, ''); 

    if ((document.getElementById("subCaracteres").value != "")) {
    document.getElementById("sCaracteres").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"    
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    }
}

/*Substituindo caracteres especiais e numeros*/
function subCaracteresRmNum() { 
    var x = document.getElementById("subCaracteresRmNum")

    //sem numeros
    x = String(x.value).normalize('NFD').replace(/[^a-zA-Z\s]/g, "").replace(/([^\w]+|\s+)/g, '-').replace(/\-\-+/g, '-').replace(/(^-+|-+$)/, '');

    document.getElementById("aviso").innerHTML = ""; 

    if ((document.getElementById("subCaracteresRmNum").value != "")) {
    document.getElementById("sCaracteresNum").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"               
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    }   
}

/*Substituindo caracteres especiais e numeros*/
function subCaracteresRmNumMin() { 
    var x = document.getElementById("subCaracteresRmNumMin")

    //sem numeros
    x = String(x.value).normalize('NFD').replace(/[^a-zA-Z\s]/g, "").replace(/([^\w]+|\s+)/g, '-').replace(/\-\-+/g, '-').replace(/(^-+|-+$)/, '').toLocaleLowerCase();

    document.getElementById("aviso").innerHTML = ""; 

    if ((document.getElementById("subCaracteresRmNumMin").value != "")) {    
    document.getElementById("sCaracteresNumMin").innerHTML = "<p class='resposta-js' title='selecione e copie seu texto manualmente'>" + x + "</p>"              
    } else {
        alert('Você precisa digitar uma palavra, frase ou texto!')  
        location.reload(true) 
    }    
}

//Realizar acao
function btn_acao(){
    let btn_acao = document.getElementById('btn_acao')
    if(btn_acao == "") {
        alert('oi')
    }
}

//Apagar conteudo textarea
function apagar(){
	document.querySelector('textarea').value="";
    window.location.reload(true);
}

//Recarregar a apagina
function recarregar(){
    window.location.reload(true);
}

//Copiar texto
function copiarTexto() {
    // Get the text field
    let copyText = document.getElementById("textCopp");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    //alert("Copied the text: " + copyText.value);
}

//Aviso
function aviso(){
    let aviso = document.getElementById('aviso')
    aviso = aviso.innerHTML = '<span class=\'aviso-btn\'><i class=\'fas fa-triangle-exclamation\'></i>Você vai precisar selecionar e copiar seu texto manualmente quando esiver disponível!</span>'
}
/*document.getElementById("aviso").addEventListener("mouseover", mouseOver);
document.getElementById("aviso").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("aviso").style.color = 'red'
  document.getElementById("aviso").innerHTML = 'Vai precisar selecionar e copiar seu texto manualmente quando estiver disponível 👍'
}

function mouseOut() {
    document.getElementById("aviso").style.color = '#232526'
  document.getElementById("aviso").innerHTML = '<i class="fas fa-triangle-exclamation"></i>Passe o mouse'
}*/
