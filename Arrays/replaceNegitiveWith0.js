// creates new array 

function replace(array) {
  if (array.length === 0) {
    return [];
  } else if (array[0] < 0) {
    return [0].concat(replace(array.slice(1)));
  } else {
    return [array[0]].concat(replace(array.slice(1)));
  }
}
var array = [-1, 2, 0, -1, 5, -3];
console.log(replace(array));


// replaces
function replace(array, currentIndex) {
  if (currentIndex < array.length) {
    if (array[currentIndex] < 0) {
      array[currentIndex] = 0;
    }

    replace(array, currentIndex + 1);
  }

  return;
}
