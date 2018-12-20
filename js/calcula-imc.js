
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for (var i=0; i < pacientes.length; i++){

    var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc =  paciente.querySelector(".info-imc");

// var pesoEhValido =true;
// var alturaEhValida= true;

var pesoEhValido =validaPeso(peso);
var alturaEhValida= validaAltura(altura);

if(!pesoEhValido){    
    tdPeso.textContent = 'Peso inválido';
    //paciente.style.color="red";
   // paciente.style.backgroundColor="yellow";   
   pesoEhValido = false;
   paciente.classList.add("paciente-invalido");
}

if(!alturaEhValida){   
   tdAltura.textContent = 'Altura Inválida';   
   alturaEhValida = false; 
   paciente.classList.add("paciente-invalido");
}

if(pesoEhValido & alturaEhValida){
    //var imc =  peso / (altura * altura);
    //chamar uma funçao
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;    
}
}
//console.log(imc);

//titulo.addEventListener("click", mostraMensagem);
//ou funcão anomina 
//A escutar eventos do browser com a função addEventListener()
titulo.addEventListener("click",function(){
    console.log("Ola eu sou funcão anomina")
});

function mostraMensagem(){
    console.log("Ola eu fui clicado")
}

function calculaImc(peso, altura){

    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}





