/**
The input strings are already sorted. We need to merge the two strings in a way that the output string is also sorted.
**/

function merge(string1, string2) {
  if (string1.length === 0 && string2.length === 0) {
    return "";
  }
  if (string1.length === 0) {
    return string2;
  } else if (string2.length === 0) {
    return string1;
  }
  if (string1[0] > string2[0]) {
    return string2[0] + merge(string1, string2.substr(1));
  } else {
    return string1[0] + merge(string1.substr(1), string2);
  }
}

console.log(merge("acu", "bst"));
