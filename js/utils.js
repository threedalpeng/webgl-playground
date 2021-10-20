export const $q = (q) => document.querySelector(q);
export const $qa = (q) => document.querySelectorAll(q);
export const $id = (id) => document.getElementById(id);
export const $cls = (cls) => document.getElementsByClassName(cls);

const utils = {
  attachLog: () => {
    let body = $q("body");

    let logbar = document.createElement("div");
    logbar.setAttribute("id", "log-sidebar");

    let text_log = document.createElement("p");
    text_log.setAttribute("id", "log-text");

    logbar.appendChild(text_log);
    body.appendChild(logbar);

    text_log.innerText = "Here is a log";
  },
  log: (message) => {
    let text_log = $id("log-text");
    text_log.innerHTML += "<br/>" + message;
  },
};

export default utils;
