/* A palavra window é opcional, ela é default

Os métodos são Case Sensitive 

Conseguimos acessar os elementos por: 

tag = getElementByTagName()
id = getElementById() - coloca-se entre parenteses  nomeDoId
nome = getElementsByName()
Classe = getElementsByClassName() coloca-se entre parenteses .nomeDaClasse
Seletores = querySelector() - coloca-se entre parenteses #nomeDoId
*/

let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


/* É possível fazer estilização nos elementos pelo js 
 Como por exemplo alterar o tamanho de um input, usamos o css pelo js */

 /* Alterando o tamanho do input com id nome para 100% do div */
 nome.style.width = '100%'
 email.style.width = '100%'
 assunto.style.width = '100%'

 function validaNome(){
     let txtNome = document.querySelector('#txtNome');

     if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        txtNome.style.background = 'transparent'
        txtNome.style.display = 'flex'
        txtNome.style.position = 'start'
     }
     else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        txtNome.style.background = 'transparent'
        txtNome.style.display = 'flex'
        txtNome.style.position = 'start'
        nomeOk = true;
     }
 }
 

 function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        txtEmail.style.background = 'transparent'
        txtEmail.style.display = 'flex'
        txtEmail.value.position = 'start'
    }
    else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        txtEmail.style.background = 'transparent'
        txtEmail.style.display = 'flex'
        txtEmail.value.position = 'start'
        emailOk = true;
    }
 }

 function validaAssunto(){
     let txtAssunto = document.querySelector('#txtAssunto');

     if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'O texto deve ter no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.background = 'transparent'
        txtAssunto.style.display = 'flex'
        txtAssunto.style.position = 'start'
     }
     else {
        txtAssunto.style.display = 'none'
        assuntoOk = true;
     }
 }

 
 assunto .addEventListener("keypress", function(e){
     const inputLength = assunto.value.length;
     const maxChars = 100;
     let txtcontador = document.querySelector('#contador');

     if(inputLength >= maxChars){
         e.preventDefault();
         validaAssunto();
        }

        txtcontador.innerHTML = maxChars - inputLength + ' caracteres';
        txtcontador.style.background = 'transparent'
        txtcontador.style.color = 'white'

        if(txtcontador.value.length === 0){
            txtcontador.style.display = 'none'
        }
        console.log(txtcontador.value);

})
    
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado!');
    }
    else {
        alert('Preencha todos os campos do formulário corretamente.');
    }
}
