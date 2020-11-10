# Tic-Tac-Toe


## Contributers:

Connie Hong

*Mentor Reviews:*

Tiffany Bacher

## Project Links:

Project spec & rubric can be found [here](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html)

Project link on Github can be found [here](https://github.com/conconartist/tictactoe)

Project tools can be found [here](https://github.com/conconartist/tictactoe/projects/1)

## Overview and Learning Goals:

The purpose of this project is to build a functioning game of Tic Tac Toe from start to finish, while demonstrating a strong understanding of DRY JavaScript, event delegation, and localStorage.  The developer will use a data model to display on the DOM in a separate file to be displayed on the browser as the user plays through the game.  

## Technologies Used:

* JavaScript

* CSS

* HTML

## How to Run and View, Instructions for the User:

*To Play the Game:*

1. Open index.html in your browser.

2. Select your player.  If you are playerOne, you are "Jim". If you are playerTwo, you are "Dwight". "Jim" goes first.

![](https://media.giphy.com/media/NwLAuixvxKjsflvvUB/giphy.gif)

3. Follow the instructions on the main page to follow who's turn it is.  If it is your turn, click on the desired square to claim a space. Each player takes turn placing their token (or "head") on a space in the square until someone achieves 3 in a row or until all squares are full.

![](https://media.giphy.com/media/HJkAXVYHJQnnEKhAqI/giphy.gif)

4. The winner of each round will see their win count under their player column update.

![](https://media.giphy.com/media/xWxObsQ24Bk95G1k1a/giphy.gif)

5. Once the game resets on its own, you may play again.

*To Contribute:*

1. Go to the Github page for this repo: https://github.com/conconartist/tictactoe

2. Copy the code to clone the repo to your local machine.

3. In your terminal, enter `git clone` and paste the copied link.

4. CD into the directory to view the respective files (main.js, game.js, player.js, styles.css, index.html).

## Progression:

* 11/5/2020- Wireframe and project board were completed and turned in as Day 1 deliverables.  Initial files were created and respective Classes instantiated for Game and Player. First draft of HTML and CSS were completed.

* 11/6/2020- Main.js was started with initial game functionality, utilizing classes of Game and Player before connecting to the DOM.  Challenges: Deciding how to format winning conditions and board spaces in the Game class.  I challenged myself to go as far as possible into functionality without incorporating the DOM but because of how I assigned the spaces on the board, it's hard to visualize without seeing the board in action.

* 11/7/2020- Connected elements of functionality to the DOM with query selectors and event listeners.  Challenges: I had to refactor my functions quite a bit to make connectivity work, which was tricky.  I hoped to iterate through an array of possible winning combinations but I wasn't able to log the results correctly, so I opted for a long else if statement that I'm planning to refactor later.  Wins: The checkForWin function works and is successfully connected to the DOM.  

* 11/8/2020- Completed functionality of game in the DOM and main.js, aside from displaying win counts for players.  Submitted a PR for mentor review to request insight on how to solve this issue where the count is incorrect.  

* 11/9/2020- Fixed local storage bug and added functionality to display random .gif upon player win.  CSS and HTML was refactored and tested game for bugs.  I played with CSS hover states but I decided it didn't suit the current layout for the game.  Otherwise, it works great!   
