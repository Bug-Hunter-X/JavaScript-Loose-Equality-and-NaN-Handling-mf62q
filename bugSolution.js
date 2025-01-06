function foo(a, b) {
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return 'Invalid input: null or NaN'; // Handle null and NaN values
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: Invalid input: null or NaN
console.log(foo(5, null)); // Output: Invalid input: null or NaN
console.log(foo(5, 5));   // Output: 10
console.log(foo(NaN, 5)); // Output: Invalid input: null or NaN
console.log(foo(5, NaN)); // Output: Invalid input: null or NaN