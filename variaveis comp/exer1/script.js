var num= document.getElementById('textnum')
var lista= document.getElementById('lista')
var res= document.getElementById('res') 
let valores = []

function isNumero (n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false 
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `the value ${num.value} was added`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] valor invalido ou repetido')
    }
    num.value = ''
    num.focus()
}

    function analisar() {
        if (valores.length == 0) {
            window.alert('[ERRO] Adicione valores a lista')
        } else {
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0 
            var media = 0
            for(var pos in valores){
                soma += valores[pos]
                media = soma/tot
                if (valores[pos] > maior) {
                    maior = valores[pos]
                }else if (valores [pos] < menor) {
                    menor = valores[pos] 
                }
        }
            }
            res.innerHTML = ''
            res.innerHTML += `<p>Temos um total de ${tot} numeros cadastrados</p>`
            res.innerHTML += `<p>O maior numero registrado foi o ${maior}`
            res.innerHTML += `<p>O menor numero registrado foi o ${menor}`
            res.innerHTML += `<p>A soma dos valores registrados é ${soma}`
            res.innerHTML += `<p>A media dos valores foi de ${media}`

    }

        
    