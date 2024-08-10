# Project 1


# Game
TAMAGOTCHI





<!-- Details
You will submit the following details about your project for approval by your instructor:

Your choice of game.
Pseudocode for the overall gameplay. This pseudocode does not need to go into exhaustive detail but should demonstrate that you understand some of the unique challenges you will encounter while building your game.
Any additional project planning requirements specific to the game you have chosen as defined in square brackets in the Recommended games section in the Project Details document or as discussed with your instructor.
 -->





<!-- MVP
✅ Any items marked incomplete in this section will require you to use your one redo to re-submit them. Your game must fulfill the below requirements.

Render the game in the browser using the DOM manipulation techniques demonstrated in lecture.
Include win/loss logic and render win/loss messages in HTML. The game you chose must have a win/lose condition.
Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an appropriate directory structure.
Include all required features specific to your game. Game-specific required features are defined in the Required Features column in the table in the Recommended Games document, or as discussed with your instructor. If you want to build a game that is not on this list, you will need to present and discuss your game’s features with the instructional team for approval.
The game is deployed online so that the rest of the world can play it. -->


<!-- Code Convention Requirements
More than two items marked incomplete in this section will require you to use your one redo to re-submit
them. If two or fewer items are marked incomplete, the project is considered passing. Your game must
fulfill the below requirements.
Complete?
The game can be played without encountering errors. No errors may be present in
the console in the browser.
The code in the app adheres to coding conventions covered in lessons, like using
plural names for arrays.
There is no remaining dead and/or commented out code or console logs outside of
a commented out Code Graveyard section of your code.
The game may not utilize the prompt() or alert() methods.
The game is coded using proper indentation. -->


<!-- UI/UX Requirements
More than two items marked incomplete in this section will require you to use your one redo to re-submit
them. If two or fewer items are marked incomplete, the project is considered passing. Your game must
fulfill the below requirements.
Complete?
CSS Flexbox or Grid is used for page layout design.
Instructions about how to play the game are included in your app.
Colors used on the site have appropriate contrast that meet the WCAG 2.0 level AA
standard.
All images on the site have alt text.
No text is placed on top of an image in a way that makes that text inaccessible. -->


Lab Exercises
Step 1
a. Create an object called state and give it three properties: boredom, hunger, and sleepiness. Each property will have an initial value of 0.

b. Use a variable named timer to store the timer for the game.

c. Use a variable named gameOver to present if the player has lost the game.

💡 b and c will not need to hold a value when they are defined.

Step 2
a. Make 3 constants to store the spans inside of the ‘stat-display’section.

As an example, in a constant called boredomStatEl, store the element with an id of boredom-stat.

b. Make 3 constants to store the button elements inside of the ‘controller’ section.

As an example, in a constant called playBtnEl, store the element with an id of play.

c. In a constant called gameMessageEl, store the element that displays the game’s status on the page.

d. In a constant called resetBtnEl, store the button element that will allow the player to play again.

Step 3
a. Create a function called init.

b. Call this init function, so that it is invoked when the app loads.

c. Set gameOver to false.

d. Inside of the init() function, assign timer to a setInterval() function. Pass setInterval a function named runGame() (we will create it in the next step) as the first argument, and 2000 as the second argument

e. Create a function named runGame. For now, it should simply console.log(): 'the game is running!'

f. Finally, call a function named render()

Step 4
a. Create an empty function called render, then set it aside for now.

b. Create a function called updateStates.

c. In the updateStates() function, increment each property of state by a random number between 0 and 3.

d. Remove the console.log in runGame(). Then, inside runGame(), invoke updateStates() and render().

e. Inside render(), assign each cached stat element’s textContent to their corresponding property in state.

Step 5
a. Create a function called checkGameOver.

b. Inside this new function, create an if statement that checks if any of the state properties has a value of 10 or more.

c. If so, set gameOver to true.

d. Inside of runGame(), invoke checkGameOver() between updateStates() and render().

e. In render(), add an if statement that checks if gameOver is true. If so, call on timer.clearInterval()

Step 6
a. Make a function called playBtnClick.

b. Inside this new function, set state.boredom to 0.

c. Then, invoke render().

d. Next, attach an event listener to playBtnEl. When a user clicks, we want to invoke playBtnClick().

e.  Repeat steps a-d for the ‘feed’ button and the ‘sleepiness’ button

Step 7

a. Add an event listener to resetBtnEl. When a click occurs, invoke init().

b. To the top of init(), add the ‘hidden’ class to resetBtnEl and gameMessageEl.

c. Set the value of each stat property in state to 0

