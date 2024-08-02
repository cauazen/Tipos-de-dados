let primeiroNome = "Nome"
let ultimoNome = "Sobrenome"
let nomeCompleto = primeiroNome + " " + ultimoNome
console.log(nomeCompleto)

let num1 = 10
let num2 = 20

let soma = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let divi = num1 / num2
console.log(soma + '\n' + sub + '\n' + multi + '\n' + divi)



let Chovendo = false
if(Chovendo){
    console.log("Está chovendo")
}else{
    console.log("Não está chovendo")
}


let resposta = null
let nota 

console.log("Resposta = " + resposta)
console.log("Nota = " + nota)

let idUnico = Symbol("id")
let produto = {
    [idUnico]: 123
    
}
console.log(produto[idUnico])