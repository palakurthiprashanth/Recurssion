function decimalToBinary(decimal) {
  if (decimal === 1) {
    return "1";
  }
  return decimalToBinary(Math.floor(decimal / 2)) + String(decimal % 2);
}
console.log(decimalToBinary(11));
