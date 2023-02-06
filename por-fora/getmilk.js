function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("compre " + calcGarrafas(money, 1.5) + " garrafas de leite")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
      return calcTroco(money, 1.5)
  }
  
  function calcGarrafas(dinheiro, custoPorGarrafa){
      var garrafas = Math.floor(dinheiro / custoPorGarrafa)
      return garrafas
  }
  
  function calcTroco(money, custoPorGarrafa){
      var troco = money % custoPorGarrafa
      return troco
  }
  
  console.log("Aqui está o seu")