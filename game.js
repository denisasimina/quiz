const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'))


let currentQuestion = {}
let acceptingAnswer = false;
let score = 0;
let questioncounter = 0;
let availableQuestion = {};

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
        question: "The book crime and punishment is written by which author",
        choice1: "Anton Chekhov",
        choice2: "Nikolai Gogol",
        choice3: "Alexander Pushkin",
        choice4: "Fyodor Dostoyevsky.",
        answer: 4

    }
]

const BONUS = 15;
const MAX_QUESTION = 3;
let startnr = 1;

startGame = () => {

    questioncounter = 0;
    score = 0;
    availableQuestion = [...questions];//copiaza o matrice in alta
    console.log("Available question");
    getNewQuestion();
};

getNewQuestion = () => {
questioncounter++;
    const nrquestion = document.getElementById('questioncounter')
localStorage.setItem('mostrecentscore',score)
    const newt = nrquestion.innerText.replace("1", questioncounter);
  
    nrquestion.innerText = newt


    const index = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[index];
    question.innerText = currentQuestion.question;

    console.log(question.innerText);


    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice' + number]


    });

    availableQuestion.splice(index, 1);
    acceptingAnswer = true;
  


};

choices.forEach(choice => {
    choice.addEventListener("click", e => {

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
 

        if (classToApply == "correct") {
            score = score + BONUS;
         
            const actualizarescor = document.getElementById('score');
            actualizarescor.innerText = score;

        }
        selectedChoice.parentElement.classList.add(classToApply)
        
       
      
        setTimeout(() => {
        
            selectedChoice.parentElement.classList.remove(classToApply)

            if (availableQuestion != 0) {
                getNewQuestion();
            } else {
                window.location.href = "end.html"; // Redirecționare către pagina finală a jocului
            }


        },  1000)
        //         const answerfinal = e.target.dataset.number;
        //          const answertrue = currentQuestion.answer

        //          if (answertrue == answerfinal) { 

        //             console.log("true");
        //          score=score+BONUS; }
        //         else { console.log("false"); }
        //  console.log(score);

        // answerfinal.parentElement.classList.ad

        //  if(availableQuestion!=0)
        //         getNewQuestion();
        //      else{
        //          /*trimitere spre final joc*/
        //      }
    });
 
});
startGame();

