let ListaDeAlunos = ["Ana", "Rachel", "Fernanda", "Beth", "Verônica", "Yvone", "Mariana", "Claudia", "Alice", "Renata"];
console.log (ListaDeAlunos.length)

for (let index = 0; index < ListaDeAlunos.length; index++) {
    //const element = array[index]
    console.log(index)
    
if (index == 0) {
console.log("zero localizado: " + ListaDeAlunos[index])
} 

else if (index % 2 == 0) {
    console.log("número par: " + ListaDeAlunos[index])
 } 
 else
    console.log ("número ímpar: " + ListaDeAlunos[index])}
