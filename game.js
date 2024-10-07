const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-container'));

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questioncounter = 0;
let availableQuestion = [];


let questions = [
    {
        question: "Which is the longest river in the world?",
        choice1: "Amazon",
        choice2: "Nile",
        choice3: "Volga",
        choice4: "Mississippi",
        answer: 2
    },
    {
        question: "Which is the smallest country in the world?",
        choice1: "Liechtenstein",
        choice2: "Monaco",
        choice3: "San Marino",
        choice4: "Vatican",
        answer: 4
    },
    {
        question: "The book Crime and Punishment is written by which author?",
        choice1: "Anton Chekhov",
        choice2: "Nikolai Gogol",
        choice3: "Alexander Pushkin",
        choice4: "Fyodor Dostoyevsky.",
        answer: 4
    },
    {
        question: "What is the capital of France?",
        choice1: "Berlin",
        choice2: "Madrid",
        choice3: "Rome",
        choice4: "Paris",
        answer: 4
    },
    {
        question: "Which planet is known as the Red Planet?",
        choice1: "Earth",
        choice2: "Mars",
        choice3: "Jupiter",
        choice4: "Saturn",
        answer: 2
    }
];

const BONUS = 15;
const MAX_QUESTION = questions.length; 

// Inițializarea jocului
startGame = () => {
    questioncounter = 0; // Resetează numărătorul întrebărilor
    score = 0; // Resetează scorul
    availableQuestion = [...questions]; 
    console.log("Available questions");
    getNewQuestion(); 
};


getNewQuestion = () => {
    if (availableQuestion.length === 0) {
       
        localStorage.setItem('mostrecentscore', score);
        return window.location.href = "end.html";
    }
    
    questioncounter++; 
    const nrquestion = document.getElementById('questioncounter');
    nrquestion.innerText = `${questioncounter}/${MAX_QUESTION}`; 

    const index = Math.floor(Math.random() * availableQuestion.length); 
    currentQuestion = availableQuestion[index]; 
    question.innerText = currentQuestion.question; 

    console.log(question.innerText);

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.querySelector('.choice-text').innerText = currentQuestion['choice' + number];
    });

    availableQuestion.splice(index, 1); 
    acceptingAnswer = true; 
};


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswer) return;

        const selectedChoice = e.currentTarget; 
        const selectedAnswer = selectedChoice.dataset.number; 

  
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply == "correct") {
            score += BONUS; 
            const actualizarescor = document.getElementById('score');
            actualizarescor.innerText = score; 
        }

        selectedChoice.classList.add(classToApply); 

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply); 

            getNewQuestion(); 
        }, 1000); a
    });
});


startGame();
