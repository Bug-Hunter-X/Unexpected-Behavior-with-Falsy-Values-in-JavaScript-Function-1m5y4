function foo(a, b) {
  // Check if both a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-numeric values
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0, 5)); // Output: 5
console.log(foo(5, "")); // Output: 0
console.log(foo(5, false)); // Output: 0