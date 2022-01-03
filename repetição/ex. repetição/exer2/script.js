function contar() {
    var ini= document.getElementById('ini')
    var tab= document.getElementById('tab')

    if (ini.value.length == 0 ) {
        window.alert('[ERRO] Preencha todos os campos')
    }else {
        var i = Number(ini.value)
        var c = 0
        tab.innerHTML=''
        msg.innerHTML=''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text= `${i} x ${c} = ${i*c}`
            msg.innerHTML+=`${i} x ${c} = ${i*c} <br>`
            tab.appendChild(item)
            c++
        }
        msg.innerHTML+='<br> &#128079 Parabens!'
    } 
}
