const colors = ["green","red","rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn")
const colorText = document.querySelector(".colorT")

btn.addEventListener("click", changecolor)

function changecolor () {
    const randomN = getRandomNumber()
    const randomC = colors[randomN]

 document.body.style.backgroundColor = randomC
 colorText.textContent = randomC
}


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}