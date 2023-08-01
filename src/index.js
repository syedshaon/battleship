// import "normalize.css";
// Will be using reset css through scss

//  TO DISABLE DONT IMPORT * AS bOOTSTRAP ALSO DON'T IMPORT BOOTSTRAP IN STYLE.SCSS FILE
/* import "bootstrap"; */

import "./style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap'

/* Following is required for Bulma CSS Hamburger Menu */

/* const el = document.querySelector(".navbar-burger");

el.addEventListener("click", () => {
  const targetExpand = document.getElementById("navbarBasicExample");

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  el.classList.toggle("is-active");
  targetExpand.classList.toggle("is-active");
}); */

import { Game, Player, Ship, Gameboard } from "./ship";

// Start the game loop
Game.start();

// Player Initialize
