// Define the questions array
let questions = [
    {
        numb: 1,
        question: "Which of the following is NOT a fundamental force in nature?",
        answer: "d) Chemical force",
        options: [
            "a) Gravity",
            "b) Electromagnetism",
            "c) Strong nuclear force",
            "d) Chemical force"
        ]
    },
    {
        numb: 2,
        question: "What is the chemical symbol for gold?",
        answer: "a) Au",
        options: [
            "a) Au",
            "b) Ag",
            "c) Cu",
            "d) Fe"
        ]
    },
    {
        numb: 3,
        question: "In computer science, what does HTML stand for?",
        answer: "a) Hyper Text Markup Language",
        options: [
            "a) Hyper Text Markup Language",
            "b) High Technology Markup Language",
            "c) Home Tool Markup Language",
            "d) Hyperlinking Textual Markup Language"
        ]
    },
    {
        numb: 4,
        question: "What does the acronym 'JPEG' stand for?",
        answer: "a) Joint Photographic Experts Group",
        options: [
            "a) Joint Photographic Experts Group",
            "b) Java Programming Extension Group",
            "c) Jumbled Picture Encoding Graphics",
            "d) Jolly Picture Extraction Group"
        ]
    },
    {
        numb: 5,
        question: "Which mathematical constant represents the ratio of the circumference of a circle to its diameter?",
        answer: "a) π (pi)",
        options: [
            "a) π (pi)",
            "b) e (Euler's number)",
            "c) φ (phi)",
            "d) γ (gamma)"
        ]
    },
    {
        numb: 6,
        question: "What is the chemical formula for water?",
        answer: "c) H2O",
        options: [
            "a) H2O2",
            "b) H3O",
            "c) H2O",
            "d) HO2"
        ]
    },
    {
        numb: 7,
        question: "What is the square root of 144?",
        answer: "b) 12",
        options: [
            "a) 10",
            "b) 12",
            "c) 14",
            "d) 16"
        ]
    },
    {
        numb: 8,
        question: "Which engineering field focuses on the design and construction of structures such as buildings and bridges?",
        answer: "a) Civil engineering",
        options: [
            "a) Civil engineering",
            "b) Mechanical engineering",
            "c) Electrical engineering",
            "d) Chemical engineering"
        ]
    },
    {
        numb: 9,
        question: "What is the process by which plants convert sunlight into chemical energy?",
        answer: "a) Photosynthesis",
        options: [
            "a) Photosynthesis",
            "b) Respiration",
            "c) Transpiration",
            "d) Fermentation"
        ]
    },
    {
        numb: 10,
        question: "What is the SI unit of electric current?",
        answer: "a) Ampere",
        options: [
            "a) Ampere",
            "b) Volt",
            "c) Ohm",
            "d) Watt"
        ]
    },
    {
        numb: 11,
        question: "Which planet is known as the 'Red Planet'?",
        answer: "b) Mars",
        options: [
            "a) Venus",
            "b) Mars",
            "c) Jupiter",
            "d) Saturn"
        ]
    },
    {
        numb: 12,
        question: "What is the primary function of the mitochondria in a cell?",
        answer: "b) Energy production",
        options: [
            "a) Protein synthesis",
            "b) Energy production",
            "c) Waste disposal",
            "d) Cell division"
        ]
    },
    {
        numb: 13,
        question: "Who is known as the father of modern physics?",
        answer: "b) Albert Einstein",
        options: [
            "a) Isaac Newton",
            "b) Albert Einstein",
            "c) Galileo Galilei",
            "d) Nikola Tesla"
        ]
    },
    {
        numb: 14,
        question: "Which programming language is commonly used for developing Android applications?",
        answer: "a) Java",
        options: [
            "a) Java",
            "b) Python",
            "c) C++",
            "d) Swift"
        ]
    },
    {
        numb: 15,
        question: "What is the chemical symbol for iron?",
        answer: "b) Fe",
        options: [
            "a) Ir",
            "b) Fe",
            "c) In",
            "d) Au"
        ]
    },
    {
        numb: 16,
        question: "What is the process of heating a liquid to create vapor and then cooling the vapor to get a purified liquid?",
        answer: "d) Distillation",
        options: [
            "a) Evaporation",
            "b) Condensation",
            "c) Sublimation",
            "d) Distillation"
        ]
    },
    {
        numb: 17,
        question: "Who is credited with the invention of the telephone?",
        answer: "a) Alexander Graham Bell",
        options: [
            "a) Alexander Graham Bell",
            "b) Thomas Edison",
            "c) Nikola Tesla",
            "d) Guglielmo Marconi"
        ]
    },
    {
        numb: 18,
        question: "What is the chemical formula for table salt?",
        answer: "a) NaCl",
        options: [
            "a) NaCl",
            "b) H2SO4",
            "c) CO2",
            "d) H2O"
        ]
    },
    {
        numb: 19,
        question: "Which of the following is NOT a programming paradigm?",
        answer: "c) Linear",
        options: [
            "a) Object-oriented",
            "b) Functional",
            "c) Linear",
            "d) Procedural"
        ]
    },
    {
        numb: 20,
        question: "What is the largest organ in the human body?",
        answer: "c) Skin",
        options: [
            "a) Liver",
            "b) Brain",
            "c) Skin",
            "d) Heart"
        ]
    },
    {
        numb: 21,
        question: "In mathematics, what is the value of pi (π) to two decimal places?",
        answer: "a) 3.14",
        options: [
            "a) 3.14",
            "b) 3.16",
            "c) 3.12",
            "d) 3.18"
        ]
    },
    {
        numb: 22,
        question: "Which of the following is NOT a renewable energy source?",
        answer: "c) Coal",
        options: [
            "a) Solar",
            "b) Wind",
            "c) Coal",
            "d) Hydroelectric"
        ]
    },
    {
        numb: 23,
        question: "What is the hardest natural substance on Earth?",
        answer: "a) Diamond",
        options: [
            "a) Diamond",
            "b) Graphite",
            "c) Quartz",
            "d) Steel"
        ]
    },
    {
        numb: 24,
        question: "Which of the following is a type of simple machine?",
        answer: "a) Lever",
        options: [
            "a) Lever",
            "b) Atom",
            "c) Molecule",
            "d) Cell"
        ]
    },
    {
        numb: 25,
        question: "Who developed the theory of relativity?",
        answer: "a) Albert Einstein",
        options: [
            "a) Albert Einstein",
            "b) Isaac Newton",
            "c) Stephen Hawking",
            "d) Galileo Galilei"
        ]
    },
    {
        numb: 26,
        question: "What is the chemical formula for methane?",
        answer: "a) CH4",
        options: [
            "a) CH4",
            "b) H2O",
            "c) CO2",
            "d) C6H12O6"
        ]
    },
    {
        numb: 27,
        question: "Which planet is closest to the Sun?",
        answer: "b) Mercury",
        options: [
            "a) Venus",
            "b) Mercury",
            "c) Earth",
            "d) Mars"
        ]
    },
    {
        numb: 28,
        question: "In computer science, what does RAM stand for?",
        answer: "a) Random Access Memory",
        options: [
            "a) Random Access Memory",
            "b) Read-Only Memory",
            "c) Real-time Analytical Machine",
            "d) Rapid Application Model"
        ]
    },
    {
        numb: 29,
        question: "What is the process by which plants release water vapor into the atmosphere?",
        answer: "c) Transpiration",
        options: [
{
    numb: 30,
    question: "What is the boiling point of water in Celsius?",
    answer: "a) 100°C",
    options: [
        "a) 100°C",
        "b) 0°C",
        "c) -273°C",
        "d) 50°C"
    ]
}
// Define the questions array
let questions = [
    // Questions array as provided
];

// Function to start the quiz
function startQuiz() {
    // Function implementation as provided earlier
}

// Function to handle option selection
function handleOptionSelection(option) {
    // Function implementation as provided earlier
}

// Function to disable options after selection
function disableOptions() {
    // Function implementation as provided earlier
}

// Function to show quiz result
function showResult() {
    // Function implementation as provided earlier
}

// Function to display quiz completion message
function showQuizCompletedMessage() {
    const quizBox = document.querySelector(".quiz_box");
    const resultBox = document.querySelector(".result_box");
    quizBox.style.display = "none"; // Hide quiz box
    resultBox.style.display = "block"; // Display result box
    const quizResult = document.querySelector(".quiz_result");
    quizResult.innerHTML = "Quiz Completed!"; // Display quiz completion message
}

// Function to reset the quiz
function resetQuiz() {
    const startButton = document.querySelector(".start_btn button");
    const infoBox = document.querySelector(".info_box");
    const resultBox = document.querySelector(".result_box");
    const replayButton = document.querySelector(".result_box .buttons .replay");
    const quitButton = document.querySelector(".result_box .buttons .quit");
    startButton.style.display = "block"; // Display start button
    infoBox.classList.remove("activeInfo"); // Hide info box
    resultBox.style.display = "none"; // Hide result box
    replayButton.style.display = "none"; // Hide replay button
    quitButton.style.display = "none"; // Hide quit button
}

// Function to handle replay button click
function replayQuiz() {
    resetQuiz(); // Reset the quiz
    startQuiz(); // Start the quiz again
}

// Function to handle quit button click
function quitQuiz() {
    resetQuiz(); // Reset the quiz
}

// Event listeners for buttons
document.querySelector(".start_btn button").onclick = startQuiz;
document.querySelector(".result_box .buttons .replay").onclick = replayQuiz;
document.querySelector(".result_box .buttons .quit").onclick = quitQuiz;

