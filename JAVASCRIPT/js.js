// ----------------------------------------------
// ---------------------------SCROLL PROGRESS BAR
// ----------------------------------------------

const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("#progress");
const animateProgressBar = () => {

    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth)
    progressBar.style.width = value + "%";
    if (value < 0) {

        progressBar.style.width = "0%";
    }
};
window.addEventListener("scroll", animateProgressBar);



// ----------------------------------------------
// --------------------------- MUSIC PAD PLAYER -
// ----------------------------------------------



window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    console.log(sounds);
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#4f62a1",
        "#d39c4a",
        "#b44242",
        "#c6e25f",
        "#d360cd"
    ];


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });


    const createBubbles = index => {

        const bubble = document.createElement("div");
        visual.appendChild(bubble);

        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});



// -------------------------------------------
// ------------------------------- FLAPPY BIRD
// -------------------------------------------

var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var highscore = [];
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});

// ------------ 

const btnStart = document.getElementById("character");

btnStart.addEventListener("click", function () {

    const sss = setInterval(function start() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumping == 0) {
            character.style.top = (characterTop + 3) + "px";
        }
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var cTop = -(650 - characterTop);
        if ((characterTop > 630) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 280)))) {
            clearInterval(sss);
            document.getElementById("high-score").innerHTML = counter;
            character.style.top = 350 + "px";
            counter = 0;
        }
    }, 10);
});

function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
};



