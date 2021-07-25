const form = document.getElementById('form1')

form.addEventListener('submit', (e) => {

let nome = document.getElementById('nome').value; 
let nascimento = document.getElementById('nascimento').value;
let email = document.getElementById('email').value;
let celular = document.getElementById('celular').value;
let CEP = document.getElementById('CEP').value;
let estados = document.getElementById('estados').value;
let rua = document.getElementById('rua').value;
let numero = document.getElementById('numero').value;

let data = {
    nome, 
    nascimento,
    email,
    celular,
    CEP,
    estados,
    rua,
    numero,
}
let convertData= JSON.stringify(data);

localStorage.setItem('lead', convertData); 

 if (email == ''|| nome =='' || celular ==''|| nascimento =='' || CEP == ''|| rua =='' || numero ==''){

    alert("Preencha os espaços em branco.");
    }

 else if (isNaN(celular)){
    alert("Preencha um número de celular válido");
 }   
else {

alert(" Obrigado, entraremos em contato!")

} 

console.log("Nome :", nome);
console.log("Email :", email);
})

