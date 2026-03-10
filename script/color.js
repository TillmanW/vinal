colors = ['blue', 'green', 'purple', 'red']
index = 0

document.body.addEventListener('click', () => {

    document.body.style.background = colors[index]

    index = index + 1
    if (index == colors.length)
    {
        index = 0
    }

})
