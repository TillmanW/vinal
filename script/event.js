clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
translateBox = document.querySelector('.keydown');
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dbclick')


colors = ['blue', 'green', 'purple', 'red']
index = 0


clickBox.addEventListener('click',() => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.length)
    {
        index = 0
    }
    clickBox.style.color = 'white'
})


spinBox.addEventListener('click', () => {
    spinBox.classList.toggle('start')
})


let positionY = 50;
let positionX = 50;


document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowDown') {
        positionY = positionY - 10;
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY + 10;
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX + 10;
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX - 10;
    }


    translateBox.style.bottom = `${positionY}px`;
    translateBox.style.left = `${positionX}px`;
});


hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.height = "200px"
    hoverBox.style.width = "500px"
})


hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.height = "100px"
    hoverBox.style.width = "250px"
})




dblclickBox.addEventListener('dblclick', () => {
 dblclickBox.classList.toggle('fade')
})
