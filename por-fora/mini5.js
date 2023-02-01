exibirTipo(10)

function exibirTipo(ateAqui){
    for (let i = 0; i <= ateAqui; i++)
        if(i % 2 == 0)
            console.log(i, 'Par')
        else{
            console.log(i,'Ímpar')
        }
}