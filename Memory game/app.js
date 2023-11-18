document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]



const gridDisplay = document.querySelector(".grid")
let cardChosen = []
let cardChosenID = []
const cardsWon = []
const resultDisplay = document.getElementById("result")



cardArray.sort( () => 0.5 - Math.random() )

cardArray.forEach( (el , data) => {
    const card = document.createElement("img")
    card.setAttribute("src", "images/blank.png")
    card.setAttribute("data-id", data)
    card.addEventListener("click", flipCard)
    gridDisplay.appendChild(card)

}) 



function checkMatch() {
    const cards = document.querySelectorAll("img")
    const optionOneId = cardChosenID[0]
    const optionTwoId = cardChosenID[1]
    

if (optionOneId == optionTwoId) {
    alert("hai fatto clic sulla stessa immagine")
    cards[optionOneId].setAttribute("src", "images/blank.png")
    cards[optionTwoId].setAttribute("src", "images/blank.png")
}

    if(cardChosen[0] == cardChosen[1]){
        alert("Hai trovato una corrispondenza")
        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("Ritenta e ricorda bene questa volta!")
    };
     
    resultDisplay.textContent = cardsWon.length;
    cardChosen = []
    cardChosenID = []

console.log("controllo la corrispondenza")

if(cardsWon.length == cardArray.length/2){
  resultDisplay.textContent = "Congratulazioni hai trovato tutte le coppie"
}

}


function flipCard() {

const cardID = this.getAttribute("data-id")
cardChosen.push(cardArray[cardID].name)
this.setAttribute("src", cardArray[cardID].img)
cardChosenID.push(cardID)
if(cardChosen.length === 2) {
    setTimeout(checkMatch, 500)

}


}

});
  