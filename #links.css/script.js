document.getElementById("form").addEventListener("envia", function(event) {
    event.preventDefault ();


let envia = document.getElementoById("envia").value;

function HabiDsabi(){  
    if(document.getElementById('habi').checked == true){ 
        document.getElementById('envia').disabled = ""  
    }  
    if(document.getElementById('habi').checked == false){ 
        document.getElementById('envia').disabled = "disabled"  
   }
}

function assinar() {
    window.location.href = "atividade.html"
}

console.log (envia)
alert("seu projeto foi assinado")

)};