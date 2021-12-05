import { matrix } from "/game_board-first.js";
import { matrixSecound } from "/game_board-secound.js";
import { matrixDark } from "/dark_mode-board.js";
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
  green: "green",
  brown: "brown",
  darkbrown: "darkbrown",
  white: "white",
  blue: "blue",
  gray: "gray",
  packs: "packs",
  stones: "stones",
  darkPacks: "dark-packs",
  darkGreen: "dark-green",
  darkBrownMode: "dark-mode-brwon",
  darkOak: "dark-oak",
};

//starting the game
startButton.addEventListener("click", (event) => {
  landingPage.style.visibility = "hidden";
  CreatingTheBoard(matrix);
});

//creating the elements
export function CreatingTheBoard(matrixEl) {
  gameBoard.innerHTML = "";
  for (let i = 0; i < matrixEl.length; i++) {
    for (let j = 0; j < matrixEl[i].length; j++) {
      let gameElement = document.createElement("div");

      switch (matrixEl[i][j]) {
        case 11:
          gameElement.classList.add(colors.darkOak);
          break;
        case 10:
          gameElement.classList.add(colors.darkBrownMode);
          break;
        case 9:
          gameElement.classList.add(colors.darkGreen);
          break;
        case 8:
          gameElement.classList.add(colors.darkPacks);
          break;
        case 7:
          gameElement.classList.add(colors.stones);
          break;
        case 6:
          gameElement.classList.add(colors.packs);
          break;
        case 5:
          gameElement.classList.add(colors.white);
          break;
        case 4:
          gameElement.classList.add(colors.brown);
          break;
        case 3:
          gameElement.classList.add(colors.darkbrown);
          break;
        case 2:
          gameElement.classList.add(colors.green);
          break;
        case 1:
          gameElement.classList.add(colors.gray);
          break;
      }
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

//clicking on the gameboard
gameBoard.addEventListener("click", (e) => {
  if (theGame.clickedOnInventory && !theGame.isEmptyInventory) {
    e.target.classList = "";
    e.target.classList.value = inventory.classList.value;
    console.dir(inventory.classList);
    resetInventory();
  } else {
    switch (theGame.selectedTool) {
      case "pickaxe":
        if (
          e.target.classList.value === colors.gray ||
          e.target.classList.value === colors.stones
        ) {
          inventoryClasses(e.target.classList.value);
          console.dir(inventory.classList);
          pickaxe.classList.remove("unactive-btn");
          e.target.classList = "";
        } else pickaxe.classList.add("unactive-btn");
        break;

      case "shovel":
        if (
          e.target.classList.value === colors.brown ||
          e.target.classList.value === colors.packs ||
          e.target.classList.value === colors.darkPacks ||
          e.target.classList.value === colors.darkBrownMode
        ) {
          inventoryClasses(e.target.classList.value);
          shovel.classList.remove("unactive-btn");
          e.target.classList = "";
        } else shovel.classList.add("unactive-btn");
        break;

      case "axe":
        if (
          e.target.classList.value === colors.darkbrown ||
          e.target.classList.value === colors.green ||
          e.target.classList.value === colors.darkGreen ||
          e.target.classList.value === colors.darkOak
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
