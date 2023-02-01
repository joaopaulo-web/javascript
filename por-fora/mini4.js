const velocidade = verificadorDeVelocidade(80)

function verificadorDeVelocidade(velocidade){
    if(velocidade <= 70)
        alert('Dentro da Velocidade')
        else{
            const pontos = ((velocidade - 70) / 5)
            if (pontos >= 12)
                alert(`Você passou no radar a ${velocidade}Km/h. Com isso você acumulou ${pontos} pontos na carteira e a mesma foi suspensa.`)
            else{
                alert(`Hoje você não recebeu multa, mas por estar acima de 70Km/h, você recebeu ${pontos} pontos na carteira.`)
            }
}
}
