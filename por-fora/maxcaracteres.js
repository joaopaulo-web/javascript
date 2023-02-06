var message = prompt("Digite aqui a sua mensagem para o mundo:")
var messageNum = message.length;
var messageMax = 180
var messageDif = messageMax - messageNum
var messageCut = message.slice(0,180)


if (messageNum > 180){
    alert(`Sua mensagem esta com ${messageNum}. Infelizmente ela passou dos 180 caracteres disponíveis.`)
    alert(`Aqui esta a sua mensagem formatada para 180 caracteres: ${messageCut}`)
}else{
    alert(`Você escreveu ${messageNum} caracteres. Você possui ${messageDif} caracteres sobrando.`)
}
