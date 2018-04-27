//This keeps track of the scores
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let choice;
let countStartNumber = 0;
let timeLeft = 30;


//Questions Array
var questions = [{
  q: "How many seasons are there of Friends?",
  answer: ['10', '17', '4', '9'],
  correct: "10",
  images: "assets/images/friends.jpg"
}, {
  q: "What acress played Rachel?",
  answer: ['Jennifer Love Hewitt', 'Julia Roberts', 'Jennifer Aniston', 'George Tekei'],
  correct: "Jennifer Aniston",
  images: "assets/images/friends.jpg"
}, {
  q: "What was the name of the coffee shop they used to go to?",
  answer: ['Central Coffee', 'Central Park', 'Central Perk', 'Central Tea'],
  correct: "Central Perk",
  images: "assets/images/friends.jpg"
}];

function timer(){
  $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
  function less(){
    if (timeLeft == 0) {
      $(".timer").html("<b>0 Seconds left</b>");
      alert("Time is up");
      unanswered++;
      $(".score").html("<div><span class=scores well well-sm>Correct: <span class='badge'>"+ correct +"</span> | Incorrect: <span class='badge'>"+ correct +"</span> | Unanswered: <span class='badge'>" + unanswered + "</span> </span></div>");
      clearTimeout(tid);    
    } else {
      timeLeft--;
      $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
      console.log(timeLeft);
    }
  }
 let tid = setInterval(less, 1000);
}

//For each Question, reset the timer
function nextQuestion(){
  timeLeft = 30;
    timer();

  for (var i = 0; i < questions.length; i++) {

     $(".question").html('<h2>' + questions[i].q + '</h2>' );

     $(".answer").html('<form>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[0]+'">  ' + questions[i].answer[0] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[1]+'">  ' + questions[i].answer[1] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[2]+'">  ' + questions[i].answer[2] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[3]+'">  ' + questions[i].answer[3] + '</p>');
//Figure a way to make the selected value equal the users choice
      function chosen(){
        alert('Clicked '+ questions[i].answer[i]);
        choice = document.getElementById("myRadio").value;
        console.log(choice);
      }
   }  
}

//Start function
function startGame(){
  alert("You will have 30 seconds for each question. \n You can now begin the game");
  nextQuestion();
}

function reset(){
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  choice = null;
  countStartNumber = 0;
  $(".timer").html("<div></div>");
  $(".score").html("<div></div>");
  $(".question").html("<div></div>");
  $(".answer").html("<div></div>");
}

//Buttons
$('.start').click(startGame);
$('.resetbtn').click(reset);