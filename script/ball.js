const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballxPosition = windowWidth/2 - ball radius
let ballSpeed = 5

setInterval(moveBall, 10)

function moveBall(){
    ballxPosition = ballxPosition + ballSpeed
    ball.style.left = `${ballxPosition}px`
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
