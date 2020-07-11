function count(array, key) {
  if (array.length <= 0) {
    return 0;
  }
  if (array[0] === key) {
    return 1 + count(array.slice(1), key);
  } else {
    return count(array.slice(1), key);
  }
}

var myArray = [1, 2, 1, 4, 5, 1];
var key = 1;
console.log(count(myArray, key));
