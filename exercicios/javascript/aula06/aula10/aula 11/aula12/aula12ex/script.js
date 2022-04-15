function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   
    msg.innerHTML = `Agora são ${hora}horas.`
    if (hora >=0 && hora < 12){
        //bom dia
        img.src = '../aula12ex/fotomanha.png'
    }else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = '../aula12ex/fototarde.png'
    }else {
      //boa noite
      img.src = '../aula12ex/fotonoite.png'
    }

    }
