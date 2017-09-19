var inquirer = require("inquirer");

function BasicCard(front, back) {
  this.front = front;
  this.back = back;

  var questions = [];
  var answers = [];
  questions.push(this.front);
  answers.push(this.back);

  this.print = function() {
    console.log(this.front);
    console.log(this.back);
  }

  this.compare  = function(answers) {
    // console.log(nganswers);
  }
};

var firstCard = new BasicCard("The Battle of Normandy is also known as...?", "d day");
var secondCard = new BasicCard("When did WW2 began in...", 1939);
var thirdCard = new BasicCard("...Khan founded the Mongol Empire.", "genghis");
var fourthCard = new BasicCard("Jimmy Carter was the first president to be born in a...", "hospital");

var answers = [];
var score =0;
var play = function() {
  inquirer.prompt([
    {
      name:"answer1",
      message: "The Battle of Normandy is also known as...?"
    },
    {
      name:"answer2",
      message: "World War 2 begin in..."
    },
    {
      name:"answer3",
      message: "...Khan founded the Mongol Empire."
    },
    {
      name:"answer4",
      message: "Jimmy Carter was the first president to be born in a..."
    }
  ]).then(function(response){
    answers.push(response.answer1);
    answers.push(response.answer2);
    answers.push(response.answer3);
    answers.push(response.answer4);
    console.log(answers);
    // answers.compare();
  })
}
play();
module.exports = BasicCard;
