
let answers = {};
let score = 0;
const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get("level") || "easy";

const difficultyTitle = document.getElementById("difficultyTitle");

if (difficulty === "easy") {
    difficultyTitle.innerHTML = "🟢 Easy Computer Questions";
} else if (difficulty === "medium") {
    difficultyTitle.innerHTML = "🟡 Medium Computer Questions";
} else if (difficulty === "hard") {
    difficultyTitle.innerHTML = "🔴 Hard Computer Questions";
}
let seconds = 0;
const quizQuestions = {
    easy: [
        {
            q: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit"],
            answer: 0
        },
        {
            q: "Which is an input device?",
            options: ["Monitor", "Keyboard", "Printer"],
            answer: 1
        },
        {
            q: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup Language"],
            answer: 0
        },
        {
            q: "Which device displays output?",
            options: ["Mouse", "Monitor", "Keyboard"],
            answer: 1
        },
        {
            q: "Which language styles web pages?",
            options: ["HTML", "CSS", "Python"],
            answer: 1
        },
        {
            q: "Which is an operating system?",
            options: ["Google", "HTML", "Windows"],
            answer: 2
        },
        {
            q: "Which device moves the pointer?",
            options: ["Printer", "Mouse", "Speaker"],
            answer: 1
        },
        {
            q: "What does WWW stand for?",
            options: ["World Wide Web", "World Web Window", "Wide World Work"],
            answer: 0
        },
        {
            q: "Which is a programming language?",
            options: ["Chrome", "JavaScript", "Windows"],
            answer: 1
        },
        {
            q: "Which symbol starts a single-line JavaScript comment?",
            options: ["//", "##", "@@"],
            answer: 0
        },
        {
    q: "Which part of a computer is called its brain?",
    options: ["CPU", "Mouse", "Monitor"],
    answer: 0
},
{
    q: "Which device is used to print documents?",
    options: ["Keyboard", "Printer", "Speaker"],
    answer: 1
},
{
    q: "Which one is a web browser?",
    options: ["Google Chrome", "Windows", "MS Word"],
    answer: 0
},
{
    q: "Which shortcut is used to copy text?",
    options: ["Ctrl + V", "Ctrl + C", "Ctrl + X"],
    answer: 1
},
{
    q: "Which file extension is used for HTML files?",
    options: [".css", ".js", ".html"],
    answer: 2
}
    ],

    medium: [
        {
            q: "Which HTML tag creates a hyperlink?",
            options: ["<link>", "<a>", "<href>"],
            answer: 1
        },
        {
            q: "Which CSS property changes text color?",
            options: ["font-size", "background", "color"],
            answer: 2
        },
        {
            q: "Which symbol checks strict equality in JavaScript?",
            options: ["===", "=", "!="],
            answer: 0
        },
        {
            q: "Which HTML tag inserts an image?",
            options: ["<picture>", "<img>", "<image>"],
            answer: 1
        },
        {
            q: "Which CSS property adds space inside an element?",
            options: ["margin", "padding", "border"],
            answer: 1
        },
        {
            q: "Which keyword declares a block-scoped variable?",
            options: ["let", "print", "echo"],
            answer: 0
        },
        {
            q: "Which method selects an element by its ID?",
            options: ["getElementById()", "getClass()", "selectID()"],
            answer: 0
        },
        {
            q: "Which HTML tag creates a table row?",
            options: ["<td>", "<th>", "<tr>"],
            answer: 2
        },
        {
            q: "Which CSS layout system is one-dimensional?",
            options: ["Flexbox", "Grid", "Table"],
            answer: 0
        },
        {
            q: "Which method adds an item to the end of an array?",
            options: ["pop()", "push()", "shift()"],
            answer: 1
        },
        {
    q: "Which HTML tag creates a paragraph?",
    options: ["<p>", "<h1>", "<div>"],
    answer: 0
},
{
    q: "Which CSS property changes the background color?",
    options: ["color", "background-color", "font-size"],
    answer: 1
},
{
    q: "Which JavaScript keyword defines a constant?",
    options: ["var", "let", "const"],
    answer: 2
},
{
    q: "Which HTML attribute specifies a link destination?",
    options: ["src", "href", "alt"],
    answer: 1
},
{
    q: "Which JavaScript method converts a string to uppercase?",
    options: ["toUpperCase()", "toLowerCase()", "toString()"],
    answer: 0
}
    ],

    hard: [
        {
            q: "Which JavaScript method converts JSON text into an object?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()"],
            answer: 1
        },
        {
            q: "What does DOM stand for?",
            options: ["Document Object Model", "Data Object Method", "Digital Ordinance Model"],
            answer: 0
        },
        {
            q: "Which operator checks both value and type?",
            options: ["==", "===", "="],
            answer: 1
        },
        {
            q: "Which method creates a new array by transforming each item?",
            options: ["map()", "push()", "join()"],
            answer: 0
        },
        {
            q: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System"],
            answer: 1
        },
        {
            q: "Which keyword is used to handle errors?",
            options: ["try", "check", "error"],
            answer: 0
        },
        {
            q: "Which HTML attribute provides alternative text for an image?",
            options: ["src", "title", "alt"],
            answer: 2
        },
        {
            q: "Which JavaScript feature waits for a Promise?",
            options: ["await", "repeat", "switch"],
            answer: 0
        },
        {
            q: "Which data structure stores key-value pairs?",
            options: ["String", "Object", "Boolean"],
            answer: 1
        },
        {
            q: "Which method filters array items based on a condition?",
            options: ["filter()", "reduce()", "concat()"],
            answer: 0
        },
        {
    q: "Which JavaScript method returns the type of a variable?",
    options: ["typeof", "type()", "checkType()"],
    answer: 0
},
{
    q: "Which method removes the last item from an array?",
    options: ["push()", "pop()", "shift()"],
    answer: 1
},
{
    q: "Which CSS property controls the space between letters?",
    options: ["letter-spacing", "word-spacing", "line-height"],
    answer: 0
},
{
    q: "Which JavaScript method combines two arrays?",
    options: ["join()", "concat()", "split()"],
    answer: 1
},
{
    q: "Which HTML element contains metadata about a webpage?",
    options: ["<body>", "<footer>", "<head>"],
    answer: 2
}
    ]
};
let timerInterval;
let currentQuestions = [];
function startTimer() {
    timerInterval = setInterval(function() {
        seconds++;

        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        document.getElementById("timer").innerHTML =
            String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");
    }, 1000);
}

startTimer();
function getRandomQuestions() {
    let allQuestions = quizQuestions[difficulty] || quizQuestions.easy;

    let shuffled = [...allQuestions];

    shuffled.sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 10);
}
function loadQuestions() {
    let container = document.getElementById("questionsContainer");

    let questions = getRandomQuestions();

    container.innerHTML = "";

    questions.forEach((question, index) => {
        let questionHTML = `
            <h3>${index + 1}. ${question.q}</h3>
        `;

        question.options.forEach((option, optionIndex) => {
            let answerType =
                optionIndex === question.answer ? "correct" : "wrong";

            questionHTML += `
                <button onclick="checkAnswer(${index + 1}, '${answerType}')">
                    ${option}
                </button>
            `;
        });

        questionHTML += `<p id="result${index + 1}"></p>`;

        container.innerHTML += questionHTML;
    });
}

loadQuestions();

function checkAnswer(questionNumber, answer) {
    let result = document.getElementById("result" + questionNumber);

    if (answers[questionNumber] === "correct") {
        score--;
    }

    answers[questionNumber] = answer;

    if (answer === "correct") {
        score++;
        result.innerHTML = "🎉 Correct Answer! Well Done!";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Wrong Answer! Try Again!";
        result.style.color = "red";
    }

    document.getElementById("quizScore").innerHTML =
        "Your Score: " + score + " / 10";

    let answeredCount = Object.keys(answers).length;

    document.getElementById("progressBar").style.width =
        (answeredCount / 10 * 100) + "%";

    document.getElementById("progressText").innerHTML =
        "Progress: " + answeredCount + " / 10";
}

function restartQuiz() {
    clearInterval(timerInterval);
seconds = 0;

document.getElementById("timer").innerHTML = "00:00";

startTimer();
loadQuestions();
    answers = {};
    score = 0;

    document.getElementById("quizScore").innerHTML =
        "Your Score: 0 / 10";

    document.getElementById("finalMessage").innerHTML = "";

    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("progressText").innerHTML = "Progress: 0 / 10";

    for (let i = 1; i <= 10; i++) {
        document.getElementById("result" + i).innerHTML = "";
    }

    let buttons = document.querySelectorAll("section button");

    buttons.forEach(button => {
        button.disabled = false;
    });
}

function showFinalResult() {
    clearInterval(timerInterval);

    let message = document.getElementById("finalMessage");

    if (Object.keys(answers).length < 10) {
        message.innerHTML = "Please answer all 10 questions first!";
        message.style.color = "orange";
        return;
    }

    if (score >= 8) {
        message.innerHTML = "🏆 Excellent! You are a star!";
        message.style.color = "green";
    } else if (score >= 5) {
        message.innerHTML = "👏 Good job! Keep learning!";
        message.style.color = "blue";
    } else {
        message.innerHTML = "📚 Keep practicing! You can do it!";
        message.style.color = "red";
    }

    let quizCount = Number(localStorage.getItem("quizCount")) || 0;
    let bestScore = Number(localStorage.getItem("bestScore")) || 0;

    quizCount++;

    if (score > bestScore) {
        bestScore = score;
    }

    localStorage.setItem("quizCount", quizCount);
    localStorage.setItem("bestScore", bestScore);

    document.getElementById("quizCount").textContent = quizCount;
    document.getElementById("bestScore").textContent = bestScore;
}
function generateCertificate() {
    if (Object.keys(answers).length < 10) {
        alert("Please answer all 10 questions first!");
        return;
    }

    if (score < 8) {
        alert("You need at least 8 marks to get a certificate!");
        return;
    }

    let name = document.getElementById("studentName").value;

    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("certificateScore").innerHTML =
        "Score: " + score + " / 10";

    document.getElementById("certificate").style.display = "block";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("darkMode", isDark);

    let button = document.getElementById("darkModeButton");

    button.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Remember the selected theme
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeButton").textContent = "☀️ Light Mode";
}