import Graphics from "./Graphics.js";
import Logger from "./Logger.js";

export default class Application {
  constructor() {
    this.graphics = new Graphics();
  }

  #init() {
    this.graphics.init();
  }
  run() {
    Logger.log("Application Running...");
    this.#init();
  }
}
