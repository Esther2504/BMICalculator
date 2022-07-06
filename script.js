

function calculateBMI() {
    let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let BMI = weight / ((height / 100) * (height / 100))
let BMI2 = Math.round(BMI * 10) / 10;
let bmi = document.getElementById("bmi");
bmi.innerText = `Je BMI is ${BMI2}.`;

}





