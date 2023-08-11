let gameSeq = [];
let userSeq = [];


let btns = ["pink", "blue", "orange", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp(); aa
    }
});


function gameFlash(btn) {
    btn.classList.add("flashBtn");

    setTimeout(function () {
        btn.classList.remove("flashBtn");
    }, 250);
}

function userFlashBtn(btn) {
    btn.classList.add("userFlash");

    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}


function checkBtn(idx) {
    // console.log("Current level : ", level);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            // levelUp();
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game is over :(<br>Your score is <b>${level}</b>.<br> Press any key to restart!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = " rgb(192, 207, 177)";

        }, 150);

        reset();
    }


}


function btnPress() {
    let btn = this;
    userFlashBtn(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkBtn(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}