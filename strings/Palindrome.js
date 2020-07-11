function reverse(str) {
  if (str === "") {
    return "";
  }
  return str[str.length - 1] + reverse(str.substr(0, str.length - 1));
}

console.log(reverse("abc"));


function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  return false;
}
console.log(isPalindrome("madam"));
