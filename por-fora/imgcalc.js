
function bmiCalculator(weight, height){
    var calcBMI = Math.floor (weight / (height * height))
    return calcBMI
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)