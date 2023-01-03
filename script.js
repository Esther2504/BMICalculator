

function calculateBMI() {
    let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
console.log(weight)

let BMI = weight / ((height / 100) * (height / 100))
let BMI2 = Math.round(BMI * 10) / 10;
let description = document.getElementById("description");
let bmi = document.getElementById("bmi");

if (BMI < 18.5) {
    description.innerText = `<p>Je BMI is ${BMI2}</p><p>Je hebt ondergewicht. Probeer aan te komen. Een gezond BMI ligt tussen de 18.5 en 25.</p>`
} else if (BMI >= 18.5 && BMI < 25) {
    description.innerText = `<p>Je BMI is ${BMI2}</p><p>Je hebt een gezond gewicht.</p>`
} else if (BMI < 16) {
    description.innerText = `<p>Je BMI is ${BMI2}</p><p>Je hebt ernstig ondergewicht. Probeer aan te komen.</p>`
} else if (BMI > 30) {
    description.innerText = `<p>Je BMI is ${BMI2}</p><p>Je hebt obesitas</p>`
} else {
    description.innerText = `<p>Je BMI is ${BMI2}</p><p>Je hebt overgewicht. Probeer af te vallen.</p>`
}

bmi.innerText = BMI2

}

function calculateCM() {
    let foot = document.getElementById("feet").value;
let inches = document.getElementById("inches").value;
let result = (foot * 30.48) + (inches * 2.54)
let cm = document.getElementById("cm");
console.log(result)

    cm.innerHTML += `<p>${result} cm</p>`

}






