
const filme = {
    título : 'Vingadores',
    ano : 2012,
    diretor : 'Fulano',
    personagem : 'Beltrano'
}


exibirPropriedades(filme)
function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] == 'string')
            console.log(prop, obj[prop])
}
