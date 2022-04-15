//selecionar elemento na tela;
document.getElementById() // é uma funçao
.innerHTML= //serve para trocar o Html que for selecionado.

document.getElementsByClassName() // sempre retorna um Array.
//para alterar um item use [].innerHTML = 'item alterado'.
//document.getElementsByTagName() // altera pelo nome da Tag

//document.getElementsByName() // acessar atraves do nome.

//document.querySelectorAll() // mais usado para selecionar
/*
function verde(){
    document.querySelector('.exemplo').classList.remove('vermelho');
    document.querySelector('.exemplo').classList.remove('azul');
    document.querySelector('.exemplo').classList.add('verde');

}

function vermelho(){
    document.querySelector('.exemplo').classList.remove('verde');
    document.querySelector('.exemplo').classList.remove('azul');
    document.querySelector('.exemplo').classList.add('vermelho');
}
function azul() {
    document.querySelector('.exemplo').classList.remove('vermelho');
    document.querySelector('.exemplo').classList.remove('verde');
    document.querySelector('.exemplo').classList.add('azul');
}

*/
/*
function verde(){
    document.querySelector('.exemplo').classList.remove('vermelho')
    document.querySelector('.exemplo').classList.remove('azul')
    document.querySelector('.exemplo').classList.add('verde')

}
function vermelho(){
document.querySelector('.exemplo').classList.add('vermelho')
document.querySelector('.exemplo').classList.remove('azul')
document.querySelector('.exemplo').classList.remove('verde')
}
function azul() {
    document.querySelector('.exemplo').classList.add('azul')

}
*/


function trocar(){
    if(document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto')
        document.querySelector('button').classList.add('verde')

    } else{
        document.querySelector('button').classList.remove('verde')
        document.querySelector('button').classList.add('preto')
    }
   
}
