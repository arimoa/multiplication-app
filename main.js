var answer=document.getElementById("answer");
var question=document.getElementById("question");
var btn=document.getElementById("btn");
var scoreEl=document.getElementById("score");
var x,y;
var score=0;
x=Math.floor(Math.random() * 10);
y=Math.floor(Math.random() * 10);
question.innerHTML=`What is ${x} multiply by ${y}?`;

btn.addEventListener("click",myfun);
function myfun() {
    
    if (answer.value==(x*y)){
        score++;
    } else {
        score--;
    }
    scoreEl.innerHTML=`Score: ${score}`;
    x=Math.floor(Math.random() * 10);
    y=Math.floor(Math.random() * 10);
    question.innerHTML=`What is ${x} multiply by ${y}?`;
    answer.value="";
}
