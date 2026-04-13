const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballxPosition = windowWidth/2 - ballRadius
let ballSpeed = 5
let ballxDirection = 1

setInterval(moveBall, 10)

function moveBall(){
    ballxPosition = ballxPosition + ballSpeed * ballxDirection
    ball.style.left = `${ballxPosition}px`
    if (ballxPosition > windowWidth - 2 * ballRadius){
        ballxDirection = ballxDirection * -1
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
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}
