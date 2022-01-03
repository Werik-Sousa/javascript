function carregar() {
    var img = window.document.getElementById('foto')
    var ola = window.document.getElementById('ola')
    var msg = window.document.getElementById('msg')
    var data= new Date()
    var hora= data.getHours()
    ola.innerHTML= `Agora são <strong>${hora}</strong> horas`
    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/manha.png'
        msg.innerHTML= `<strong> Bom dia </strong>`
        document.body.style.background = '#FFA500'
    }else if (hora > 12 && hora <= 17){ 
        img.src= 'imagens/tarde.png'
        msg.innerHTML= `<strong> Boa tarde </strong>`
    }else if (hora >= 18 && hora <=19){
        img.src = 'imagens/anoitecer.png'
        msg.innerHTML= `<strong> Bom fim tarde </strong>`
        document.body.style.background = '#008080'
    }else {
        img.src='imagens/noite.png'
        msg.innerHTML= `<strong> Boa noite </strong>`
        document.body.style.background = '#696969'
    }
}