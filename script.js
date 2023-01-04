function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let score = document.querySelector(".score-container");
  let description = document.getElementById("description");
  let bmiscore = document.getElementById("bmi");

  let BMI = Math.round(
    ((weight / ((height / 100) * (height / 100))) * 10) / 10
  );

  if (BMI < 18.5) {
    description.innerText = `Je hebt ondergewicht. Een gezond BMI ligt tussen de 18.5 en 25.`;
  } else if (BMI >= 18.5 && BMI < 25) {
    description.innerText = `Je hebt een gezond gewicht. Een gezond BMI ligt tussen de 18.5 en 25.`;
  } else if (BMI >= 25 && BMI < 30) {
    description.innerText = `Je hebt overgewicht. Een gezond BMI ligt tussen de 18.5 en 25.`;
  } else if (BMI >= 30) {
    description.innerText = `Je hebt obesitas. Een gezond BMI ligt tussen de 18.5 en 25.`;
  }

  score.style.opacity = 1;
  bmiscore.innerText = BMI;
}
