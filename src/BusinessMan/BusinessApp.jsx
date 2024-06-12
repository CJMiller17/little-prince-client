import React from "react";
import "./BusinessMan.css"; 
import { Grid } from "@chakra-ui/react";

function BusinessApp() {
  return (
    <div id="game-board">
      {Array(16)
        .fill()
        .map((_, index) => (
          <div key={index} className="cell"></div>
        ))}
      <div className="tile">2</div>
    </div>
  );
}

export default BusinessApp;


//Script.js

const gameBoard = document.getElementById("game-board")

const grid = new Grid(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput()

function setupInput() {
  window.addEventListener("keydown", handleInput, {once: true})
}

async function handleInput(e) {
  switch (e.key) {
    case "ArrowUp":
      if (!canMoveUp()) {
        setupInput()
        return
      }
      await moveUp();
      break;
    case "ArrowDown":
      if (!canMoveDown()) {
        setupInput();
        return;
      }
      await moveDown();
      break;
    case "ArrowLeft":
      if (!canMoveLeft()) {
        setupInput();
        return;
      }
      await moveLeft();
      break;
    case "ArrowRight":
      if (!canMoveRight()) {
        setupInput();
        return;
      }
      await moveRight();
      break;
    default:
      setupInput
      break
  }

  grid.cells.forEach(cell => cell.mergeTiles())

  const newTile = new Tile(gameBoard)
  grid.randomEmptyCell().tile = newTile
  
  if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
    newTile.waitForTransition(true).then(() => {
      alert("You lose")
    })
    return
  }
  
  setupInput()
}

function moveUp() {
  // slideTiles(grid.cellsByColumn)
  return slideTiles(grid.cellsByColumn)
}

function moveDown() {
  return slideTiles(grid.cellsByColumn.map(column => [... column].reverse()))
 }

function moveLeft() {
  return slideTiles(grid.cellsByRow);
}

function moveRight() {
  return slideTiles(grid.cellsByRow);
}

function canMove(cells) { //If anything returns true, all returns true
  return cells.some(group => {
    return group.some((cell, index) => {
      if (index === 0) return false
      if (cell.tile == null) return false
      const moveToCell = group[index - 1] 
      return moveToCell.canAccept(cell.tile) 
    })
  })
}

function canMoveUp() {
  return canMoveDown(grid.cellsByColumn)
}

function canMoveDown() {
  return canMove(grid.cellsByColumn.map(column => [...column].reverse()))
}

function canMoveLeft() {
  return canMoveDown(grid.cellsByRow);
}

function canMoveRight() {
  return canMove(grid.cellsByRow.map((column) => [...column].reverse()));
}

function slideTiles(cells) {
  return Promise.all(
    cells.flatMap((group) => {
    const promises = []
    for (let i = 1; i < group.length; i++) {
      const cell = group[i];
      if (cell.tile == null) continue;
      let lastValidCell;
      for (let j = i - 1; j >= 0; j--) {
        const moveToCell = group[j];
        if (!moveToCell.canAccept(cell.tile)) break; //If you cant move, you cant move
        lastValidCell = moveToCell;
      }
      if (lastValidCell != null) {
        promises.push(cell.tile.waitForTransition())
        // Can we move?
        if (lastValidCell.tile != null) {
          //Are we moving into another tile?
          lastValidCell.mergeTile = cell.tile;
        } else {
          lastValidCell.tile = cell.tile; //Otherwise set the tile to our tile (og tile)
        }
        cell.tile = null;
      }
    }
      return promises
  }));
}