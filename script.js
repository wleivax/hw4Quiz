//UI elements
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



var questionsArray = [ 
    {
        question : "What is the capital of Japan?",
        imgSrc : "http://gph.is/2ycqZl4",
        choiceA : "Tokyo",
        choiceB : "Kyoto",
        choiceC : "Taiwan",
        choiceD : "Beijing",
        correct : "A"
    },{
        question : "What is the capital of Spain?",
        imgSrc : "http://gph.is/2ycqZl4",
        choiceA : "Sevilla",
        choiceB : "Medellin",
        choiceC : "Barcelona",
        choiceD : "Madrid",
        correct : "D" 
    },{
        question : "What is the capital of Ukraine?",
        imgSrc : "http://gph.is/2ycqZl4",
        choiceA : "Shevchenko",
        choiceB : "Verdansk",
        choiceC : "Kyiv",
        choiceD : "Ekaterinburg",
        correct : "C" 
    },{
        question : "What is the capital of Guatemala?",
        imgSrc : "http://gph.is/2ycqZl4",
        choiceA : "El Salvador",
        choiceB : "Guatemala City",
        choiceC : "What-emala?",
        choiceD : "Pupusas",
        correct : "B"  
    },{
        question : "What is the capital of Brazil?",
        imgSrc : "http://gph.is/2ycqZl4",
        choiceA : "Rio de Janeiro",
        choiceB : "Brasilia",
        choiceC : "Texas de Brazil",
        choiceD : "Ronaldinho",
        correct : "B" 
    }
];

var index = 0;
var score = 0;

var totalQuestions = questionsArray.length - 1;

//Function Starts
function startQuiz(){ 
    startCont.style.display = "none";
    questCont.style.display = "block";
    renderQuestions();

    console.log("startQuiz");
}

function renderQuestions() {
    question.innerHTML = "<h1>"+questionsArray[index].question+"</h1>";
    optionA.innerHTML = "<p>"+questionsArray[index].choiceA+"</p>";
    optionB.innerHTML = "<p>"+questionsArray[index].choiceB+"</p>";
    optionC.innerHTML = "<p>"+questionsArray[index].choiceC+"</p>";
    optionD.innerHTML = "<p>"+questionsArray[index].choiceD+"</p>";
    currentQuestion.innerHTML = index + 1;
}

renderQuestions();

function checkAnswer() {
    index++


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
        

        //src="./assets/giphy-complete.webp"
        //document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");





        //alert ("Quiz Complete")
    }
    // if choice matches correct then increase score by one. if it does not match then nothing
    // if () {
    //     score++
    // } else {
        
    // }
}
// check answer agaist question arrays
function checkAnswerResult(answer) {
    console.log("option coming from html", answer);
    if (answer == questionsArray[index].correct) {
        score++
        //display gif for 1 second
        // setTimeout(function(){
        //     console.log("time out test");
        // },5000); 
        console.log("outside test");
        //raise score on UI
        console.log("your score is ", score);
        console.log("right answer");
    } else {
        console.log("incorrect");
        console.log(score);
    }
}

console.log("score:", score);

//Restart Quiz
function restartQuiz(){
    resultsCont.style.display = "none";
    startCont.style.display = "block";
    index = 0;
    score = 0;
}

//checkAnswerTest("Tokyo");



// question.innerHTML = "<p>"+ q.question +"</p>";
// qImg.innerHTML = "<img src="+ q.imgSrc +">";

//<div class="options" id="optionA"><button></button></div>

optionA.addEventListener("click", checkAnswer);
optionB.addEventListener("click", checkAnswer);
optionC.addEventListener("click", checkAnswer);
optionD.addEventListener("click", checkAnswer);

// function checkAnswer() {
//     index++
//     console.log(index);
//}
//button on click reference
// start.addEventListener("click",startQuiz);

// function startQuiz() {  
// start.style.display = "none";
// renderQuestions();
// quiz.style.display = "block";
// renderCounter();
// timer = setInterval(renderCounter,1000);
// }


