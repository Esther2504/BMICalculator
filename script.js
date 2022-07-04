

function calculateBMI() {
    let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let BMI = weight / ((height / 100) * (height / 100))
let bmi = document.getElementById("bmi");
bmi.innerText = BMI

}





