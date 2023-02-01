const resultado = fizzBuzz(11)
alert(resultado)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return('Não é um Número')
    if (entrada % 3 == 0 && entrada % 5 == 0)
        return('FizzBuzz')
    if(entrada % 3 == 0)
        return('Fizz')
    if (entrada % 5 == 0)
        return('Buzz')
    if (entrada % 3 !== 0 && entrada % 5 !== 0)
        return(entrada)
} 