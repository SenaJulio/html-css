/*
var x = 10;
var y = 25 ;
var total = x + y;
alert(total);

var nome = 'julio';
var sobrenome = 'sena';
var total = nome +" "+sobrenome;
alert(total)
*/


 /*var hora = 17;
 
if (hora < 12) {
    console.log("Bom dia");
} else if (hora <18) {
    console.log("Boa tarde")

}else if (hora <= 23){
    console.log("Boa noite");
}
*/
/*
var hora = 15

if (hora > 12 && hora <= 18){
    console .log("Boa Tarde")
}
*/
/*var hora = 18

if (hora == 12 ||hora ==18) {
    console.log("Você está na hora do Rush")

    
}
*/

/*
var a = 10
var b = 20
console.log(a + b)

var a = 7
var b = 8
console.log(a + b)
*/

/*var a = 20
var b = 30

function soma(a,b){
    return a+b;
}
console.log(soma(a,b));
*/
/*

function parimp(n){  
if(n % 2 == 0){
    return 'par'
}else{
    return 'impar'
}
}
let res = parimp (43 , 50)
console.log(res)
*/
/*
function soma( n1, n2){
    return n1 + n2
}
console.log(soma(85, 223))
*/
function fatorial (n){
    let fat = 1
    for(let c = n; c > 1; c --){
        fat *= c

    }
    return fat 
}
console.log(fatorial(16))