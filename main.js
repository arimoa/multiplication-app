const answer = document.getElementById("answer");
const question = document.getElementById("question");
const btn = document.getElementById("btn");
const scoreEl = document.getElementById("score");
let x, y;
let score = 0;
x = Math.floor(Math.random() * 10);
y = Math.floor(Math.random() * 10);
question.innerHTML = `What is ${x} multiply by ${y}?`;

btn.addEventListener("click", myfun);
function myfun() {
  if (answer.value == x * y) {
    score++;
  } else {
    score--;
  }
  scoreEl.innerHTML = `Score: ${score}`;
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);
  question.innerHTML = `What is ${x} multiply by ${y}?`;
  answer.value = "";
}
