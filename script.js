function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}h${minuto}min${segundo}s`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotoManha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'fotoTarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!
        img.src = 'fotoNoite.jpg'
        document.body.style.background = '#515154'
    }
}

setInterval(() => {
    carregar()
}, 1000);