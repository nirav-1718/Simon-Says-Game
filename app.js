let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btnColor = ["yellow", "green", "red", "blue"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game start");
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;   
    h3.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4) ;
    let randomColor = btnColor[randIdx];
    let randomBtn = document.querySelector(`#${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    btnFlash(randomBtn);
};

function btnFlash(btn) {
    btn.classList.add("btnFlash");

    setTimeout(function() {
        btn.classList.remove("btnFlash");
    }, 250);
};

let btns = document.querySelectorAll(".btn");
for(let btn of btns) {
    btn.addEventListener("click", userFlash);
}

function userFlash() {
   let userColor = this.id;
    userSeq.push(userColor);

    let btn = this;
    btnFlash(btn);

    checkAns(userSeq.length - 1);
};

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        console.log("color same");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        h3.innerHTML = `Game Over! your score was <b>${level-1}</B> <br> press any key to start.`;
        let body = document.querySelector("body");
        body.classList.add("bodyColor");
        setTimeout(function() {
            body.classList.remove("bodyColor");
        }, 250);
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}