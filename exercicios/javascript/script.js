function azul(){
    limpar();
    document.getElementById("titulo").classList.add('azul');
}
function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}
function verde(){
    limpar();
    document.getElementById("titulo").classList.add('verde');
}
function limpar(){
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}
function mostrartelefone(elemento){
    elemento.style.display = 'none';
    document.getElementById("telefone").style.display = "block";

}



let nome = 'Bonieky silva leal';

let resultado = nome.split('');

console.log(resultado);





function subirTela(){
    window.scrollTo({
        top: 0,
         behavior: 'smooth'
    });
}

function decidirBotaoScroll() {
    if(window .scrollY === 0) {    
    //ocultar o botão
    document.querySelector('.scrollbutton').style.display = 'none';
} else {
    //mostrar botão
    document.querySelector ('.scrollbutton').style.display ='block';
}
  }
window.addEventListener('scroll', decidirBotaoScroll);
window.alert('minha primeira mensagem')
window.confirm('está gostando do curso?')
window.prompt('Qual o seu nome?')



