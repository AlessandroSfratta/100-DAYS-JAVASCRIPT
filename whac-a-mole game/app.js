const squares = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result = 0
let timerId = null
let hitPosition 


function randomSquare() {
    squares.forEach(square => {
 
square.classList.remove("mole")
    })
    let randomSquares = squares[Math.floor(Math.random() * 9)]
    randomSquares.classList.add("mole")
    hitPosition = randomSquares.id
}


squares.forEach( square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition ) {
            result++ 
            score.textContent = result 
        }
    })
})


function moveMole() {

let speed = 1000

    timerId = setInterval(randomSquare, speed)
 if(result >= 10) {
    timerId = setInterval(randomSquare, speed - 500) 
} else if (result >= 40) { timerId = setInterval(randomSquare, speed - 800) }
    hitPosition = null
}



let countDownTimerId = setInterval(countDown, 1000)
let currentTime = prompt("Inserisci il tempo")

function countDown() { 
 currentTime--
 timeLeft.textContent = currentTime

 if(currentTime == 0){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    timeLeft.textContent = 0
    alert("STOP! Tempo scaduto, il tuo punteggio è " +"'" + result + "'")

}

}

moveMole()




// ESEMPIO PRATICO INIZIALE USO DOVE ANDIAMO A CLICCARE SU UNA CASELLA E VIENE 
// ASSEGNATA LA CLASSE MOLE AD UNA CASELLA RANDOM ALL'INTERNO DELLA GRIGLIA


// const squares = document.querySelectorAll(".square")


// squares.forEach((square) => {
     
// square.addEventListener("click", () => {

// squares.forEach( (e) => {
//    e.classList.remove("mole")
// }) 

// const position = Math.floor(Math.random() * squares.length)

// console.log(position)

// squares[position].classList.add("mole")


// })

// })

















