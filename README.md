# JavaScript Loose Equality and NaN Handling

This repository demonstrates an uncommon bug in JavaScript related to loose equality (==) and the handling of NaN (Not a Number).  Loose equality can lead to unexpected results when comparing values, especially when null and NaN are involved.

The `bug.js` file contains the problematic code. The `bugSolution.js` provides a solution to improve the handling of null and NaN values.

## Bug Description
The function `foo` aims to add two numbers. It handles null values correctly. However, loose equality doesn't correctly compare NaN.  As a result, `foo(NaN, 5)` and `foo(5, NaN)` return NaN instead of potentially throwing an error or providing a more informative result.  Strict equality (===) should be used for more precise comparisons.

## Solution
The `bugSolution.js` file uses strict equality (===) to check for null and NaN, providing more robust error handling and clarity.  The function now explicitly checks for NaN using `isNaN()`. 