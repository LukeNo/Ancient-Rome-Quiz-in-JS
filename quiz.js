var currentQuestion = 0;
var score = 0;

//takes questions from file question.js
var totQuestions = questions.length;

var container = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");

var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");


function loadQuestion(questionIndex)
{
    //reference to table elements from question.js file 
    var q = questions[questionIndex];
    //puts array elements into html code
    questionEl.textContent = (questionIndex + 1) + '. ' +q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion()
{
    //prevents next question if current answer is not choosen
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption)
    {
        alert('Please select your answer!');
        return;
    }
    //checks if answer is correct or not
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer)
    {
        score += 10;
    }
    //passes to next question
    selectedOption.checked = false;
    currentQuestion ++;
    //when it comes to the last question
    if(currentQuestion == totQuestions - 1)
    {
        nextButton.textContent = 'Finish';
    }
    //hides the container after the last question and shows the result
    if(currentQuestion == totQuestions)
    {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score + '/100';
        return;
    }
    //loads next question after answering on the current question
    loadQuestion(currentQuestion);
};

//displays first question on the page
loadQuestion(currentQuestion);
