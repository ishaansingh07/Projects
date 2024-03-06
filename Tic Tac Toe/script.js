let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true //X or O

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
    turnO =  true
    enableBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box is clicked")
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";;
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for (box of boxes) {
        box.disabled =  true;
    }
}

const enableBoxes = () =>{
    for (box of boxes) {
        box.disabled =  false;
        box.innerText = ""
    }
}

const showWinner = (winner) =>{
    msg.innerText= `Congratulations ! Winner is ${winner}`
    msgContainer.classList.remove( "hide" )
    disableBoxes()
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;


        if(a != "" && b!= ""  && c!="") {
            if (a === b && b === c) {
                console.log("winner is " + a);
                showWinner(a)
            }
        }
    }
}
resetBtn.addEventListener("click", resetGame)