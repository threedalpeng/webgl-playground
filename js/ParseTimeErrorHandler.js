const currentHostAddress = location.protocol + "//" + location.host;

function handleParseTimeError(error, url, line, column, errorObject) {
  alert(
    `${error}\nat [${url.replace(
      currentHostAddress,
      ""
    )}, ${line}:${column}],\nStackTrace: ${errorObject}`
  );
}

window.onerror = handleParseTimeError;
