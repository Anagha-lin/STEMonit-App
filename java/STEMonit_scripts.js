// Adding logs to confirm script is loaded
console.log("STEMonit_scripts.js is loaded");

// Selecting all necessary elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeline = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCounter = document.querySelector(".timer .timer_sec");
const nextBtn = document.querySelector("footer .next_btn");
const questionCounter = document.querySelector("footer .total_que");
const restartBtn = document.querySelector(".buttons .restart"); // Declare restartBtn
const quitBtn = document.querySelector(".buttons .quit"); // Declare quitBtn

let currentQuestion = 0;
let currentQuestionNumber = 1;
let timeValue = 30;
let counterLine;
let counter;
let score = 0;
let widthValue = 0;

// Function to handle start button click
startBtn.onclick = () => {
    console.log("Start button clicked");
    infoBox.classList.add("activeInfo"); // Display info box
}

// Function to handle exit button click
exitBtn.onclick = () => {
    console.log("Exit button clicked");
    infoBox.classList.remove("activeInfo"); // Hide info box
}

// Function to handle continue button click
continueBtn.onclick = () => {
    console.log("Continue button clicked");
    infoBox.classList.remove("activeInfo"); // Hide info box
    quizBox.classList.add("activeQuiz"); // Display quiz box
    showQuestions(currentQuestion); // Display first question
    updateQuestionCounter(currentQuestionNumber); // Update question counter
    startTimer(timeValue); // Start timer
    startTimerLine(widthValue); // Start timer line animation
}

// Function to handle restart button click
restartBtn.onclick = () => {
    console.log("Restart button clicked");
    quizBox.classList.add("activeQuiz"); // Display quiz box
    resultBox.classList.remove("activeResult"); // Hide result box
    resetQuiz(); // Reset quiz variables and elements
}

// Function to handle quit button click
quitBtn.onclick = () => {
    console.log("Quit button clicked");
    window.location.reload(); // Reload the current window
}

// Function to handle next question button click
nextBtn.onclick = () => {
    console.log("Next button clicked");
    if (currentQuestion < questions.length - 1) {
        currentQuestion++; // Move to the next question
        currentQuestionNumber++; // Increment question counter
        showQuestions(currentQuestion); // Display next question
        updateQuestionCounter(currentQuestionNumber); // Update question counter
        resetTimer(); // Reset timer
    } else {
        endQuiz(); // End the quiz if all questions have been answered
    }
}

// Function to display questions
function showQuestions(index) {
    console.log("Displaying question", index);
    const questionText = document.querySelector(".question_text");
    let queTag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let optionTag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    questionText.innerHTML = queTag; // Adding new question text
    optionList.innerHTML = optionTag; // Adding new option tags
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "handleOptionSelection(this)");
    }
}

// Function to handle option selection
function handleOptionSelection(option) {
    console.log("Option selected", option.textContent);
    const userAnswer = option.textContent;
    const correctAnswer = questions[currentQuestion].answer;
    if (userAnswer === correctAnswer) {
        option.classList.add("correct");
        score++;
    } else {
        option.classList.add("incorrect");
    }
    disableOptions();
}

// Function to disable options after selection
function disableOptions() {
    const option = optionList.children;
    for (let i = 0; i < option.length; i++) {
        option[i].classList.add("disabled");
        if (option[i].textContent === questions[currentQuestion].answer) {
            option[i].classList.add("correct");
        }
    }
}

// Function to show quiz result
function showResult() {
    console.log("Showing result");
    quizBox.classList.remove("activeQuiz"); // Hide quiz box
    resultBox.classList.add("activeResult"); // Display result box
    const scoreText = resultBox.querySelector(".score_text");
    if (score > 15) {
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + score + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (score > 10) {
        let scoreTag = '<span>and nice 😎, You got <p>' + score + '</p> out of <p>' + questions.length +

