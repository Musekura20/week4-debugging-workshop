# Exercise 1: Six Broken Snippets

## Snippet 1: Greeting

**Error type:** ReferenceError

**What it means:** The code uses `studentname`, but the variable was declared as `studentName`. JavaScript is case-sensitive, so these names are different.

**Fix:**
```javascript
const studentName = "Aline";
console.log("Welcome, " + studentName);
```

## Snippet 2: Shouting

**Error type:** TypeError

**What it means:** The method `toUppercase()` does not exist on strings. The correct method is `toUpperCase()`, with a capital C.

**Fix:**
```javascript
const city = "Kigali";
console.log(city.toUpperCase());
```

## Snippet 3: Page Title

**Error type:** TypeError

**What it means:** The selector searches for `#page-titel`, but the actual heading ID is `page-title`. The selector returns `null`, and the code cannot set `textContent` on `null`.

**Fix:**
```javascript
const title = document.querySelector("#page-title");
title.textContent = "My Tasks";
```

## Snippet 4: Score Counter

**Error type:** TypeError

**What it means:** A variable declared with `const` cannot be reassigned. The code tries to change `score` from 0 to 10.

**Fix:**
```javascript
let score = 0;
score = score + 10;
console.log(score);
```

## Snippet 5: Shopping List

**Error type:** SyntaxError

**What it means:** A comma is missing between `"avocado"` and `"banana"` in the array. JavaScript cannot parse the code correctly.

**Fix:**
```javascript
const fruits = ["mango", "avocado", "banana"];
console.log(fruits.length);
```

## Snippet 6: Countdown

**Error type:** RangeError

**What it means:** The function calls itself repeatedly without a stopping condition. This causes a maximum call stack size exceeded error.

**Fix:**
```javascript
function countdown(n) {
  if (n < 0) {
    return;
  }

  console.log(n);
  countdown(n - 1);
}

countdown(5);
```

The condition `n < 0` stops the function after it prints 0.