import { matrixSecound } from "/game_board-secound.js";
import { matrixDark } from "/dark_mode-board.js";

const startButton = document.querySelector(".start-btn");
const landingPage = document.querySelector(".landing-page");
const pickaxe = document.querySelector(".pickaxe-btn");
const shovel = document.querySelector(".shovel-btn");
const axe = document.querySelector(".axi-btn");
const activeClass = document.querySelector(".active-btn");
let inventory = document.querySelector(".inventory-btn");
const resetButton = document.querySelector(".reset-btn");
const gameBoard = document.querySelector(".game-board");
const secoundBoard = document.querySelector('[data-board="secound-board"]');
const firstBoard = document.querySelector('[data-board="first-board"]');
const darkBoard = document.querySelector('[data-board="dark-board"]')

let theGame = {
  selectedTool: "",
  clickedOnInventory: false,
  isEmptyInventory: true,
  board: "first",
};

let colors = {
  green: "green",
  brown: "brown",
  darkbrown: "darkbrown",
  white: "white",
  blue: "blue",
  gray: "gray",
  packs: "packs",
  stones: "stones",
};

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [7, 7, 0, 2, 2, 2, 0, 0, 0, 7, 7, 0, 0, 0, 1, 1, 0, 3, 0, 0, 1],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

firstBoard.addEventListener("click", (event) => {
  theGame.board = "first";
  gameBoard.style.backgroundColor = "rgb(89, 177, 218)";
  resetGame(matrix);
  CreatingTheBoard(matrix);
});

secoundBoard.addEventListener("click", (event) => {
  theGame.board = "secound";
  gameBoard.style.backgroundColor = "rgb(89, 177, 218)";
  resetGame(matrixSecound);
  CreatingTheBoard(matrixSecound);
});

darkBoard.addEventListener('click', (event)=>{
  theGame.board = "dark";
  gameBoard.style.backgroundColor = "black";
  resetGame(matrixDark);
  CreatingTheBoard(matrixDark);
})

//starting the game
startButton.addEventListener("click", (event) => {
  landingPage.style.visibility = "hidden";
  CreatingTheBoard(matrix);
});

//creating the elements
function CreatingTheBoard(matrixEl) {
  gameBoard.innerHTML = "";
  for (let i = 0; i < matrixEl.length; i++) {
    for (let j = 0; j < matrixEl[i].length; j++) {
      let gameElement = document.createElement("div");

      switch (matrixEl[i][j]) {
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
        // default:
        //   gameElement.classList.add(colors.blue);
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

// the gamer celectd the pickaxe tool
pickaxe.addEventListener("click", (event) => {
  removeActiveClass(pickaxe, shovel, axe);
  theGame.selectedTool = "pickaxe";
});

// the gamer celectd the shovel tool
shovel.addEventListener("click", (event) => {
  removeActiveClass(shovel, pickaxe, axe);
  theGame.selectedTool = "shovel";
});

// the gamer celectd the axe tool
axe.addEventListener("click", (event) => {
  removeActiveClass(axe, shovel, pickaxe);
  theGame.selectedTool = "axe";
});

//clicking on the gameboard
gameBoard.addEventListener("click", (e) => {

  if (theGame.clickedOnInventory && !theGame.isEmptyInventory) {
      e.target.classList = "";
      e.target.classList.value = inventory.classList.value;
      console.dir(inventory.classList);
      resetInventory();
    }

  else {
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
        // turnBlue("blue", e.target);
      } else pickaxe.classList.add("unactive-btn");
      break;

    case "shovel":
      if (
        e.target.classList.value === colors.brown ||
        e.target.classList.value === colors.packs
      ) {
        inventoryClasses(e.target.classList.value);
        shovel.classList.remove("unactive-btn");
        e.target.classList = "";
        // turnBlue("blue", e.target);
      } else shovel.classList.add("unactive-btn");
      break;

    case "axe":
      if (
        e.target.classList.value === colors.darkbrown ||
        e.target.classList.value === colors.green
      ) {
        inventoryClasses(e.target.classList.value);
        axe.classList.remove("unactive-btn");
        e.target.classList = "";
        // turnBlue("blue", e.target);
      } else axe.classList.add("unactive-btn");
      break;
  }
}

});

//clicking on the inventory button
inventory.addEventListener("click", (event) => {
  theGame.clickedOnInventory = true;
  if (!inventory.classList.value) theGame.isEmptyInventory = true;
  else theGame.isEmptyInventory = false;
});

// turning divs to blue
// function turnBlue(newClass, eTarget) {
//   eTarget.classList.remove(eTarget.classList.value);
//   eTarget.classList.add(newClass);
// }

//moving the active class to the selected tool
function removeActiveClass(eTarget, tool1, tool2) {
  removeUnactiveClass(eTarget, tool1, tool2);
  eTarget.classList.add("active-btn");
  tool1.classList.remove("active-btn");
  tool2.classList.remove("active-btn");
}

// remove the red board after clicking on valid tiels
function removeUnactiveClass(eTarget, tool1, tool2) {
  eTarget.classList.remove("unactive-btn");
  tool1.classList.remove("unactive-btn");
  tool2.classList.remove("unactive-btn");
}

// save the class of the last tile in the inventory
function inventoryClasses(eTargetClass) {
  console.dir(inventory.classList);
  inventory.classList = "";
  inventory.classList.add(`${eTargetClass}`);
  console.dir(inventory.classList);
}

// remove the class from the inventory
function resetInventory() {
  inventory.classList = "";
  theGame.clickedOnInventory = false;
  theGame.isEmptyInventory = true;
}

//reset the game-board
resetButton.addEventListener("click", (event) => {
  resetGame(matrix);
});

//reset the game
function resetGame(matrixEl) {
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
