# Unexpected Behavior with Falsy Values in JavaScript Function

This repository demonstrates a potential bug in JavaScript function handling of falsy values. The function `foo` explicitly checks for `null` values but does not handle other falsy values such as `0`, `""`, or `false`.

## Bug Description

The function `foo` is designed to add two numbers. It correctly handles null values by returning 0. However, it does not consider other falsy values, leading to unexpected behavior when such values are passed as arguments.

## Solution

The provided solution expands the function's logic to include a more robust handling of falsy values. This improved version performs the addition only when both inputs are valid numbers, otherwise it returns 0. This ensures that the function behaves consistently across a broader range of inputs.
