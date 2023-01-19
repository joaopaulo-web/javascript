function idade(){
    var ano = window.document.getElementById('txtano')
    var anoconvertido = Number(ano.innerText)
    var resul = (2022 - ano)
    var res = window.document.getElementById('res')
    res.innerHTML = (`A idade digitada foi ${ano}`)
}