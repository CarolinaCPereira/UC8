
let DataAtual = new Date (2022,8,15); 
let DataDoEvento = new Date (2022,10,10)
console.log (DataDoEvento)

if (DataDoEvento > DataAtual) {console.log ("cadastre o evento")}
    else {console.log ( "cadastro não permitido: data inválida")}

console.log ("--------------------")

let IdadeDoParticipante = 11

if ( IdadeDoParticipante < 18) {console.log ("cadastro não permitido: idade mínima não alcançada")}
    else {console.log (" cadastro permitido")}
    console.log (IdadeDoParticipante + " anos")

console.log ("--------------------")

let listaDeParticipantes = ["Helena", "Fernanda", "Milena", "Mariana", "Maria", "Ana", "Leda", "Elaine", "Yvone", "Claudia", "Lina", "Alice"];
 let quantidadeDeParticipantes = listaDeParticipantes.length;
 
if ( quantidadeDeParticipantes < 100 ) {console.log ("cadastro permitido")}
    else {console.log (" cadastro não permitido: excesso de participantes")}

console.log ("--------------------")



