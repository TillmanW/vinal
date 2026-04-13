const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 200


const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
        ball.style.backgroundColor = "yellow"
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
        ball.style.backgroundColor = "blue"
    }
}

createBall()
function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLPaddle
function createLPaddle(){
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width =  `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = `blue`
    LPaddle.style.position = `absolute`
    LPaddle.style.left = "50px"
    LPaddle.style.height = `${windowHeight / 2 - LPaddleHeight / 2}px`
}

document.addEventListener(`keyup`, (event) => {
    if (event.key == 'w') {
        LPaddleYPosition = LPaddleYPosition - LPaddleYSpeed
    }
    if (event.key == 's') {
        //move down
    }
})
