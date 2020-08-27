///// GLBOBAL VARIABLES \\\\\
/ Game End // Close // Save // Initials // High \\
var startBtn = document.getElementById("startButton");
var submitBtn = document.querySelector("submit");
var saveBtn = document.querySelector("#save");

var timerEl = document.getElementById("timer");


var time = questions.length * 60;  // Assumes 10 seconds per ques.
var questions = document.getElementById("quiz");
var choices = document.getElementById("choices"); 

/
var highScoreClick = document.querySelector("highScoreClick")
// Questions Array // Objects: /Choices /Answers \\
var questionsForm = document.querySelector("#questionsFrom")
var currentQuestion = document.querySelector("#currentQuestion")

var questionOpt = docuement.querySelector("#questionOpt") //this is the "il"
var currentId = 0;
var questionIndex = 0; // This may be negative number per *class afterhours notes page12
var playerChoice;


///// HIGH SCORES \\\\\
var playerInitials = document.querySelector("#playerInitials");
var highScoreLog = document.querySelector("#highScoreLog")
var highScores = []; // double check syntax
var highScoreForm = document.querySelector("#highScoreForm")
var questionBox = document.querySelector("#questionBox")
var design2

///// QUIZ QUESTIONS \\\\\

var quizQuestions = [
    {
        question: "How do you print the working directory within the MAC terminal command line?",
        choices: ["touch", "rm", "pwd", "git", "mv"],
        answer: "pwd"
    },
    
    {
        question: "What does an HTML document begin with?",
        choices: ["The <end> tag", "a for loop", "iframe", "<!DOCTYPE html>", "body tag"],
        answer: "!DOCTYPE html>"
    },
    
    {
        question: "What is a hyperlink?",
        choices: ["javascript", "CSS", "a color", "HTML", "table"],
        answer: "HTML"
    },
    
    {
        question: "What is the largest heading tag in HTML?",
        choices: ["h1", "h2", "h3", "h4", "h5"],
        answer: "h1"
    },
    
    {
        question: "Choose the semantic element below?",
        choices: ["block", "blue", "<article>", "table", "svg"],
        answer: "<article>"
    }
    
];

 ///// TIMER \\\\\  
 
 //  Timer begins after the game has been initiated. The First question is then presented. //
var timer = document.getElementById("timer");
var currentTimer = 60;
var outOfTime = document.querySelector("#outoftime")
var score = 0; // Move to timer section 


//  WHEN I click the start button
function startTimer() {
    event.preventDefault()
    startBtn.style.display = "none"; //hide
    
    var timeInterval = setInterval(function () {
        timerEl.textContent = "Time Remaining : " + currentTimer;
        currentTimer--;

        if  (currentTimer === 0) {
            timer.textContent = "OUT OF TIME!";
            currentQuestion.textContent = "";
            optionsUl.style.display = "none";
            savesScore(event); 
            clearInterval(timeInterval);
        
        } else if (index > quizQuestions.length -1) {
            timer.text.Content = "";
            saveScore();
            clearInterval(timeInterval);
        }

    }, 1000);
    startQuiz(1);
}

var userChoices;
function startQuiz()direction;

    index += direction;
    currentQuestion.textContecnt = """;
    optionsUl.innerHTML = "";
    currentQuestion.textContent = quiz(index).question;
    userChoices = quiz[index].choices;

    userChoices.forEach(function (option) {
        var optionsLi = document.createElement("Li");
        optionsLi.style.margin = "10px";
        var optionsBtn = document.createElement("button");
        option.style.width = "200px";

        optionsLi.appendChild(optionBtn);
        optionBtn.textContent = option;
        questionsUl.appendChild(optionsUl);
        optionsLi.addEventListener("click", (checkAnswer);



    }); 


}

///// CHECKING FOR CORRECT ANSWER \\\\\

function checkAnswer(event) {
    var element = event.target;
    if (element.textContent) === quiz[index].answer) {
        score++;
        alert("Correct")


}

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
XX
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
 
 