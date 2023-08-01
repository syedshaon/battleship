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

/* Bulma CSS Hamburger Menu Ends */

/* npx kill-port 3000 */

/* Need to add any of the following to vsCode setting json file to have CLASS intellisense */

/*  "css.styleSheets": ["https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", "/style.css", "style.css", "style.scss", "${fileBasenameNoExtension}.css"],
  "css.styleSheets": ["https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css", "/style.css", "style.css", "style.scss", "${fileBasenameNoExtension}.css"] */

import { capitalize } from "./sum";

console.log(capitalize("aabbcc"));
