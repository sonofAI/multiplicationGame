let num1 = Math.ceil(Math.random()*20);
let num2 = Math.ceil(Math.random()*20);

const correctAns = num1 * num2;

const userAns = document.getElementById("answer");

document.getElementById("question").innerText = `What is ${num1} by ${num2}?`;

let score = localStorage.getItem("score");
if (!score) {score = 0;}

document.getElementById("score").innerText = `score: ${score}`;

document.getElementById("form1").addEventListener("submit", checkAns);

function checkAns(ans) {
    if (userAns.value == correctAns) {
        score++;
        updateLocalStorage();
    }
    else {
        score--;
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
