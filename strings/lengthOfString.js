function lengthOFString(str) {
  if (str === "") {
    return 0;
  }
  return 1 + lengthOFString(str.substr(1));
}
console.log(lengthOFString("abc"));
