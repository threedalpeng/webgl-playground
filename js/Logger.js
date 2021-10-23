import { $q, $id, $el } from "./utils.js";

export default class Logger {
  static #logNode;
  static #staticConstructor = (function () {
    let body = $q("body");
    let logSideBar = $el("div");
    logSideBar.setAttribute("id", "log-sidebar");

    Logger.#logNode = $el("p");
    Logger.#logNode.setAttribute("id", "log-text");

    logSideBar.appendChild(Logger.#logNode);
    body.appendChild(logSideBar);

    Logger.#logNode.innerText = "Here is a log";
  })();

  static log(...messages) {
    let logMessage = "";
    messages.forEach((message) => {
      logMessage += message;
      if (typeof message === "object") {
        for (let attr in message) {
          logMessage += " " + attr;
        }
      }
      logMessage += " ";
    });
    Logger.#logNode.innerHTML += logMessage + "<br/>";
  }
}
