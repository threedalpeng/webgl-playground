import { $q, $id } from "./utils.js";

export default class Logger {
  static constructor() {
    let body = $q("body");
    let logSideBar = document.createElement("div");
    logSideBar.setAttribute("id", "log-sidebar");

    Logger._logNode.setAttribute("id", "log-text");

    logSideBar.appendChild(Logger._logNode);
    body.appendChild(logSideBar);

    Logger._logNode.innerText = "Here is a log";
  }
  static _logNode = document.createElement("p");
  static log(message) {
    Logger._logNode.innerHTML += "<br/>" + message;
  }
}
