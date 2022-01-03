function contar() {
    var ini= document.getElementById('ini')
    var fim= document.getElementById('fim')
    var pul= document.getElementById('pul')
    var msg= document.getElementById('msg')

    if (ini.value.length == 0 || fim.value.length == 0 ||pul.value.length == 0 ) {
        window.alert('[ERRO] Preencha todos os campos')
    }
        msg.innerHTML=`Contando...<br> `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pul.value)
        if (p<=0) {
            window.alert('valor de pulo invalido, considerando valor 1')
            p=1
        }
        if (i<f) {
            for(var c = i; c<= f; c += p ){
            msg.innerHTML+=`&#128073 ${c}<br>`
        }} else if (f<i){
            for(var c = i; c >= f; c -= p ){
                msg.innerHTML+=`&#128073 ${c}`
            }
        }
        msg.innerHTML+='<br> &#128079 Parabens!'
    } 

