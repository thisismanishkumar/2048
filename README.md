# 2048 Game

This is a web-based implementation of the classic 2048 puzzle game, built using React for the frontend and a basic Node.js setup (though the Node.js part is not actively used for game logic in this client-side version).

## Project Description

2048 is a single-player sliding block puzzle game. The objective of the game is to slide numbered tiles on a grid to combine them to create a tile with the number 2048. The game continues even after reaching the 2048 tile, allowing players to aim for higher scores.

## Features

-   Interactive 4x4 game board.
-   Responsive tile movements using arrow keys.
-   Score tracking (displays the highest tile value on the board).
-   Game over detection.
-   New game functionality.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:thisismanishkumar/2048.git
    # Or if using HTTPS:
    # git clone https://github.com/thisismanishkumar/2048.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd 2048/2048-game
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Game

After installation, you can run the game in development mode:

```bash
npm start
```

This will open the game in your default web browser at `http://localhost:3000`.

## Technologies Used

-   **React:** Frontend JavaScript library for building user interfaces.
-   **Node.js:** JavaScript runtime (used for project setup and dependency management).
-   **CSS:** For styling the game interface.

## Game Rules

-   The game is played on a 4x4 grid.
-   Each turn, a new tile (either 2 or 4) appears on an empty spot on the grid.
-   Players use the arrow keys (Up, Down, Left, Right) to move all tiles in a chosen direction.
-   When two tiles with the same number collide while moving, they merge into a single tile with the sum of their values (e.g., two 2s merge into a 4).
-   Merged tiles cannot merge again in the same turn.
-   The game ends when the grid is full, and no more moves are possible (i.e., no empty spaces and no adjacent tiles with the same value that can merge).