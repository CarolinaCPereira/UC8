const Today = new Date;
DataDoEvento = new Date ("2022-08-02"); 

console.log ("Inserir data do evento ano-mês-dia")
console.log ("--------------------")

if (DataDoEvento > Today) {console.log ("cadastro permitido")}
else {console.log ( "cadastro não permitido: data inválida")}

console.log ("--------------------")

let IdadeDoParticipante = 11
console.log ("Inserir idade do participante")

if ( IdadeDoParticipante < 18) {console.log ("cadastro não permitido: idade mínima não alcançada")}
else {console.log (" cadastro permitido")}

console.log ("--------------------")

let ListaDeParticipantes = 112;
console.log ("Inserir Lista de Participantes")

if ( ListaDeParticipantes < 100 ) {console.log ("cadastro permitido")}
else {console.log (" cadastro não permitido: excesso de participantes")}

console.log ("--------------------")



