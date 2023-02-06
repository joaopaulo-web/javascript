var p1 = prompt('Qual o seu nome?')
var p2 = prompt('Qual o seu nome do seu amor?')

function random(){
    var n = Math.random()
    n = n * 100
    n = Math.floor(n) + 1
    return n  
}

if ( random > 70){
    alert(`A possibilidade de ${p1} e ${p2} ficarem junto(as), é de ${random()}%. Nunca irão se separar!`)
} 

if ( random > 30 && random <= 70){
    alert(`A possibilidade de ${p1} e ${p2} ficarem junto(as), é de ${random()}%.`)
}

if ( random <= 30){
    alert(`A possibilidade de ${p1} e ${p2} ficarem junto(as), é de ${random()}%. Cuidado!`)
}


