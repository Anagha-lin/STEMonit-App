console.log("STEMonit_scripts.js is loaded");

const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".quit");
const continueBtn = infoBox.querySelector(".restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const nextBtn = document.querySelector(".next_btn");
const restartBtn = resultBox.querySelector(".restart");
const quitBtn = resultBox.querySelector(".quit");

let currentQuestion = 0;
let currentQuestionNumber = 1;
let timeValue = 20;
let score = 0;

console.log("Elements selected");

startBtn.onclick = () => {
    console.log("Start button clicked");
    infoBox.classList.add("activeInfo");
};

exitBtn.onclick = () => {
    console.log("Exit button clicked");
    infoBox.classList.remove("activeInfo");
};

continueBtn.onclick = () => {
    console.log("Continue button clicked");
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions(currentQuestion);
    updateQuestionCounter(currentQuestionNumber);
};

nextBtn.onclick = () => {
    console.log("Next button clicked");
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        currentQuestionNumber++;
        showQuestions(currentQuestion);
        updateQuestionCounter(currentQuestionNumber);
    } else {
        showResult();
    }
};

restartBtn.onclick = () => {
    console.log("Restart button clicked");
    quizBox.classList.add("activeQuiz");
    resultBox.classList.remove("activeResult");
    currentQuestion = 0;
    currentQuestionNumber = 1;
    score = 0;
    showQuestions(currentQuestion);
    updateQuestionCounter(currentQuestionNumber);
};

quitBtn.onclick = () => {
    console.log("Quit button clicked");
    window.location.reload();
};

function showQuestions(index) {
    console.log("Displaying question", index);
    const questionText = document.querySelector(".que_text");
    let queTag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let optionTag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    questionText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "handleOptionSelection(this)");
    }
}

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

function disableOptions() {
    const option = optionList.children;
    for (let i = 0; i < option.length; i++) {
        option[i].classList.add("disabled");
        if (option[i].textContent === questions[currentQuestion].answer) {
            option[i].classList.add("correct");
        }
    }
}

function updateQuestionCounter(index) {
    const totalQueCounter = document.querySelector(".total_que");
    let totalQueTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    totalQueCounter.innerHTML = totalQueTag;
}

function showResult() {
    console.log("Showing result");
    quizBox.classList.remove("activeQuiz");
    resultBox.classList.add("activeResult");
    const scoreText = resultBox.querySelector(".score_text");
    let scoreTag = '<span>and congrats! 🎉, You got <p>' + score + '</p> out of <p>' + questions.length + '</p></span>';
    scoreText.innerHTML = scoreTag;
}

