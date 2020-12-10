// UI elements
var question = document.getElementById("question");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var currentQuestion = document.getElementById("questionNumber");
var answerImg = document.getElementById("answerImg");
var restartBtn = document.getElementById("restartBtn");
// containers
var startCont = document.getElementById("startScreen");
var questCont = document.getElementById("questCont");
var resultsCont = document.getElementById("resultsCont");
var completeImg = document.getElementById("completeImg");

// questions data array
var questionsArray = [
  {
    question: "What is the capital of Japan?",
    imgSrc: "http://gph.is/2ycqZl4",
    choiceA: "Tokyo",
    choiceB: "Kyoto",
    choiceC: "Taiwan",
    choiceD: "Beijing",
    correct: "A",
  },
  {
    question: "What is the capital of Spain?",
    imgSrc: "http://gph.is/2ycqZl4",
    choiceA: "Sevilla",
    choiceB: "Medellin",
    choiceC: "Barcelona",
    choiceD: "Madrid",
    correct: "D",
  },
  {
    question: "What is the capital of Ukraine?",
    imgSrc: "http://gph.is/2ycqZl4",
    choiceA: "Shevchenko",
    choiceB: "Verdansk",
    choiceC: "Kyiv",
    choiceD: "Ekaterinburg",
    correct: "C",
  },
  {
    question: "What is the capital of Guatemala?",
    imgSrc: "http://gph.is/2ycqZl4",
    choiceA: "El Salvador",
    choiceB: "Guatemala City",
    choiceC: "What-emala?",
    choiceD: "Pupusas",
    correct: "B",
  },
  {
    question: "What is the capital of Brazil?",
    imgSrc: "http://gph.is/2ycqZl4",
    choiceA: "Rio de Janeiro",
    choiceB: "Brasilia",
    choiceC: "Texas de Brazil",
    choiceD: "Ronaldinho",
    correct: "B",
  },
];

// starting variables
var index = 0;
var score = 0;
var totalQuestions = questionsArray.length - 1;

// add event listeners button options
optionA.addEventListener("click", checkAnswer);
optionB.addEventListener("click", checkAnswer);
optionC.addEventListener("click", checkAnswer);
optionD.addEventListener("click", checkAnswer);

renderQuestions();

// defining all functions
// app starts
function startQuiz() {
  startCont.style.display = "none";
  questCont.style.display = "block";
  renderQuestions();
  //start timer
  startTimer();
  console.log("startQuiz");
}

// present questions to user
function renderQuestions() {
  question.innerHTML = "<h1>" + questionsArray[index].question + "</h1>";
  optionA.innerHTML = "<p>" + questionsArray[index].choiceA + "</p>";
  optionB.innerHTML = "<p>" + questionsArray[index].choiceB + "</p>";
  optionC.innerHTML = "<p>" + questionsArray[index].choiceC + "</p>";
  optionD.innerHTML = "<p>" + questionsArray[index].choiceD + "</p>";
  currentQuestion.innerHTML = index + 1;
}

// start timer for app. 90 seconds
function startTimer() {
  console.log("timer started");
  //add logic to start timer
}

// check if answer selected is correct
function checkAnswer() {
  index++;

  //  index counter and quiz to stop after Question# 5
  if (index <= totalQuestions) {
    renderQuestions();
  } else {
    questCont.style.display = "none";
    resultsCont.style.display = "block";
    scoreDisplay.innerHTML = score;

    //Display pass or fail gif
    if (score >= 3) {
      completeImg.setAttribute("src", "./assets/giphy-complete.webp");
    } else {
      completeImg.setAttribute("src", "./assets/giphy-wrong.webp");
    }
  }
}

// check answer agaist question arrays
function checkAnswerResult(answer) {
  console.log("option coming from html", answer);
  if (answer == questionsArray[index].correct) {
    score++;
    console.log("outside test");
    //raise score on UI
    console.log("your score is ", score);
    console.log("right answer");
  } else {
    console.log("incorrect");
    console.log(score);
  }
}

//Restart Quiz
function restartQuiz() {
  resultsCont.style.display = "none";
  startCont.style.display = "block";
  index = 0;
  score = 0;
}
