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
const restartButton = document.querySelector(".buttons .restart"); // Declare restartButton
const quitButton = document.querySelector(".buttons .quit"); // Declare quitButton

let currentQuestion = 0;
let currentQuestionNumber = 1;
let timeValue = 30;
let counterLine;
let counter;
let score = 0;
let counterTime;
let widthValue = 0;

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
    showQuestions(currentQuestion); // Display first question
    updateQuestionCounter(currentQuestionNumber); // Update question counter
    startTimer(timeValue); // Start timer
    startTimerLine(widthValue); // Start timer line animation
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
    quizBox.classList.remove("activeQuiz"); // Hide quiz box
    resultBox.classList.add("activeResult"); // Display result box
    const scoreText = resultBox.querySelector(".score_text");
    if (score > 15) {
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + score + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (score > 10) {
        let scoreTag = '<span>and nice 😎, You got <p>' + score + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span>and sorry 😐, You got only <p>' + score + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// Function to start the timer
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount--;
        timeText.textContent = "Time Left: " + timeCount + "s";
        if (timeCount <= 0) {
            clearInterval(counter);
            timeText.textContent = "Time's up!";
            showResult();
        }
    }
}

// Function to start timer line animation
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeline.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

// Function to update question counter
function updateQuestionCounter(index) {
    questionCounter.textContent = index + " / " + questions.length;
}

// Function to reset the quiz
function resetQuiz() {
    currentQuestion = 0;
    currentQuestionNumber = 1;
    timeValue = 30;
    score = 0;
    widthValue = 0;
    showQuestions(currentQuestion);
    updateQuestionCounter(currentQuestionNumber);
    clearInterval(counter);
    clearInterval(counterLine);
    timeText.textContent = "Time Left: 30s";
    timeline.style.width = "0px";
}

// Function to end the quiz
function endQuiz() {
    clearInterval(counter);
    clearInterval(counterLine);
    disableOptions();
    showResult();
}

