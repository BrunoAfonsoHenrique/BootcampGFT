function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!!!");
}

function redirecionar(){
    window.open("https://www.linkedin.com/pulse/brilhe-na-entrevista-perguntas-que-voc%C3%AA-pode-e-deve-fazer-gasparini/");
    
    //window.location.href = "ttps://www.linkedin.com/pulse/brilhe-na-entrevista-perguntas-que-voc%C3%AA-pode-e-deve-fazer-gasparini/"
}

function trocar(elemento){
    //alert("Trocar texto")
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse"
    elemento.innerHTML="Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML=="Passe o mouse aqui";
}
/*

function soma(n1, n2){
    return n1 + n2;
}
*/

//----------------------------------------------------------------------

/*var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));


//----------------------------------------------------------------------

/*
var data = new Date();
//alert(data);
alert(data.getDay());
alert(data.getHours());
alert(data.getMinutes());
alert(data.getDate());
*/

//---------------------------------------------------------------------

/*
for(cont=1; cont <= 5; cont++){
    console.log(cont);
}
*/

//---------------------------------------------------------------------

/*
var cont = 1;
while (cont <= 5){
    console.log(cont);
    cont += 1
}

*/

//---------------------------------------------------------------------

/*
var nome = prompt("Qual o seu nome? ")
var idade = prompt("Qual a sua idade? ");

console.log("Olá, " + nome + " WELCOME!!!")
if (idade >= 18){
    console.log("Maior de idade. A idade é " + idade)
}else{
    console.log("Menor de idade. A idade é " + idade)
}
*/

//---------------------------------------------------------------------

/*
var frutas = [{nome: "maça", cor:"vermelho"}, {nome:"uva", cor:"Roxo"}]
console.log(frutas)
console.log("Nome da fruta: " + frutas[0].nome)
console.log("Nome da fruta: " + frutas[1].nome)
*/

//-------------------------------------------------------------------

/*
var lista= ["maça", "uva", "laranja"];
console.log(lista[1]);
lista.push("manga");
console.log(lista);
//lista.pop();
console.log(lista);
console.log("Tamanho da lista " + lista.length);
//console.log("Lista reversa " + lista.reverse());

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

//---------------------------------------------------------------------

/*
var nome = "Bruno Afonso henrique";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo.";
alert("Bem vindo " + nome);
alert(nome + " tem " + idade + " anos.")
alert(idade + idade2)
console.log(nome)
console.log(idade + idade2);
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Brasil")) 
*/