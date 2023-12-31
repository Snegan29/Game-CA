
// document

// tickickingTime()



const questions = [
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answers :[
            {text: "The letter 'M'", correct: true},
            {text: "A shooting star", correct: false},
            {text: "A birthday cake", correct: false},
            {text: " A second chance", correct: false},
        ]
    },
    {
        question: " What has keys but can't open locks?",
        answers :[
            {text: "A computer keyboard", correct: false},
            {text: "A treasure chest", correct: false},
            {text: "A piano", correct: true},
            {text: "A detective", correct: false},
        ]
    },
    {
        question: " I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answers :[
            {text: "An echo", correct: false },
            {text: "A tornado", correct: true},
            {text: "A radio", correct: false},
            {text: "A ghost", correct: false},
        ]
    },
    {
        question: "I'm tall when I'm young and short when I'm old. What am I?",
        answers :[
            {text: "A pencil", correct: false},
            {text: "A giraffe", correct: false},
            {text: "A tree", correct: false},
            {text: "A candle", correct: true},
        ]
    },
    {
        question: "I'm always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",
        answers :[
            {text: "A baby", correct: false},
            {text: "A dragon", correct: false},
            {text: "A flame", correct: true},
            {text: "A clock", correct: false},
        ]
    },
    {
        question: "What belongs to you but other people use it more than you do?",
        answers :[
            {text: "Your name", correct: true},
            {text: "Your phone", correct: false},
            {text: "Your car", correct: false},
            {text: "Your money", correct: false},
        ]
    },
    {
        question: "What is always in front of you but can't be seen?",
        answers :[
            {text: "Your Past", correct: false},
            {text: "A mirror", correct: false},
            {text: "Anime world", correct: false},
            {text: "Your Future", correct: true},
        ]
    },
    {
        question: "I can fly without wings. I can cry without eyes. Whenever I go, darkness flies. What am I?",
        answers :[
            {text: "A cloud", correct: true},
            {text: "A bird", correct: false},
            {text: "The wind", correct: false},
            {text: "An airplane", correct: false},
        ]
    },
    {
        question: " I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
        answers :[
            {text: "A map", correct: false},
            {text: " A keyboard", correct: true},
            {text: "A car", correct: false},
            {text: " A smartphone", correct: false},
        ]
    },
    {
        question: "What starts with the letter 't', ends with the letter 't' ,and is full of 't'?",
        answers :[
            {text: "A tent", correct: false},
            {text: "A target", correct: false},
            {text: "A tomato", correct: false},
            {text: "A teapot", correct: true},
        ]
    },
    {
        question: "What is always coming but never arrives",
        answers :[
            {text: "Tommorrow", correct: true},
            {text: "Future", correct: false},
            {text: "Yesterday", correct: false},
            {text: "Past", correct: false},
        ]
    },
    {
        question: "What can be broken by saying it?",
        answers :[
            {text: "break", correct: false},
            {text: "Silence", correct: true},
            {text: "Noise", correct: false},
            {text: "A flower vase", correct: false},
        ]
    },
    {
        question: "What has a face but no eyes, nose, or mouth?",
        answers :[
            {text: "A shadow", correct: false},
            {text: "A slender man", correct: true},
            {text: "A clock", correct: false},
            {text: "A wall", correct: false},
        ]
    },
    {
        question: "What gets wetter the more it dries",
        answers :[
            {text: "sweat", correct: false},
            {text: "clouds", correct: false},
            {text: "wind", correct: false},
            {text: "A towel", correct: true},
        ]
    },
    {
        question: "What has four legs in the morning, two legs in the afternoon, and three legs in the evening?",
        answers :[
            {text: "An accidental accident guy", correct: false},
            {text: "A human", correct: true},
            {text: "An amphibian", correct: false},
            {text: "An Urban Legend", correct: false},
        ]
    }
]



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next")
const questionAtPresent = document.getElementById("questionAtPresent")
const scoreTillNow = document.getElementById("scoreTillNow")
const heading = document.getElementById("grid-item")
const time = document.getElementById("timer");
const quizbox = document.querySelector(".quiz")

let currentIndex = 0;
let score = 0;
let timer = 11;
let timeinterval



function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    // startTimer();
    showQuestion();
}

nextButton.addEventListener("click", () => {
    // handleNextButton()    
    // resetMusic()
})

// Function to show the questions

function showQuestion(){

    resetState();
    startTimer();

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
    scoreTillNow.innerHTML = `Score: ${score}`

}

// this function is to hide the next button and removing the previous buttons.

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// this function is to find if the clicked answer is correct or incorrect.

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
    
}

// local storage things

const name1 = localStorage.getItem("name")
const nickname = localStorage.getItem("nickname")

console.log(name1)
console.log(nickname)

// This function is to show the score or gameover page.

function showScore() {
    resetState(); 

    // questionElement.innerHTML = `Congrats. You have scored ${score} out of ${questions.length}.`;

    if(score <5){
        questionElement.innerHTML = `"${name1}" with the nick name of "${nickname}". You have scored ${score} out of ${questions.length}. You can "Try Hard".`;
    }else if(score>=5){
        questionElement.innerHTML = ` "${name1}" with the nick name of "${nickname}". You have scored ${score} out of ${questions.length}.You are better but "You can be the best".`;
    }else if(score>=10){
        questionElement.innerHTML = `"${name1}" with the nick name of "${nickname}". You have scored ${score} out of ${questions.length}.GOD, You have done it.`;
    }else if(score == 15){
        questionElement.innerHTML = `"${name1}" with the nick name of "${nickname}". You have scored ${score} out of ${questions.length}.You truly are a Riddle Master.`
    }
     

    // Create a "Go to Home" button
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Back to Home";
    homeButton.style.width="150px"
    homeButton.classList.add("btn");
    homeButton.addEventListener("click", () => {
       location.href = "index.html"; 
    });

    // Create a "Start Again" button
    nextButton.innerHTML = "Start Again";
    nextButton.style.display="block"
    nextButton.style.width = "150px";
    nextButton.addEventListener("click", () => {
        location.href = "game.html"; 
    });

    answerButtons.appendChild(homeButton);
    answerButtons.appendChild(nextButton);

    questionAtPresent.style.display = "none";
    // heading.style.display="none"
    time.style.display = "none";
    scoreTillNow.style.display = "none";
}


// to find the index and increase them.

function handleNextButton(){
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
        // resetMusic()
        
    }else {
        showScore();
    }
}

// an event to call other functions, to find if the question is the  last one or not. 

nextButton.addEventListener("click", ()=> {
    if(currentIndex < questions.length){
        handleNextButton();
        clearInterval(timeinterval)
        // resetState()
    }else{
        startQuiz();
    }
})

// This is for time function 

function startTimer(){
timer = 11;
    timeinterval = setInterval(function() {
    timer--;
    document.getElementById("timer").innerHTML = `Time:${timer}`;
    if (timer === 0) {
        clearInterval(timeinterval);
        handleNextButton()
        document.getElementById("timer").innerHTML = "Time's up!";
    }
    },1000);
}


showQuestion();



