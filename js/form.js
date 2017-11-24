var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
event.preventDefault();


//seleciona o form
var form = document.querySelector("#form-adiciona");

//acesso aos inputs do form e pegando o valor digitado com o VALUE
var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

//cria uma tr no document com o createElement
var pacienteTr = document.createElement("tr");

//cria os td's que ficarão dentro da tr
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

//colocando os valores digitados no form para o td
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso, altura);

//colocando os td's dentro da tr
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);


//selecionando a tabela pelo id
var tabela = document.querySelector("#tabela-pacientes");

//inserindo o tr na tabela com o appendChild
tabela.appendChild(pacienteTr);
});
