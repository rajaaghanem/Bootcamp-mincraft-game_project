import { theGame } from "/game.js";
export const pickaxe = document.querySelector(".pickaxe-btn");
export const shovel = document.querySelector(".shovel-btn");
export const axe = document.querySelector(".axi-btn");

// the gamer selectd the pickaxe tool
pickaxe.addEventListener("click", (event) => {
  removeActiveClass(pickaxe, shovel, axe);
  theGame.selectedTool = "pickaxe";
});

// the gamer selectd the shovel tool
shovel.addEventListener("click", (event) => {
  removeActiveClass(shovel, pickaxe, axe);
  theGame.selectedTool = "shovel";
});

// the gamer selectd the axe tool
axe.addEventListener("click", (event) => {
  removeActiveClass(axe, shovel, pickaxe);
  theGame.selectedTool = "axe";
});

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
