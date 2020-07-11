function sumOdDigits(number) {
  if (number === "") {
    return 0;
  }
  return Number(number[0]) + sumOdDigits(number.substr(1));
}
console.log(sumOdDigits("345"));
