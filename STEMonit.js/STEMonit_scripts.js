// Selecting all required elements
const start_btn = document.querySelector("header .start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector("main .quiz_box");
const result_box = document.querySelector("footer .result_box");
const option_list = document.querySelector("main .option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Variables
let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// Event listeners
start_btn.addEventListener("click", () => {
    info_box.classList.add("activeInfo");
});

exit_btn.addEventListener("click", () => {
    info_box.classList.remove("activeInfo");
});

continue_btn.addEventListener("click", () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    questionCounter(1);
    startTimer(30);
    startTimerLine(0);
});

next_btn.addEventListener("click", () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        questionCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
});

// Functions
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    que_text.innerHTML = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    const options = questions[index].options.map((option, i) => `<div class="option"><span>${option}</span></div>`).join("");
    option_list.innerHTML = options;
    const option_elements = option_list.querySelectorAll(".option");
    option_elements.forEach(option => option.addEventListener("click", () => optionSelected(option)));
}

function questionCounter(index) {
    bottom_ques_counter.innerHTML = `<span><p>${index}</p> of <p>${questions.length}</p> Questions</span>`;
}

function startTimer(time) {
    counter = setInterval(() => {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            timeCount.textContent = "0" + time;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const correctOption = option_list.querySelector(`.option[data-value="${questions[que_count].answer}"]`);
            if (correctOption) {
                correctOption.classList.add("correct");
            }
            option_list.querySelectorAll(".option").forEach(option => option.classList.add("disabled"));
            next_btn.classList.add("show");
        }
    }, 1000);
}

function startTimerLine(time) {
    counterLine = setInterval(() => {
        time += 1;
        time_line.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }, 29);
}

function optionSelected(selectedOption) {
    clearInterval(counter);
    const userAns = selectedOption.textContent;
    const correctAns = questions[que_count].answer;
    if (userAns === correctAns) {
        userScore++;
        selectedOption.classList.add("correct");
    } else {
        selectedOption.classList.add("incorrect");
        const correctOption = option_list.querySelector(`.option[data-value="${correctAns}"]`);
        if (correctOption) {
            correctOption.classList.add("correct");
        }
    }
    option_list.querySelectorAll(".option").forEach(option => option.classList.add("disabled"));
    next_btn.classList.add("show");
}

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = `<span>and failure is an opportunity to do better 😐, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    if (userScore > 1) {
        scoreTag = `<span>and nice 😎, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    }
    if (userScore > 3) {
        scoreTag = `<span>and bravo! 🎉, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    }
    scoreText.innerHTML = scoreTag;
}

// Initial function call
showQuestions(que_count);
questionCounter(que_numb);

