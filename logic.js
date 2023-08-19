let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

const boxes = document.querySelectorAll(".box");
const reset = document.getElementById("reset");
const boxTextes = document.querySelectorAll(".boxtext")

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let boxText = box.querySelector(".boxtext");
        
        if (boxText.innerHTML == "") {
            count++;
            turn.play()
            if (count % 2 != 0) {
                boxText.innerHTML = "X"
            }
            else if (count % 2 == 0) {
                boxText.innerHTML = "O"
            }
        }
    })
})


reset.addEventListener("click", () => {
    boxTextes.forEach((boxtext) => {
        boxtext.innerHTML = ""
    })
})

