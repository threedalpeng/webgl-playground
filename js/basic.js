import utils, { $id } from "./utils.js";

function init() {
  utils.attachLog();

  let cvs = $id("webgl-canvas");
  let gl = cvs.getContext("webgl2");
}

window.onload = init;
