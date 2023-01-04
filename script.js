

function calculateBMI() {
    let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;
let white = document.querySelector(".white");

white.style.opacity = 1

let BMI = weight / ((height / 100) * (height / 100))
let BMI2 = Math.round(BMI * 10) / 10;
let description = document.getElementById("description");
let bmi = document.getElementById("bmi");

if (BMI < 18.5) {
    description.innerText = `Je hebt ondergewicht. Een gezond BMI ligt tussen de 18.5 en 25.`
} else if (BMI >= 18.5 && BMI < 25) {
    description.innerText = `Je hebt een gezond gewicht. Een gezond BMI ligt tussen de 18.5 en 25.`
} else if (BMI >= 25 && BMI < 30) {
    description.innerText = `Je hebt overgewicht. Een gezond BMI ligt tussen de 18.5 en 25.`
} else if (BMI >= 30) {
    description.innerText = `Je hebt obesitas. Een gezond BMI ligt tussen de 18.5 en 25.`
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






