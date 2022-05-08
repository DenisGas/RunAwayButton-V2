const YELLOW = "#EBCB8B";
const BLUE = "#5E81AC";
const GREEN = "#A3BE8C";
const colors = [YELLOW, BLUE , GREEN];
const btn = document.querySelector("#no-catch");
const scoreBtn = document.querySelector("#score-button");
const speedBtn = document.querySelector("#speed-button");
const clickScoreSpan = document.querySelector("#score");
const speedSpan = document.querySelector("#speed");
const startBtn = document.querySelector("#start");
const start = document.querySelector(".start");
const game = document.querySelector(".spd-scr-btn");
const gameStart = document.querySelector(".game");

let lastSpeed;
let btnSpeed;
let speed = 'min';
let score = 0;
let minScore = 0;
let midScore = 0;
let maxScore = 0;
let i = 0;
let index = 0;

startGame()


function startGame(){
  setTimeout(() => {
      gameStart.style.opacity = 1;
      gameStart.style.transition = "2s";
    }, 500)
};
