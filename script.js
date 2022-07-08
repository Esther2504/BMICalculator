

function calculateBMI() {
    let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let BMI = weight / ((height / 100) * (height / 100))
let BMI2 = Math.round(BMI * 10) / 10;
let bmi = document.getElementById("bmi");

if (BMI < 18.5) {
    bmi.innerHTML += `<p>Je BMI is ${BMI2}</p><p>Je hebt ondergewicht</p>`
} else if (BMI >= 18.5 && BMI < 25) {
    bmi.innerHTML += `<p>Je BMI is ${BMI2}</p><p>Je hebt een gezond gewicht</p>`
} else {
    bmi.innerHTML += `<p>Je BMI is ${BMI2}</p><p>Je hebt overgewicht</p>`
}

}





