var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function(event){
    
    event.preventDefault();

    var form = document.querySelector("#form-adciona");  
     //A pegar o valor de um input por meio da propriedade .value
    // A acessar os input de um form por meio da propriedade _name_ 
   // var nome = form.nome.value;
   // var peso = form.peso.value;
    //var altura = form.altura.value;
    // var gordura = form.gordura.value;
//console.log(nome);
    var paciente = obtemPacienteDoFormulario(form);
//console.log(paciente);

// criando tr 
//Que a função criadora de elementos é .createElement()
   // var pacienteTr = document.createElement("tr");
//criando tb
//     var nomeTd = document.createElement("td");
//     var pesoTd = document.createElement("td");
//     var alturaTd = document.createElement("td");
//     var gorduraTd = document.createElement("td");
//     var imcTd = document.createElement("td");

// //adcionando valor no td
//     nomeTd.textContent = paciente.nome;
//     pesoTd.textContent = paciente.peso;
//     alturaTd.textContent = paciente.altura;
//     gorduraTd.textContent = paciente.gordura;
//     imcTd.textContent= paciente.imc;
    //imcTd.textContent= calculaImc(peso, altura);
//adcionando td na tabela tr
//A adicionar elementos na página e dentro de outros elementos com a função appendChild()
    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);
//pegando a tabela no site
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

   // if (!validaPaciente(paciente)) {
    // if(erro.length > 0){
    //     var mensagemErro = document.querySelector("#mensagem-erro");
    //    // console.log("Paciente inválido");
    //      mensagemErro.textContent = erros;
    //     return;
    // }
    var erros = validaPaciente(paciente);
    //console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
    return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
//adcionando a nova linha na tabela 
   tabela.appendChild(pacienteTr);

    //limpado campos 
    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML="";

    // var mensagensErro = document.querySelector("#mensagens-erro");
    // mensagensErro.innerHTML = ""; 

//    console.log("Voce clicou no botao")

});
//console.log(botaoAdcionar);


function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
       // delete: '<i class="fa fa-trash" aria-hidden="true"></i>'
    }
    return paciente
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");    
    pacienteTr.classList.add("paciente");
    // var nomeTd = document.createElement("td");
    // nomeTd.classList.add("info-nome");
    // nomeTd.textContent = paciente.nome;
    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");
    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;
    // var nomeTd = montaTd(paciente.nome, "info-nome")
    // var pesoTd = montaTd(paciente.peso, "info-peso")
    // var alturaTd = montaTd(paciente.altura, "info-altura")
    // var gorduraTd = montaTd(paciente.gordura, "info-gordura")
    // var imcTd = montaTd(paciente.imc, "info-imc")
///ou 

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild( montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild( montaTd(paciente.imc, "info-imc"));
   // pacienteTr.appendChild( montaTd(paciente.delete, "info-delete"));

    return pacienteTr;

}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
      return td;
}

function validaPaciente(paciente){
    // if (validaPeso(paciente.peso)) {
    //     return "";
    // } else {
    //     return "Peso invalido!";
    // }

    // if(validaAltura(paciente.altura)){
    //     return ""
    // }else{
    //     return"A altura é inválido!"
    // }

    var erros = [];
    //A função push para colocar elementos dentro de um array
    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

    if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");

    if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    return erros;
    
}

function exibeMensagensDeErro(erros){
   
    var ul = document.querySelector("#mensagens-erro");
    //A propriedade innerHTML dos elementos, que foi usada para apagar os itens da <ul>
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
