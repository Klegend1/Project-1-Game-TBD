# Project-1-Game-TBD


### Game Name 
Tamagotchi Pacman Edition
I chose this game basically because it was easy and i've never played it before so i was a little intrigued.
 
 Wikipedia Link in assets folder.


### PSUEDOCODE 

<!-- // 1) Define the required variables used to track the state of the game.

// let state = {
//     boredom: 0,
//     hunger: 0,
//     sleepiness: 0,
// };

// let timer;
// let gameOver;


// 2) Store cached element references.

const boredomStatEl = document.querySelector('#boredom-stat'); 
const hungerStatEl = document.querySelector('#hunger-stat'); 
const sleepinessStatEl = document.querySelector('#sleepiness-stat'); 
const feedBtnEl = document.querySelector('#feed'); 
const playBtnEl = document.querySelector('#play'); 
const gameMessageEl = document.querySelector('#message'); 
const resetBtnEl = document.querySelector('#restart'); 
const sleepBtnEl = document.querySelector('#sleep'); 


// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

function init() {
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
    
    
    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');
    
    timer = setInterval(runGame, 2000);
    render();
    console.log('Game initialized');
};



// 4) The state of the game should be rendered to the user.


function render() {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;


// 5) Handle the game over logic. 

if (gameOver) {
        clearInterval(timer); 
        
        resetBtnEl.classList.remove('hidden');
        gameMessageEl.classList.remove('hidden');
    } else {
        resetBtnEl.classList.add('hidden');
        gameMessageEl.classList.add('hidden');
    }
};


// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)



// 7) Create reset functionality. -->

<!-- //resetBtnEl.addEventListener('click', init); -->

###
