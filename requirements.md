# Project One Requirements: Tic-Tac-Toe

### Deployment Requirements

1.  [ ] Hosted and deployed on GitHub Pages, not Github Enterprise.

### Version Control Requirements

1.  [ ] Sharing your work through a git repository hosted on Github.
1.  [ ] Making frequent, cohesive commits dating back to the **first day**
of the project week.

### Documentation Requirements

Your `README.md` file is the homepage of your code repository. It should tell
people about the project and its purpose.

1. [x] README.md must include [wireframes](example_readme.md#wireframe) and [user stories](example_readme.md#user-stories).
2. [ ] README.md must include an explanation of the app.
3. [x] README.md must include a link the deployed application.

> Note: There's an [`example_readme.md`](example_readme.md) in this repository for your reference. It covers all documentation requirements.

### Application Requirements

1.  [x] User must be able to sign up
1.  [x] User must be able to sign in
1.  [x] Signed in user must be able to sign out
1.  [x] Signed in user user must be able to start a tic tac toe game
1.  [x] When playing game, user must start as X and then rotate between X and O
1.  [x] When playing game, user must only select available spaces on the board
1.  [x] When playing game, user must be notified of win or tie
1.  [ ] Once a game is over, user must not be able to add to that board
1.  [x] Once a game is over, user must be able to play again

### API Requirements

1. [x] Sign up [POST /sign-up](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signup)
1.  [x] Sign in [POST /sign-in](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signin)
1.  [x] Sign out [DELETE /sign-out](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signout)
1.  [x] New game [POST /games](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#create)
1.  [ ] Update game [PATCH /games/:id](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#update)
1.  [x] Display a message to the user after sign in, sign up, and sign out success or failure.
1.  [x] Sign in and sign up forms must clear after submit success

### Professional Requirements

1.  [x] **Do not** delete your repository at any time or start over.
1.  [x] **Do not** rely on refreshing the page for any functionality.
1.  [ ] **Do not** have any user-facing bugs.
    -  Display non-functional buttons, nor buttons that do not successfully complete a task.
    -  Show actions at inappropriate times (example: sign out button when not signed in).
