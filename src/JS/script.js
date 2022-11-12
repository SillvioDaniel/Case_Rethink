
/* Mask*/
  $(document).ready(function () { 
    var $telefone = $("#telefone");
    $telefone.mask('(00) 00000-0000');
});

/* 3*/
const pessoas = [
    {nome: "Fabiana Araújo", idade: 33 },
    {nome: "Gabriel Gomes", idade: 25 },
    {nome: "Fernando Henrique", idade: 17 },
    {nome: "Ana Luiza", idade: 2 },
    {nome: "Geralda do Nascimento", idade: 93 },
    {nome: "Miguel Souza", idade: 70},
    {nome: "Antonio Miguel", idade: 69 }
]

function adicionar(){
    pessoas.push({nome:document.getElementById('idade').value,idade:document.getElementById('nome').value});
    alert(pessoas);
}





/* QUESTAO 3 -------------------------------------------------------*/
function filtrar_nome (nome) {
    if (nome.nome == document.getElementById('filtro_nome').value)
    return nome;
}

function nome_filtrado(){
    if(document.getElementById('filtro_nome').value != ""){
var nome_filtrado = pessoas.filter(filtrar_nome);
document.getElementById('nomes_filtro').innerHTML = JSON.stringify(nome_filtrado);
console.log(nome_filtrado.toString);
    }else{
        alert("Digite um nome");
    }
}
/*------------------------------------------------------------------*/

/* QUESTAO 4 ----------------------------------------------------------------*/
function lista_nomes(){
    nomes =[];
    for (var i = 0; i < pessoas.length; i++) {
        nomes.push(pessoas[i].nome);
}
   
document.getElementById('nomes').innerHTML = nomes;
console.log(nomes)
}
/*-----------------------------------------------------------------*/





/* QUESTAO 5 --------------------------------*/
function adicionar_id(){
    pessoas.forEach((item, i) => {
        item.id = i + 1;
      });
      
      console.log(pessoas);
}
/* ------------------------------------------*/



/* QUESTAO 6 ----------------------------------------------------*/
function filtrar_idade (nome) {
    if (nome.idade >= 18)
    return nome;
}

function maiores(){
var idade_filtrada = pessoas.filter(filtrar_idade);
document.getElementById('maiores').innerHTML = JSON.stringify(idade_filtrada);
}
/*---------------------------------------------------------------*/


/* QUESTAO 7 ----------------------------------------------------*/
function media(){
    soma =0;
    for (var i = 0; i < pessoas.length; i++) {
        soma += pessoas[i].idade;
}
document.getElementById('media').innerHTML ="A média das idades é " + soma/pessoas.length;
}
/*---------------------------------------------------------------*/
