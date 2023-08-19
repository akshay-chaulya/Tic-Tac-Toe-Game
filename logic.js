let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

const boxes = document.querySelectorAll(".box");
const reset = document.getElementById("reset");
const boxTextes = document.querySelectorAll(".boxtext")
const info = document.querySelector(".info")
const img = document.querySelector(".imgbox").getElementsByTagName("img")[0];
const line = document.querySelector(".line");

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let boxText = box.querySelector(".boxtext");

        if (boxText.innerHTML == "") {
            count++;
            turn.play()
            if (count % 2 != 0) {
                boxText.innerHTML = "X"
                info.innerHTML = `Trun for 0`
            }
            else if (count % 2 == 0) {
                boxText.innerHTML = "0"
                info.innerHTML = `Trun for X`
            }

            checkWon()
        }
    })
})


reset.addEventListener("click", () => {
    boxTextes.forEach((boxtext) => {
        boxtext.innerHTML = ""
        img.style.width = "0"
        line.style.width = "0"
    })
})

const checkWon = () => {
    let won =
        [
            [0, 1, 2, 5, 5, 0, 20],
            [3, 4, 5, 5, 15, 0, 20],
            [6, 7, 8, 5, 25, 0, 20],
            [0, 3, 6, -5, 15, 90, 20],
            [1, 4, 7, 5, 15, 90, 20],
            [2, 5, 8, 15, 15, 90, 20],
            [0, 4, 8, 2.5, 15, 45, 25],
            [2, 4, 6, 2.5, 15, 135, 25]
        ]

    won.forEach((e) => {
        if ((boxTextes[e[0]].innerHTML === boxTextes[e[1]].innerHTML) && (boxTextes[e[1]].innerHTML === boxTextes[e[2]].innerHTML) && (boxTextes[e[0]].innerHTML !== "")) {
            gameover.play()
            info.innerHTML = `Won ${boxTextes[e[0]].innerHTML}`;
            // turn.pause()
            img.style.width = "180px";
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            line.style.width = `${e[6]}vw`
        }
    })
}

