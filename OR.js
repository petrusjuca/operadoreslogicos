// OR (//) - nosso boneco so pode sair se tiver sem chuva OU com guarda chuva 
/* O operador OR é usado para verificar se pelo menos uma das condições é verdadeira.
Em programação, ele retorna True quando qualquer uma das expressões é verdadeira, e só retorna False quando todas são falsas. Exemplo: A OR B.
*/

let item = "guarda chuva"
let tempo = "chuva"
let sair = (item === "guarda chuva" ) // ( tempo === "chuva")

console.log("seu personagem pode sair" + sair)
