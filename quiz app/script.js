const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex 


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})



function startGame () {
 startButton.classList.add("hide")
 shuffledQuestions = questions.sort( () => { Math.random() - 0.5 })
 currentQuestionIndex = 0
 questionContainerElement.classList.remove("hide")
 setNextQuestion()
}

function setNextQuestion () {
    resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])

}


function showQuestion (question) {
questionElement.innerText = question.question
question.answers.forEach(answers => { 
    const button = document.createElement("button")
    button.innerText = answers.text
    button.classList.add("btn")
    if(answers.correct) {
        button.dataset.correct = answers.correct
    } 
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function selectAnswer ( e ) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  seStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    seStatusClass(button, button.dataset.correct)
  })
if( shuffledQuestions.length > currentQuestionIndex + 1 ) {
    nextButton.classList.remove("hide")
} else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
}
}

function seStatusClass ( element, correct ) {
    clearStatusClass(element)
    if (correct) {
    element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass ( element ) {
 element.classList.remove("correct")
 element.classList.remove("wrong")

}

function resetState () {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while ( answerButtonsElement.firstChild ) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


const questions = [
    { 
        question: "Quanto fa 2 + 2?",
        answers: [
            {text: "4", correct:true},
            {text: "22", correct:false},
            {text: "6", correct:false},
            {text: "2", correct:false}
        ]
    },
    { 
        question: "Qual'è la capitale dell'italia?",
        answers: [
            {text: "Roma", correct:true},
            {text: "Napoli", correct:false},
            {text: "Firenze", correct:false},
            {text: "Milano", correct:false}
        ]
    },
]