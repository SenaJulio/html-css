 function parimpar(n) {
    if(n%2 == 0) {
        return 'par'
    } else{
        return 'impar'
    }
   
} 
console.log(parimpar(240))
/*
5! = 5x4x3x2x1
5! = 5 x 4!
n! = n x (n-1)!
*/

function fatorial (n){
    let fat = 1
    for (let c=n;c > 1; c--){
        fat *=c
    }
    return fat
}
console.log(fatorial(100))