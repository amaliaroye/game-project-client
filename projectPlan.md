# Project One Planning: Tic-Tac-Toe

Most importantly, remember to **go slowly and be methodical**. That means you
should be testing your changes in-browser as you write each line or so of code.
Always be commiting. Deploy early and often.

Here's a rough sketch of what you should do and in what order:

### Planning
- [x] Review [game-project-scope-study](https://git.generalassemb.ly/ga-wdi-boston/game-project-scope-study)
- [x] User Stories
- [x] Review [project-planning-wireframes-practice](https://git.generalassemb.ly/ga-wdi-boston/project-planning-wireframes-practice)
- [x] Wire Frames

### Set Up
- [x] [Download Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
- [x] Create a Github Repository
----

### Authentication
- [x] Review [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-token-auth) and [game API authentication docs](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md)
- [x] Sign Up (curl then web app)
- [x] Sign In (curl then web app)
- [x] Change Password (curl then web app)
- [x] Sign Out (curl then web page)
- [x] All API calls have success or failure messages
- [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Create New Game
- [ ] Display New Game button when a user signs in
- [ ] When New Game button is clicked display game board, start player as X, and make [POST games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#create-post-games) to create game
- [ ] Save the API response so you have access to the game ID and cells
- [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 1
- [x] Design a basic game board with HTML/CSS
- [x] Add a click handler for when a space on the game board is clicked
- [x] When the user clicks on a space, first check that the space is empty
- [x] If they choose a valid space, add their token to the HTML/CSS board and the game cells array
- [x] Add messaging for the user when the user clicks on an invalid space
- [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 2
- [x] Rotate player between X and O
- [x] Add messaging for the user when the turn changes
- [x] Check for winner
- [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Update Game
- [ ] Make [PATCH games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#update-patch-gamesid) to update game
- [ ] Add messaging for the user when the game is over (win or draw)
- [ ] Do not allow users to add an X or O to any spaces after the game is over
- [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Play Game Again
- [ ] Update New Game button functionality so it also works to play another game
- [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### View Games

- [ ] Add Games played button
- [ ] When Add Games button is clicked make [GET games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#index-get-games) and display the number of games returned
- [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Final Touches
- [ ] README
- [ ] Troubleshoot/Debug
- [ ] Style
