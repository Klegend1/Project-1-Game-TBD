/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
// STEP 1
// Define the game state with initial values for boredom, hunger, and sleepiness.
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};

let timer; 
let gameOver; 

/*------------------------ Cached Element References ------------------------*/
// STEP 2
// Store cached element references.

const boredomStatEl = document.querySelector('#boredom-stat'); 
const hungerStatEl = document.querySelector('#hunger-stat'); 
const sleepinessStatEl = document.querySelector('#sleepiness-stat'); 
const feedBtnEl = document.querySelector('#feed'); 
const playBtnEl = document.querySelector('#play'); 
const gameMessageEl = document.querySelector('#message'); 
const resetBtnEl = document.querySelector('#restart'); 
const sleepBtnEl = document.querySelector('#sleep'); 

/*-------------------------------- Functions --------------------------------*/
// STEP 3
// Upon loading, the game state should be initialized, and a function should be called to render this game state.
// Initialize the game state and start the game.

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

function runGame() {
    updateStates(); 
    checkGameOver(); 
    render(); 
};


function render() {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    
    if (gameOver) {
        clearInterval(timer); 
        
        resetBtnEl.classList.remove('hidden');
        gameMessageEl.classList.remove('hidden');
    } else {
        resetBtnEl.classList.add('hidden');
        gameMessageEl.classList.add('hidden');
    }
};
// Step 4
// The state of the game should be rendered to the user

function updateStates() {
    state.boredom += getRandomInt(0, 3); 
    state.hunger += getRandomInt(0, 3); 
    state.sleepiness += getRandomInt(0, 3); 
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Step 5
// Handle the game over logic

function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        console.log('Game over!');
        gameOver = true; 
        gameMessageEl.textContent = 'Oh no, you lose!'; 
    }
};

// STEP 6
// Handle each instance of a player clicking a button with a handleClick() function

function playBtnClick() {
    state.boredom = Math.max(0, state.boredom - 1); 
    render(); 
};

function feedBtnClick() {
    state.hunger = Math.max(0, state.hunger - 1); 
    render(); 
};


function sleepBtnClick() {
    state.sleepiness = Math.max(0, state.sleepiness - 1); 
    render(); 
}

/*----------------------------- Event Listeners -----------------------------*/

//STEP 7

playBtnEl.addEventListener('click', playBtnClick); 
feedBtnEl.addEventListener('click', feedBtnClick); 
sleepBtnEl.addEventListener('click', sleepBtnClick); 
resetBtnEl.addEventListener('click', init); 

// Initialize the game.
init();