const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")
const blockWidth = 100
const blockHeight = 20 
const ballDiameter = 20
const boardWidth = 560
const boardHeight = 300



let timerId
let score = 0

let xDirection = -2
let yDirection = 2


const userStart = [230,10]
let currentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart



//create Block
class Block {
    constructor(AsseX,AsseY) {
        this.bottomLeft = [AsseX,AsseY]
        this.bottomRight = [AsseX + blockWidth, AsseY]
        this.topLeft = [AsseX,AsseY + blockHeight]
        this.topRight = [AsseX + blockWidth, AsseY + blockHeight]
    }
}

//all my blocks
const blocks = []


for (let x = 10; x <= 450; x += 110) {
    for (let y = 270; y >= 210; y -= 30) {
      blocks.push(new Block(x, y));
    }
  }


//draw my block 
function addBlock() {
    for(let i = 0; i < blocks.length; i++ ) {
    const block = document.createElement("div")
    block.classList.add("block")
    block.style.left = blocks[i].bottomLeft[0] + "px"
    block.style.bottom = blocks[i].bottomLeft[1] + "px"
    grid.appendChild(block)
    
    }
}
addBlock()

//add user
const user = document.createElement("div")
user.classList.add("user")
grid.appendChild(user)
drawUser()


function moveUser (e) {
  switch(e.key) {
    case "ArrowLeft": 
    if(currentPosition[0] >0) {
    currentPosition[0] -= 20
    drawUser()
  } 
    break;
    case "ArrowRight": 
    if(currentPosition[0] < boardWidth - blockWidth) {
      currentPosition[0] += 20
      drawUser()
    }
    break;

  }
}

document.addEventListener("keydown", moveUser)

//add ball
const ball = document.createElement("div")
ball.classList.add("ball")
drawBall()
grid.appendChild(ball)


//draw the user 
function drawUser() {
  user.style.left = currentPosition[0] + "px"
  user.style.bottom = currentPosition[1] + "px"
  }

//draw the ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px"
  ball.style.bottom = ballCurrentPosition[1] + "px"

}

//move ball 
function moveBall(){
 ballCurrentPosition[0] += xDirection
 ballCurrentPosition[1] += yDirection
 drawBall()
 ceckForCollisions()


}

timerId = setInterval(moveBall, PlusVel)

function PlusVel() {
  let velocityBall = 20
  velocityBall += 1
}

//check for collisions
function ceckForCollisions() {

//ceck for block collisions
for(let i = 0; i < blocks.length; i++) {
   if( ballCurrentPosition[0] > blocks[i].bottomLeft[0] && 
       ballCurrentPosition[0] < blocks[i].bottomRight[0] && 
       ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && 
       ballCurrentPosition[1] < blocks[i].topLeft[1])) 
       {
        const allBlocks = Array.from(document.querySelectorAll('.block'))
        allBlocks[i].classList.remove('block')
        blocks.splice(i,1)
        changeDirection()  
        score++
        velocityBall += 10
        console.log(velocityBall)
        scoreDisplay.innerHTML = score
       
        //check for win 
        if (blocks.length === 0) {
          scoreDisplay.innerHTML = "You Win!!!"
          clearInterval(timerId)
          document.removeEventListener("keydown", moveUser)
        }

   }
   
}

  //ceck for wall collisions 
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
  ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= 
  (boardHeight - ballDiameter) ) 
    {

    changeDirection()
  }
  // check for user collisions 
  if (
    ( ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth ) &&
    ( ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight )
  ) {
    changeDirection()
  }
  
    //ceck for game over
    if(ballCurrentPosition[1] <= 0) {

      clearInterval(timerId)
      scoreDisplay.innerHTML = "You Lose"
      document.removeEventListener("keydown", moveUser)
    }
}





function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
    return
  }
}