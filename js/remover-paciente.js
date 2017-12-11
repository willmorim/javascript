var pacientes = document.querySelector(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    //if para remover apenas se for um TD, e não um TH por exemplo(cabeçalho)
    if (event.target.tagName == 'TD') {

        //adicionando a classe que remove no evento
        event.target.parentNode.classList.add("fadeOut");

        //função para chamar a animação que remove
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    }
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;  TR = paciente = remover
    //
    // paiDoAlvo.remove();
    //event.target.parentNode.remove();
});
