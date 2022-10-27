const board = document.querySelector("#board")
const colors = ["#f72a2a", "#f72a80", "#f72ad5", "#ce2af7", "#792af7", "#2a3ff7", "#2a94f7", "#2adff7", "#2af7a2", "#2df72a", "#91f72a", "#dcf72a", "#f7a52a"]
const SQUARES_NUMBER = 1000

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", () => {
        setColor(square)
    })
    square.addEventListener("mouseleave", () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element){
    const randomColor = getRandomColor()
    element.style.backgroundColor = randomColor;
    element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
}
function removeColor(element){
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
