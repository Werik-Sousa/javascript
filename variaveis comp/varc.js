/*
var num =[2,5,8]
num [3] = 6 // adiciona o valor 6 ao campo 3 da variavel
num.push(7) // adiciona o valor 7 no proximo campo da variavel
num.length // para mostrar o comprimento da variavel
num.sort() // organiza em ordem os valores nos campos da variavel
num.indexOf(aqui vem o valor) // serve para achar um valor dentro de uma variavel (O em maisculo)
*/
var num = [2,5,8,9]
for(var pos=0;pos<num.length;pos++){
    console.log(num.indexOf(0))
}
for (var pos in num){
    console.log('------------------------------------')
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}