// Selecting all the necessary elements
const info_box = document.querySelector(".info_box");
const option_list = document.querySelector(".option_list");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const start_btn = document.querySelector(".start_btn button");
const timeCount = document.querySelector(".timer .timer_sec");
const timeText = document.querySelector(".timer .time_left_txt");
const time_line = document.querySelector("header .time_line");
const continue_btn = info_box.querySelector(".buttons .restart");
const exit_btn = info_box.querySelector(".buttons .quit");

let counter;
let counterLine;
let que_count = 0;
let que_numb = 1;
let timeValue = 30;
let userScore = 0;
let widthValue = 0;

// When start button is clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // Display the info box
}

// When the exit button is clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide the info box
}

// When the continue button is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide the info box
    quiz_box.classList.add("activeQuiz"); // Display the quiz box
    showQuestions(0); // Call showQuestions function
    queCounter(1); // Pass 1 parameter to queCounter
    startTimer(30); // Call startTimer function
    startTimerLine(0); // Call startTimerLine function
}

const quit_quiz = result_box.querySelector(".buttons .quit");
const restart_quiz = result_box.querySelector(".buttons .restart");

// When the restart button is clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Display the quiz box
    result_box.classList.remove("activeResult"); // Hide the result box
    timeValue = 30;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); // Call showQuestions function
    queCounter(que_numb); // Pass que_numb value to queCounter
    clearInterval(counter); // Clear counter
    clearInterval(counterLine); // Clear counterLine
    startTimer(timeValue); // Call startTimer function
    startTimerLine(widthValue); // Call startTimerLine function
    timeText.textContent = "Time Left"; // Change the text of timeText to Time Left
    next_btn.classList.remove("show"); // Hide the next button
}

// When the quit button is clicked
quit_quiz.onclick = () => {
    window.location.reload(); // Reload the current window
}

const bottom_ques_counter = document.querySelector("footer .total_que");
const next_btn = document.querySelector("footer .next_btn");

// When the Next button is clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { // If question count is less than total question length
        que_count++; // Increment the que_count value
        que_numb++; // Increment the que_numb value
        showQuestions(que_count); // Call showQuestions function
        queCounter(que_numb); // Pass que_numb value to queCounter
        clearInterval(counter); // Clear counter
        clearInterval(counterLine); // Clear counterLine
        startTimer(timeValue); // Call startTimer function
        startTimerLine(widthValue); // Call startTimerLine function
        timeText.textContent = "Time Left"; // Change the timeText to Time Left
        next_btn.classList.remove("show"); // Hide the next button
    } else {
        clearInterval(counter); // Clear counter
        clearInterval(counterLine); // Clear counterLine
        showResult(); // Call showResult function
    }
}

// Function to get questions and options from the array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");

    // Create a new span and div tag for question and option and pass the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; // Add new span tag inside que_tag
    option_list.innerHTML = option_tag; // Add new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // Set onclick attribute to all available options
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Creating new div tags for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Function for when user clicks an option
function optionSelected(answer) {
    clearInterval(counter); // Clear counter
    clearInterval(counterLine); // Clear counterLine
    let userAns = answer.textContent; // Get user-selected option
    let correcAns = questions[que_count].answer; // Get correct answer from array
    const allOptions = option_list.children.length; // Get all option items

    if (userAns == correcAns) { // If user-selected option is equal to array's correct answer
        userScore += 1; // Increment score value by 1
        answer.classList.add("correct"); // Add green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); // Add red color to incorrect selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Add cross icon to incorrect selected option
        console.log("Wrong Answer");

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { // If an option matches the array answer
                option_list.children[i].setAttribute("class", "option correct"); // Add green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Disable all options once user selects an option
    }
    next_btn.classList.add("show"); // Show the next button if user selects any option
}

// Function to display results
function showResult() {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.remove("activeQuiz"); // Hide quiz box
    result_box.classList.add("activeResult"); // Show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) { // If user scored more than 3
        // Create a new span tag and pass the user score and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  // Add new span tag inside score_Text
    } else if (userScore > 1) { // If user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else { // If user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// Function to start the timer
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // Change the value of timeCount with time value
        time--; // Decrement the time value
        if (time < 9) { // If timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; // Add a 0 before time value
        }
        if (time < 0) { // If timer is less than 0
            clearInterval(counter); // Clear counter
            timeText.textContent = "Time Off"; // Change the time text to time off
            const allOptions = option_list.children.length; // Get all option items
            let correcAns = questions[que_count].answer; // Get correct answer from array
            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { // If an option matches the array answer
                    option_list.children[i].setAttribute("class", "option correct"); // Add green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // Disable all options once user selects an option
            }
            next_btn.classList.add("show"); // Show the next button if user selects any option
        }
    }
}

// Function to start the timer line
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; // Increment time value by 1
        time_line.style.width = time + "px"; // Increase width of time_line with px by time value
        if (time > 549) { // If time value is greater than 549
            clearInterval(counterLine); // Clear counterLine
        }
    }
}

// Function to update question counter
function queCounter(index) {
    // Create a new span tag and pass the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  // Add new span tag inside bottom_ques_counter
}

