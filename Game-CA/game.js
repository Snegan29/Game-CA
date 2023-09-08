 

const questions = [
    {
        question: "Which is the largest ocean in the world?",
        answers :[
            {text: "Atlantic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
        ]
    },
    {
        question: "What is the national animal of India?",
        answers :[
            {text: "Lion", correct: false},
            {text: "Peacock", correct: false},
            {text: "Tiger", correct: true},
            {text: "Elephant", correct: false},
        ]
    },
    {
        question: "What is the national flower of Japan?",
        answers :[
            {text: "Lotus", correct: false },
            {text: "Cherry Blossom", correct: true},
            {text: "Orchid", correct: false},
            {text: "Rose", correct: false},
        ]
    },
    {
        question: "What is the name of the longest river?",
        answers :[
            {text: "Amazon", correct: false},
            {text: "Missisipi", correct: false},
            {text: "Nile", correct: true},
            {text: "Yangtze ", correct: false},
        ]
    },
    {
        question: "What is the name of the smallest country in the world?",
        answers :[
            {text: "Tuvalu", correct: false},
            {text: "India", correct: false},
            {text: "United States", correct: false},
            {text: "Vatican City", correct: true},
        ]
    },
    {
        question: "What is the name of the largest ocean trench in the world?",
        answers :[
            {text: "Challenger Deep", correct: false},
            {text: "Java Trench", correct: false},
            {text: "Mariana Trench", correct: true},
            {text: "Puerto Rico Trench", correct: false},
        ]
    },
    {
        question: "Which planet has most moons?",
        answers :[
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Uranus", correct: false},
            {text: "Neptune", correct: false},
        ]
    },
    {
        question: "Which planet is the Gas Giant?",
        answers :[
            {text: "Neptune", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Uranus", correct: true},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "Which is the largest volcano?",
        answers :[
            {text: "Rheasilvia", correct: false},
            {text: "Mount Olympus", correct: true},
            {text: "Himalayas", correct: false},
            {text: "Mauna Kea", correct: false},
        ]
    },
    {
        question: "Which country has the most Nobel Prize winners?",
        answers :[
            {text: "United Kingdom", correct: false},
            {text: "Germany", correct: false},
            {text: "United States", correct: true},
            {text: "France", correct: false},
        ]
    }
]

const generalKnowledge = document.getElementById("GK")
generalKnowledge.addEventListener("click", () => {
    console.log(1)
})

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next")
const questionAtPresent = document.getElementById("questionAtPresent")
const heading = document.getElementById("grid-item")
const time = document.getElementById("timer");

let currentIndex = 0;
let score = 0;


function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
}

// Function to show the questions

function showQuestion(){
    resetState();
    startTimer()
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // answer buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })

    //at which question we are at
    questionAtPresent.innerHTML = `${questionNo} out of ${questions.length}`
}

// this function is to hid the next button and removing the previous buttons.

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
        clearInterval(startTimer)
    }
}

// this function is to find if the clicked answer is correct or incorrect.

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect){
        selectBtn.classList.add("correct");
        score++
    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

// This function is to show the score or gameover page.

function showScore() {
    resetState(); 
    questionElement.innerHTML = `Congrats. You have scored ${score} out of ${questions.length}.`;

    // Create a "Go to Home" button
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Back to Home";
    homeButton.style.width="150px"
    homeButton.classList.add("btn");
    homeButton.addEventListener("click", () => {
        window.location.href = "Frontpage.html"; 
    });

    // Create a "Start Again" button
    nextButton.innerHTML = "Start Again";
    nextButton.style.display="block"
    nextButton.style.width = "150px";
    nextButton.addEventListener("click", () => {
        window.location.href = "gameModule.html"; 
    });

    answerButtons.appendChild(homeButton);
    answerButtons.appendChild(nextButton);

    questionAtPresent.style.display = "none";
    // heading.style.display = "none"
    startTimer.style.display = "none";
}


// to find the index and increase them.

function handleNextButton(){
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
    // resetState();
}

// an event to call other functions, to find if the question is the last one or not. 

nextButton.addEventListener("click", ()=> {
    if(currentIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

// This is for time function 

function startTimer(){
var timer = 10;
    var intervalId = setInterval(function() {
    timer--;
    document.getElementById("timer").innerHTML = `Time:${timer}`;
    if (timer === 0) {
        clearInterval(intervalId);
        document.getElementById("timer").innerHTML = "Time's up!";
    }
    }, 1000);
}


showQuestion();

