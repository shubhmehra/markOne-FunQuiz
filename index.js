var readLineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0;
var userName = readLineSync.question(chalk.blue.bgRed("What is your name? \n"))

function quiz(question, answer) {
  let userAnswer = readLineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(answer);
    console.log("You are right! Your score is :", 
    ++score);
  } else {
    console.log("You are wrong! Your score is :", score == 0 ? 0 : --score);
  }

  console.log("----------------------")
}
var question = [
  {
    question: "Who is my favorite superhero?",
    answer: "Batman"
  }, 
  {
    question: "What is my favorite sad song?",
    answer: "Starboy"
  },
  {
    question: "What is my favorite food?",
    answer: "Pasta"
  },
  {
    question: "What is my favorite video game?",
    answer: "Valorant"
  },
  {
    question: "What is my favourite book?",
    answer: "atomic habits"
  },
]

for(i=0; i<question.length; i++) {
  quiz(question[i].question, question[i].answer)
}

console.log(userName.toUpperCase() + ", Your score is :" + score);

var highscore = {
  name : 'SHUBHAM',
  score : '3'
}

if (Number(highscore.score) < Number(score)) {
  highscore.name = userName
  highscore.score = score
}
console.log("Highscores: " +highscore.name+" "+highscore.score)