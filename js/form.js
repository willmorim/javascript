var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    //seleciona o form
    var form = document.querySelector("#form-adiciona");

    //chama a função que pega os dados do paciente
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
        return;
    }

    //verifica se os dados do paciente é valido, caso invalido
    // ele não adiciona na tabela e da uma mensagem de erro
    if (!validaPaciente(paciente)) {
        console.log("paciente invalido");
        return;
    }

    //selecionando a tabela pelo id
    var tabela = document.querySelector("#tabela-pacientes");

    //inserindo o tr na tabela com o appendChild
    tabela.appendChild(pacienteTr);

    //reseta os dados dos campos para inserir o paciente no formulario
    form.reset();

    //variavel para limpar o formulario e as mensagens de erro após incluir um paciente válido
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    //função que pega os dados do paciente atravez de um objeto(var paciente)
    function obtemPacienteDoFormulario(form) {

        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.altura.value, form.peso.value) //chama a função calculaImc e passa os valores dentro dela
        }

        return paciente
    }

    //recebe um paciente como parametro e monta uma TR
    function montaTr(paciente) {

        //cria uma tr no document com o createElement
        var pacienteTr = document.createElement("tr");

        pacienteTr.classList.add("paciente");

        //colocando os td's dentro da tr, e chamando a função montaTd que passa o dado do paciente e a classe desse "dado"
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteTr;
    }

    //cria uma TD e adiciona um dado e uma classe
    function montaTd(dado, classe) {
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        return td;
    }

    //testa os dados do paciente para ver se é valido
    function validaPaciente(paciente) {

        var erros = [];

        if(paciente.nome.length == 0){
            erros.push("O nome não pode ser em branco");
        }

        if(paciente.peso.length == 0){
            erros.push("O peso não pode ser em branco");
        }

        if(paciente.altura.length == 0){
            erros.push("A altura não pode ser em branco");
        }

        if(paciente.gordura.length == 0){
            erros.push("A gordura não pode ser em branco");
        }

        if (!validaPeso(paciente.peso)) {
            erros.push("Peso é inválido!");
        }

        if (!validaAltura(paciente.altura)) {
            erros.push("Altura é inválida!");
        }

        return erros;
    }

    //função que vai criar a ul, pegar a mensagem de erro, incluir o LI no UL e limpar os erros exibidos conforme for sendo preenchido de forma correta com o innerHTML
    function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        })
    }
});
