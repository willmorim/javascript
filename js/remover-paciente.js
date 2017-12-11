var pacientes = document.querySelector(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    if (event.target.tagName == 'TD') {

        event.target.parentNode.classList.add("fadeOut");

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
