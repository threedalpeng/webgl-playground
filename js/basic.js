import utils, { $id } from "./utils.js";
import Logger from "./Logger.js";
import Application from "./Application.js";

function init() {
  Logger.log("hi");
  let app = new Application();

  app.run();

  let cvs = $id("webgl-canvas");
  let gl = cvs.getContext("webgl2");

  //utils.loadShader("/shaders/basic.vert", "/shaders/basic.frag");

  //let program = gl.createProgram();

  // gl.linkProgram(program);
}

window.onload = init;
