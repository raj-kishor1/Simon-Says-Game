let highestScore = 0;
let gameSeq = [];
let usrSeq = [];

let btns = ["yellow", "red", "purple", "green"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let highest = document.createElement("h3");
highest.innerText = `Highest Score of this session is ${highestScore}`;

h2.insertAdjacentElement("afterend", highest);

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp() {
    usrSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx, randColor, randbtn);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx) {
    console.log("curr level: ", level);
    


    if (usrSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if (usrSeq.length == gameSeq.length) {
            if (level >= highestScore) {
                highestScore = level;
                highest.innerText = `Highest Score of this session is ${highestScore}`;
            }
            setTimeout(function () {
                levelUp();
            }, 700);
        }
    }
    else {
        h2.innerHTML = `Game Over <b>Your score was ${level}.</b> <br>Press Any key to start`;
        document.querySelector("body").classList.toggle("gameover");
        setTimeout (function () {
            document.querySelector("body").classList.toggle("gameover");
        }, 200);
        reset();
    }
}


function btnPress() {
    // console.log("button was pressed");
    let btn = this;
    userFlash(btn);


    userColor = btn.getAttribute("id");
    // console.log(userColor);
    usrSeq.push(userColor);
    checkAns(usrSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) 
    btn.addEventListener("click", btnPress);



function reset() {
    started = false;
    gameSeq = [];
    usrSeq = [];
    level = 0;
}


























