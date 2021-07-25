const form = document.getElementById('form1')

form.addEventListener('submit', (e) => {

let nomeProduto = document.getElementById('nomeProduto').value; 
let preço = document.getElementById('preço').value;
let quantidade = document.getElementById('quantidade').value;
let código = document.getElementById('código').value;
let foto = document.getElementById('foto').value;

let data = {
   nomeProduto, 
   preço,
   quantidade,
   código,
   foto,
}
let convertData= JSON.stringify(data);

localStorage.setItem('lead', convertData); 

 if (nomeProduto == ''|| preço =='' || quantidade ==''|| código =='' || foto == ''){

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

