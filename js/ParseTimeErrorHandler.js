const currentHostAddress = `${location.protocol}//${location.host}/`;

function handleParseTimeError(error, url, line, column, errorObject) {
  alert(
    `${error}\n    at ${url.replace(
      currentHostAddress,
      ""
    )}:${line}:${column}\nStackTrace: ${errorObject.stack.replaceAll(
      currentHostAddress,
      ""
    )}`
  );
}

window.onerror = handleParseTimeError;
