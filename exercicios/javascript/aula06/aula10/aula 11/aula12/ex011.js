var idade = 22
if (idade < 16){
    console.log ('não vota')
}else if (idade < 18 || idade > 67){
    console.log('voto opcional')
}
    else {
        console.log("voto obrigatorio")
    
}
var agora = new Date()
var hora = agora.getMilliseconds