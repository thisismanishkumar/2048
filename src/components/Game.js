
import React, { useState, useEffect } from 'react';
import Board from './Board';
import {FaGithub} from 'react-icons/fa';
import {
  GAME_OVER_MESSAGE,
  GAME_TITLE,
  GITHUB_TOOLTIP,
  NEW_GAME_TEXT,
  TILE_COUNT,
  VIEW_ON_GITHUB,
} from '../constants';
import {
  addNewTile,
  getInitialGrid,
  isGameOver,
  move,
} from '../utils/gameLogic';

const Game = () => {
  const [grid, setGrid] = useState(getInitialGrid);
  const score = Math.max(...grid.flat());
  const [gameOver, setGameOver] = useState(false);

  const handleKeyDown = event => {
    if (gameOver) return;

    let newGrid;
    let scoreToAdd = 0;

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        [newGrid] = move(grid, event.key);
        break;
      default:
        return;
    }

    if (JSON.stringify(grid) !== JSON.stringify(newGrid)) {
      addNewTile(newGrid);
      setGrid(newGrid);
      if (isGameOver(newGrid)) {
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [grid, gameOver]);

  const startNewGame = () => {
    setGrid(getInitialGrid());
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <div className="header">
        <h1 className="title">{GAME_TITLE}</h1>
        <div className="score-container">
          <div className="score-label">SCORE</div>
          <div className="score-value">{score}</div>
        </div>
      </div>
      <div className="game-board">
        <Board grid={grid} />
        {gameOver && (
          <div className="game-over-overlay">
            <p className="game-over-text">{GAME_OVER_MESSAGE}</p>
            <button className="new-game-button" onClick={startNewGame}>
              {NEW_GAME_TEXT}
            </button>
          </div>
        )}
      </div>
      <div className="footer">
        <button className="new-game-button" onClick={startNewGame}>
          {NEW_GAME_TEXT}
        </button>
        <div className="github-link">
          <a
            href="https://github.com/your-username/2048-game"
            target="_blank"
            rel="noopener noreferrer"
            title={GITHUB_TOOLTIP}>
            <FaGithub size={24} />
            <span>{VIEW_ON_GITHUB}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
