function trocarImagem(filename,esposaname) {
    document.querySelector('.imagem').setAttribute('src','assets/images/'+filename);
    document.querySelector('.imagem').setAttribute('data-esposa',esposaname);
}
function pegarEsposa() {
    let esposa = document.querySelector('.imagem').getAttribute('data-esposa');
alert("A roupa da esposa é:"+esposa);
}