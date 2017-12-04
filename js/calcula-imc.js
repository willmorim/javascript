var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    //recebe os dados do paciente atraves das funções atribuidas
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);


    //caso invalido entra no if e da erro
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    //caso invalido entra no if e da erro
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

    //valida os dados do paciente
    function validaPeso(peso) {
        if (peso >= 0 && peso <= 1000) {
            return true;
        } else {
            return false;
        }
    }

    //valida os dados do paciente
    function validaAltura(altura) {
        if (altura >= 0 && altura <= 3.0) {
            return true;
        } else {
            return false;
        }
    }

    //calcula o imc
    function calculaImc(peso, altura) {

        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
};
