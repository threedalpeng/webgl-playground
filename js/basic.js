import utils, { $id } from "./utils.js";

function init() {
  let cvs = $id("webgl-canvas");
  let gl = cvs.getContext("webgl2");
  let text_log = $id("cvs-log");
  console.log(gl);
  text_log.innerText = gl;
  utils.attachLog();
  utils.log("hihi");
}

window.onload = init;
