function remove(string) {
  if (string.length === 0) {
    return "";
  }
  if (string[0] === "\t" || string[0] === " ") {
    return remove(string.substr(1));
  } else {
    return string[0] + remove(string.substr(1));
  }
}
console.log(remove("Hello world"));
