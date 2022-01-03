/*var msg= document.getElementById('msg')
var num=document.getElementById('num')
var n = Number(num.value)*/
/*function parimp(n){
    if (n%2==0) {
        return `par`
    } else {
        return `impar`
    }
}
console.log(parimp(7))

function soma(n1=0, n2=0) {
    return n1+n2
}
var ret = soma(5,8)
console.log(`a soma é ${ret}`)

function fatorial(n){
    var fat = 1
    for(var c = n;c > 1;c--){
    fat *= c
    }
    return fat 
}
console.log(fatorial(8)) */
// RECURSIVIDADE
function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n * fatorial (n-1)
    }
}
console.log(fatorial(5))