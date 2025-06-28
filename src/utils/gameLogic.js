
import { GRID_SIZE } from '../constants';

export const getInitialGrid = () => {
  const grid = Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(0));
  addNewTile(grid);
  addNewTile(grid);
  return grid;
};

export const addNewTile = grid => {
  let added = false;
  while (!added) {
    const row = Math.floor(Math.random() * GRID_SIZE);
    const col = Math.floor(Math.random() * GRID_SIZE);
    if (grid[row][col] === 0) {
      grid[row][col] = Math.random() < 0.9 ? 2 : 4;
      added = true;
    }
  }
};

const slide = row => {
  const newRow = row.filter(val => val);
  const missing = GRID_SIZE - newRow.length;
  const zeros = Array(missing).fill(0);
  return newRow.concat(zeros);
};

const combine = row => {
  for (let i = 0; i < GRID_SIZE - 1; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
    }
  }
  return [row];
};

const rotateGrid = grid => {
  const newGrid = Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(0));
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
};

export const move = (grid, direction) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  let score = 0;

  if (direction === 'ArrowUp' || direction === 'ArrowDown') {
    newGrid = rotateGrid(newGrid);
  }

  if (direction === 'ArrowRight' || direction === 'ArrowDown') {
    newGrid = newGrid.map(row => row.reverse());
  }

  for (let i = 0; i < GRID_SIZE; i++) {
    let [newRow] = combine(slide(newGrid[i]));
    newGrid[i] = slide(newRow);
  }

  if (direction === 'ArrowRight' || direction === 'ArrowDown') {
    newGrid = newGrid.map(row => row.reverse());
  }

  if (direction === 'ArrowUp' || direction === 'ArrowDown') {
    newGrid = rotateGrid(newGrid);
  }

  return [newGrid];
};

const canMove = (grid, direction) => {
  const [newGrid] = move(grid, direction);
  return JSON.stringify(grid) !== JSON.stringify(newGrid);
};

export const isGameOver = grid => {
  return (
    !canMove(grid, 'ArrowUp') &&
    !canMove(grid, 'ArrowDown') &&
    !canMove(grid, 'ArrowLeft') &&
    !canMove(grid, 'ArrowRight')
  );
};
