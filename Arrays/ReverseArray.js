function reverse(array) {
  if (array.length === 0) {
    return [];
  } else {
    return [array[array.length - 1]].concat(
      reverse(array.slice(0, array.length - 1))
    );
  }
}
console.log(reverse([1, 2, 3]));
