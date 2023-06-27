document.getElementById('enviar').addEventListener('click',function (event){
    event.preventDefault();//evita o envio padrao do forms

    //obter valores dos campos de entrada

    var nome = document.getElementById('nome').value;
    var email=document.getElementById('email').value;

    //realizar acoes com os dados
    console.log('nome:',nome);
    console.log('email:' email);

    
})