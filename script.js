

function calculateBMI() {
    let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let BMI = weight / ((height / 100) * (height / 100))
let BMI2 = Math.round(BMI * 10) / 10;
let bmi = document.getElementById("bmi");
bmi.innerText = `Je BMI is ${BMI2}.`;

if (BMI < 18.5) {
    bmi.innerText += 'Je hebt ondergewicht'
} else if (BMI >= 18.5 && BMI < 25) {
    bmi.innerText += 'Je hebt een gezond gewicht'
} else {
    bmi.innerText += 'Je hebt overgewicht'
}

}





