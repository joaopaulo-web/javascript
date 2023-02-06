var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

var yourName = prompt('Qual o seu nome?')

if (guestList.includes(yourName)){
    alert('Seja bem vindo!')
} else{
    alert('Desculpe, você não esta na lista de convidados.')
}
   