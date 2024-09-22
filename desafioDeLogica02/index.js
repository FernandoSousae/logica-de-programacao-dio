rank(80 , 2)

function rank(vitorias , derrotas){
    saldo = vitorias - derrotas
    if(saldo <= 10){
        console.log(`O herói tem saldo de ${saldo} e está no nível Ferro.`)
    } else if (saldo <= 20){
        console.log(`O herói tem saldo de ${saldo} e está no nível Bronze.`)
    } else if (saldo <= 50){
        console.log(`O herói tem saldo de ${saldo} e está no nível Prata.`)
    } else if (saldo <= 80){
        console.log(`O herói tem saldo de ${saldo} e está no nível Ouro.`)
    } else if (saldo <= 90){
        console.log(`O herói tem saldo de ${saldo} e está no nível Diamante.`)
    } else if (saldo <= 100){
        console.log(`O herói tem saldo de ${saldo} e está no nível Lendário.`)
    } else{
        console.log(`O herói tem saldo de ${saldo} e está no nível Imortal.`)
    } 
}