// Selecting all necessary elements
const startButton = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitButton = infoBox.querySelector(".buttons .quit");
const continueButton = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeline = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCounter = document.querySelector(".timer .timer_sec");
const nextButton = document.querySelector("footer .next_btn");
const questionCounter = document.querySelector("footer .total_que");

// Function to handle start button click
startButton.onclick = () => {
    infoBox.classList.add("activeInfo"); // Display info box
}

// Function to handle exit button click
exitButton.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Hide info box
}

// Function to handle continue button click
continueButton.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Hide info box
    quizBox.classList.add("activeQuiz"); // Display quiz box
    showQuestions(0); // Display first question
    updateQuestionCounter(1); // Update question counter
    startTimer(30); // Start timer
    startTimerLine(0); // Start timer line animation
}

// Function to handle restart button click
restartButton.onclick = () => {
    quizBox.classList.add("activeQuiz"); // Display quiz box
    resultBox.classList.remove("activeResult"); // Hide result box
    resetQuiz(); // Reset quiz variables and elements
}

// Function to handle quit button click
quitButton.onclick = () => {
    window.location.reload(); // Reload the current window
}

// Function to handle next question button click
nextButton.onclick = () => {
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
    // Display question and options
    // Code for displaying questions and options goes here
}

// Function to handle option selection
function handleOptionSelection(answer) {
    // Handle user's option selection
    // Code for handling option selection goes here
}

// Function to show quiz result
function showResult() {
    // Show quiz result based on user's score
    // Code for displaying quiz result goes here
}

// Function to start the timer
function startTimer(time) {
    // Start the timer
    // Code for starting the timer goes here
}

// Function to start timer line animation
function startTimerLine(time) {
    // Start timer line animation
    // Code for starting timer line animation goes here
}

// Function to update question counter
function updateQuestionCounter(index) {
    // Update the question counter
    // Code for updating question counter goes here
}

// Function to reset the quiz
function resetQuiz() {
    // Reset quiz variables and elements
    // Code for resetting the quiz goes here
}

// Function to end the quiz
function endQuiz() {
    // End the quiz
    // Code for ending the quiz goes here
}

