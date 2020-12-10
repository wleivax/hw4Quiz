var question = document.getElementById("question");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var currentQuestion = document.getElementById("questionNumber");



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
        alert ("Quiz Complete")
    }
    // if choice matches correct then increase score by one. if it does not match then nothing
    // if () {
    //     score++
    // } else {
        
    // }
}
// check answer agaist question arrays
function checkAnswerTest(answer) {
    console.log("option coming from html", answer);
    if (answer == questionsArray[index].correct) {
        score++
        //display gif for 1 second
        //raise score on UI
        console.log("your score is ", score);
        console.log("right answer");
    } else {
        console.log("incorrect");
        console.log(score);
    }
}

console.log("score:", score);


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


