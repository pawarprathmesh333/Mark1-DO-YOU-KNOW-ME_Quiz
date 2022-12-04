var readline = require("readline-sync");
var score = 0;

function quiz(que, ans) {

var yourAns = readline.question(que);
if (yourAns === ans) {
    console.log("Correct!!");
    score++;
}
else {
    console.log("Wrong..:(");
}
console.log("Your Score :", score);
}

function play() {
var quizArr = [{
    question: "Which is my favorite IPL Team?",
    answer: "Mumbai"
},
{
    question: "Where do I work?",
    answer: "TCS"
},
{
    question: "Where did I completed my Graduation (City)?",
    answer: "Pune"
},
{
    question: "Do I eat chicken?",
    answer: "Yes"
},
{
    question: "Which is my favorite actress?",
    answer: "Shraddha"
},
{
    question: "In which year I was born?",
    answer: "2000"
}]

var userName = readline.question("What is your Name :");
console.log("Welcome", userName + ", to DO YOU KNOW ME quiz..!");
for (var i = 0; i < quizArr.length; i++) {
    quiz(quizArr[i].question, quizArr[i].answer);
}
console.log("Thanks for taking Quiz...:)");
console.log(userName, "Your Final Score : ", score);
}

function showHighScores() {
var highScores = [{ Name: "Atharva", Score: "5" }];
console.log("");
console.log("Check out High Score so far, If you got more than this plz ping me I will update it.");
console.log("");
console.log(highScores[0].Name + " : " + highScores[0].Score);
}

play();
showHighScores();