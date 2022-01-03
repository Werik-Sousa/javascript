function verificar() {
    var data = new Date()
    var anoat = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.getElementById('res')
    if ( fano.value <= 1900 || fano.value > anoat) {
        window.alert('[ERRO] Verifique as infomações')
    }
    var sexo = document.getElementsByName('radsex')
    var idade = anoat - Number(fano.value)
    var gen = ''
    var foto = document.getElementById('foto')
    if (sexo[0].checked) {
        gen = 'homem'
        if (idade >= 0 && idade <= 5){
            foto.src = 'imagens/bb.png'
            res.innerHTML=`<strong>Olá BB</strong>`
        } else if (idade <= 10) {
                foto.src ='imagens/crime.png'
                res.innerHTML=`<strong>Você é geração Z</strong>`
        } else if (idade <=21){
            foto.src = 'imagens/adoh.png'
            res.innerHTML=`<strong>Você é geração Z</strong>`
        } else if (idade <= 30) {
                foto.src= 'imagens/aduh.png'
                res.innerHTML=`<strong>Você é Milleniun</strong>`
        } else if (idade <= 50) {
            foto.src= 'imagens/aduh.png'
            res.innerHTML=`<strong> Você é Boomer</strong>`
        } else {
            foto.src = 'imagens/idoh.png'
            res.innerHTML=`<strong> Você é Baby Boomer</strong>`
        }
    } else if (sexo[1].checked) {
        gen = 'mulher'
        if (idade >= 0 && idade <= 5){
        foto.src = 'imagens/bb.png'
        res.innerHTML=`<strong>Olá BB</strong>`
    }   else if (idade <= 10) {
            foto.src ='imagens/crim.png'
            res.innerHTML=`<strong>Você é geração Z</strong>`
    }   else if (idade <=21){
        foto.src = 'imagens/adom.png'
        res.innerHTML=`<strong>Você é geração Z</strong>`
    }   else if (idade <= 30) {
            foto.src= 'imagens/adum.png'
            res.innerHTML=`<strong>Você é Milleniun</strong>`
    }   else if (idade <= 50) {
        foto.src= 'imagens/adum.png'
        res.innerHTML=`<strong> Você é Boomer</strong>`
    }   else {
        foto.src = 'imagens/idom.png'
        res.innerHTML=`<strong> Você é Baby Boomer</strong>`
    }
    }
}
