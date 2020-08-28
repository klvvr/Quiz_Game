var quizQuestions = [
    {
        question: "How do you print the working directory within the MAC terminal command line?",
        choices: ["touch", "rm", "pwd", "git"],
        answer: "pwd"
    },
    
    {
        question: "What does an HTML document begin with?",
        choices: ["The <end> tag", "a for loop", "iframe", "<!DOCTYPE html>"],
        answer: "!DOCTYPE html>"
    },
    
    {
        question: "What is a hyperlink?",
        choices: ["javascript", "CSS", "a color", "HTML"],
        answer: "HTML"
    },
    
    {
        question: "What is the largest heading tag in HTML?",
        choices: ["h1", "h3", "h4", "h5"],
        answer: "h1"
    },
    
    {
        question: "Choose the semantic element below?",
        choices: ["blue", "<article>", "table", "svg"],
        answer: "<article>"
    }
    
];
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementsByClassName("submitBtn")

var timerEl = document.getElementById("time");
var submitScoreElement = document.querySelector("#submit-score");
var userScoreElement = document.getElementById("user-score");
var userNameInput;
var questionHead = document.getElementById("questions");
var choicesDiv = document.getElementById("choices");


var questionNumber = 0;
var time = quizQuestions.length * 15;

var answer;

var myInterval;

function isGameOver () {
    return ((time <= 0) || (questionNumber >= 5));
}

function setTimer() {
    time--;
    console.log(time)
    timerEl.textContent = time;
    
    if (isGameOver()) {
        // clearInterval(countdown);
        // setTimeout(displayScore, 500);
        alert('game over');

        clearInterval(myInterval);
        // remove current question
        // display end of game -> clear the question, show 'you're a loser.', show the enter initials, 
    }
};
 
 //  Timer begins after the game has been initiated. The First question is then presented. //
//  WHEN I click the start button
function startTimer() {

   // document.getElementById("home").classList.add('d-block'); // d-hide selector
    //document.getElementById("quiz").classList.add('d-block'); // d-hide selector
    startBtn.style.display = "none";
    ///// 60 Second Timer \\\\\
    myInterval = setInterval(setTimer, 1000)
}

// 
// quizQuestions
// +=====+=====+=====+=====+=====+  undefined
// |  0  |  1  |  2  |  3  |  4  |
// | q   | q   | q   | q   | q   |
// | c   | c   | c   | c   | c   |
// | a   | a   | a   | a   | a   |
// +=====+=====+=====+=====+=====+
//                            ^ 
//                        questionNumber
function checkAnswer(event) {
    event.stopPropagation();

    var userAnswer = event.srcElement.innerHTML;
    var currentQuestion = quizQuestions[questionNumber];

    console.log("The user answerd: " + userAnswer);
    console.log("The correct answer is " + currentQuestion.answer);

    if (currentQuestion.answer != userAnswer) {
        time = time-10
    }
    choicesDiv.innerHTML = "";
        questionNumber++; 
    if (isGameOver()) {
    
        displayScore();
    } else {
        makeQuestion();
    }
}

///////// Makes the qustion HTML for the current question \\\\\\\\\\
function makeQuestion() {
    questionHead.innerHTML = quizQuestions[questionNumber].question;
    choicesDiv.innerHTML = "";
    var list = document.createElement("ul");
    list.setAttribute("class", "answer-list");
    choicesDiv.appendChild(list);

    var choices = quizQuestions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var wrapperDiv = document.createElement("li");    // <div></div>

        var nextChoice = document.createElement("button");
        nextChoice.setAttribute("value", choices[q]);
        nextChoice.setAttribute("class", "btn btn-default");
        nextChoice.textContent = choices[q];
        nextChoice.addEventListener("click", checkAnswer);
        wrapperDiv.appendChild(nextChoice); // <button>

        list.appendChild(wrapperDiv); // <div><button/></div>
        //answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}

///// SCORE BOARD DISPLAY \\\\\
function displayScore() {
    document.getElementById("quiz").classList.remove('d-none'); // set to none
    document.getElementById("submit-score").classList.remove('d-block'); // set to none
    userScoreElement.textContent = "FINAL SCORE: " + secondsLeft + ".";
}

// function submit (event) {
//     event.stopPropagation();
//     addScore();
    
//     window.location.href = './high_scores.html'
// };

///// GAME START EVENT TIMERS \\\\
// Don't forget to tturn this back on.
//startBtn.addEventListener("click", startTimer);
//submitBtn.addEventListener("click", submit)

startBtn.addEventListener("click", function() { 
    startTimer();

    // Hide the start button.
    questionNumber = 0;
    time = quizQuestions.length * 15;
    makeQuestion();
});

function addScore () {
    userNameInput = document.getElementById("userName").value



var newScore = {
        name: userNameInput,
        score: secondsLeft
    };    

    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

    /// *******Should be able to push into array *******
    highScores.push(newScore)
    ///// **********
    localStorage.setItem("highScores", JSON.stringify(highScores));

}


function hideplayerNote(){
    var pElement = document.getElementsByClassName("playerNote")[0]
    pElement.style.display='style'
}



choices.addEventListener("click", function (event) {
    var pElement = document.getElementsByClassName("playerNote")[0]

    ///// ANSWER FUNCTION
    if (answer === event.target.textContent) {   
        pElement.innerHTML = "CORRECT!";
        questionNumber++;
        makeQuestions();
        
    } else {
        pElement.innerHTML = "INCORRECT.";
        time = time - 5;
        questionNumber++;
        makeQuestions()

    }    
   
});






    //submit button
//input initials


//start button is pressed calls startQuiz function
 //startBtn.onclick = startQuiz;



//function timerClock
 // time--;
 // rerender time 
 //check IF user ran of out time
 // -end our game, call a fucntion endQuiz;



// function startQuiz
    // hide start button
    // time = setInterval(timerClock, 1000)
    // call function to egt the questions, getQuestions


//function getQuestions
 //    gives us access to the one specific obj
 //var curQuest = questions[currentQuestIndex]
 // var questTitle = docuemnt.getElementById("question");
 //questTitles.textContent = curQuest.title
 // GRAB THE CHOICES
 // curQuest.choices.forEach(fucntion(choice, i){
   //  console.log(choice, i)
//  CRESTE NEW BUTTON FOR EACH CHOICE

// SET A CLASS ATTRIBUTE 
// SET A VALU ATTRIBUTE
//SET onclick for each button (nextQuestion)
//APPEND BUTTOND
 //              }


 //fucntion nextQuestion
 // check is answer is correct or wrong
 // console.log(this)
 // this.value !== questions[currentQuestionIndex].answer

 //currentQuestionIndex ++;
 

//  <!-- GIVEN I am taking a code quiz
//  THEN a timer starts and I am presented with a question
//  WHEN I answer a question
//  THEN I am presented with another question
//  WHEN I answer a question incorrectly
//  THEN time is subtracted from the clock
//  WHEN all questions are answered or the timer reaches 0
//  THEN the game is over
//  WHEN the game is over
//  THEN I can save my initials and score
//  ```
 
//  The following animation demonstrates the application functionality:
 
//  ![code quiz](./Assets/04-web-apis-homework-demo.gif)
 
//  ### Review
 
//  You are required to submit the following for review:
 
//  * The URL of the functional, deployed application.
 
//  * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project. -->
 
 /// original variables Declaration

 // var startBtn = document.getElementById("startButton");
// var submitBtn = document.querySelector("submit");
// var saveBtn = document.querySelector("#save");
// var timerEl = document.getElementById("timer");

// var time = questions.length * 60;  // Assumes 10 seconds per ques.

// var questionHead = document.getElementById("questions");
// var answerChoices = document.getElementById("answers"); 


// var highScoreClick = document.querySelector("highScoreClick")
// // Questions Array // Objects: /Choices /Answers \\
// var questionsForm = document.querySelector("#questionsFrom")
// var currentQuestion = document.querySelector("#currentQuestion")

// var questionOpt = docuement.querySelector("#questionOpt") //this is the "il"

// var questionIndex = -1; // This may be negative number per *class afterhours notes page12
// var playerChoice;


// ///// HIGH SCORES \\\\\
// var playerInitials = document.querySelector("#playerInitials");
// var highScoreLog = document.querySelector("#highScoreLog")
// var highScores = []; // double check syntax
// var highScoreForm = document.querySelector("#highScoreForm")
// var questionBox = document.querySelector("#questionBox")
// var design2

// var timer = document.getElementById("timer");
// var currentTimer = 60;
// var outOfTime = document.querySelector("#outoftime")
// var score = 0; // Move to timer section 
