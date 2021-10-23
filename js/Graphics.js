import Logger from "./Logger.js";
import { $id } from "./utils.js";

export default class Graphics {
  constructor() {
    this.q = "a";
  }
  init() {
    Logger.log("hi");
    let canvas = $id("webgl-canvas");
    console.log(canvas);
    Logger.log(canvas);
    let gl = canvas.getContext("webgl2");
    console.log(Object.entries(gl));
    Logger.log(gl);
  }
}
