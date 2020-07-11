/**
Example1: Where m < n #
Suppose m = 42m=42 and n = 56n=56.

Step1: m < nm<n, therefore, subtract 4242 from nn. Now, m = 42m=42 and n = 14n=14.

Step2: m > nm>n, therefore, subtract 1414 from mm. Now, m = 28m=28 and n = 14n=14.

Step3: m > nm>n, therefore, subtract 1414 from mm. Now, m = 14m=14 and n = 14n=14.

Step4: m == nm==n, therefore, the greatest common divisor of 4242 and 5656 is 1414.
**/

function GCD(num1, num2) {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    return GCD(num1 - num2, num1);
  } else {
    return GCD(num1, num2 - num1);
  }
}
var number1 = 6;
var number2 = 9;
console.log(GCD(number1, number2));
