
import {matrix} from "/boards.js";
import { pickaxe, shovel, axe } from "/tools.js";
import { inventory, inventoryClasses, resetInventory } from "/inventory.js";

const startButton = document.querySelector(".start-btn");
const landingPage = document.querySelector(".landing-page");
const resetButton = document.querySelector(".reset-btn");
export const gameBoard = document.querySelector(".game-board");

export let theGame = {
  selectedTool: "",
  clickedOnInventory: false,
  isEmptyInventory: true,
  board: "first",
};

export let colors = {
  1: "gray",
  2: "green",
  4: "brown",
  3: "darkbrown",
  5: "white",
  6: "packs",
  7: "stones",
  8: "dark-packs",
  9: "dark-green",
  10: "dark-mode-brwon",
  11: "dark-oak",
};

//starting the game
startButton.addEventListener("click", (event) => {
  landingPage.style.visibility = "hidden";
  CreatingTheBoard(matrix);
});

//creating the elements of the matrix
export function CreatingTheBoard(matrixEl) {
  gameBoard.innerHTML = "";
  for (let i = 0; i < matrixEl.length; i++) {
    for (let j = 0; j < matrixEl[i].length; j++) {
      let gameElement = document.createElement("div");
      gameElement.classList.add(colors[matrixEl[i][j]]);
      addElement(gameElement, i, j);
    }
  }
}

// add the element to the game-board
function addElement(gameElement, i, j) {
  gameElement.style.gridRowStart = i;
  gameElement.style.gridColumnStart = j;
  gameBoard.appendChild(gameElement);
}


gameBoard.addEventListener("click", (e) => {
  if (theGame.clickedOnInventory && !theGame.isEmptyInventory) {
    e.target.classList = "";
    e.target.classList.value = inventory.classList.value;
    resetInventory();
  } else {
    switch (theGame.selectedTool) {
      case "pickaxe":
        if (
          e.target.classList.value === colors[1] ||
          e.target.classList.value === colors[7]
        ) {
          inventoryClasses(e.target.classList.value);
          pickaxe.classList.remove("unactive-btn");
          e.target.classList = "";
        } else pickaxe.classList.add("unactive-btn");
        break;

      case "shovel":
        if (
          e.target.classList.value === colors[4] ||
          e.target.classList.value === colors[6] ||
          e.target.classList.value === colors[8] ||
          e.target.classList.value === colors[10]
        ) {
          inventoryClasses(e.target.classList.value);
          shovel.classList.remove("unactive-btn");
          e.target.classList = "";
        } else shovel.classList.add("unactive-btn");
        break;

      case "axe":
        if (
          e.target.classList.value === colors[3] ||
          e.target.classList.value === colors[2] ||
          e.target.classList.value === colors[9] ||
          e.target.classList.value === colors[11]
        ) {
          inventoryClasses(e.target.classList.value);
          axe.classList.remove("unactive-btn");
          e.target.classList = "";
        } else axe.classList.add("unactive-btn");
        break;
    }
  }
});



//reset the game-board
resetButton.addEventListener("click", (event) => {
  gameBoard.style.backgroundColor = "rgb(89, 177, 218)";
  resetGame(matrix);
});

//reset the game
export function resetGame(matrixEl) {
  gameBoard.innerHTML = "";
  theGame.selectedTool = "";
  theGame.clickedOnInventory = false;
  theGame.isEmptyInventory = true;
  inventory.classList = "";
  pickaxe.classList.remove("unactive-btn");
  axe.classList.remove("unactive-btn");
  shovel.classList.remove("unactive-btn");
  CreatingTheBoard(matrixEl);
}
