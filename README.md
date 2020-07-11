# Recurssion

Function calling a function

## Format

1. Base condition , where recursive calls will stop if base condition is true
2. Recursive calls if BAse condition is false

## Memory Allocation in Recursion

When function is called memory is allocated in stack , LIFO.

## Memory Allocation of Recursive Functions

A different copy of local variables is created for each function call. When the base case is reached, the child function returns its value to the function from which it was called. Then, this child function’s stack frame is removed. This process continues until the parent function is returned.

## Types of recursion

1. Direct Recursion

  If a function calling itself in same function , it is direct recursion.
  ```javascript
      function function1(p1, p2, ..., pn) {
      // Some code here
      function1(p1, p2, ..., pn);
      // Some code here
    }
```

## Printing Natural Numbers from 1 to n Using Direct Recursion

```javascript
function printNumbers(lowrange, highrange) {
  //Base condition
  if (lowrange > highrange) {
    return;
  }
  console.log(lowrange);
  printNumbers(lowrange + 1, highrange);
}

```
2. Indirect Recursion

Occurs when Function calls another function, and another function called intial function again.

```javascript
function p1() {
  function p2();
}
function p2(){
  function p1();
}
```

```javascript
function printNumbers(lowrange, highrange) {
  if (lowrange <= highrange) {
    console.log(lowrange);
    lowrange = lowrange + 1;
    helperPrint(lowrange, highrange);
  } else {
    return;
  }
}

function helperPrint(lowrange, highrange) {
  if (lowrange <= highrange) {
    console.log(lowrange);
    lowrange = lowrange + 1;
    printNumbers(lowrange, highrange);
  } else {
    return;
  }
}
printNumbers(1, 5);

```

### Recursive vs Iteration

Both recursion and iteration are used for executing instructions repeatedly until some condition is satisfied.


Recursive code is slower than iterative code as it not only runs the program but also has to manage stack memory.
Iterative code has a relatively faster runtime.


Recursion uses the stack to store the variable changes for each recursive call. The stack is used to store the set of new local variables and parameters each time the function is called.
Iterative code does not use the stack.

### Steps for Converting Iterative Code to Recursive 

Identify the main loop

This loop should be modifying one or more variables
Use the loop condition as the base case and the body of the loop as the recursive case.

The local variables in the iterative version turn into parameters in the recursive version.

Compile and rerun tests.























