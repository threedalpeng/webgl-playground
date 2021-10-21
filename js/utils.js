export const $q = (q) => document.querySelector(q);
export const $qa = (q) => document.querySelectorAll(q);
export const $id = (id) => document.getElementById(id);
export const $cls = (cls) => document.getElementsByClassName(cls);

const utils = {
  gl: "",
  logBar: "",
  attachLog: () => {
    let body = $q("body");

    let logSideBar = document.createElement("div");
    logSideBar.setAttribute("id", "log-sidebar");

    utils.logBar = document.createElement("p");
    utils.logBar.setAttribute("id", "log-text");

    logSideBar.appendChild(logBar);
    body.appendChild(logSideBar);

    utils.logBar.innerText = "Here is a log";
  },
  log: (message) => {
    utils.logBar.innerHTML += "<br/>" + message;
  },
  loadShader: async (vert, frag) => {
    utils.log("loading shader...");
    let vertexShaderSource = await (await fetch(vert)).text();
    let fragmentShaderSource = await (await fetch(frag)).text();
    let vertexShader = gl.createShader(gl.VERTEX_SHADER);
    let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    vertexShaderSource.trim();
    utils.log(vertText);
  },
};

export default utils;
