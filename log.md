### Day 1: June 20, 2022

**What we learned:**

- Basic project setup
- Different ways to run JavaScript
- Writing basic JavaScript syntax
- Enforcing code quality via ESLint and Prettier

**My Notes:** For the first day of this challenge, we went through some basic setup for the course starter files, and making sure we have installed the various programs and tools we will be using throughout the course.

Next, we explored different ways to run JavaScript:

- We can run JS directly via the browser console (Chrome shortcut: `Ctrl+Shift+J`)
- We can add a `<script>` tag in our HTML file and directly run JS from there. Here we also learn why we have to place our `<script>` tag before the closing `</body>` tag, to ensure that the elements in our HTML code have already loaded before our JS code runs.
- We can add a separate `.js` file, reference it via `<script src="filename.js">`, and run the code contained in that `.js` file.
- We can use Node.js to run our `.js` files. This is typically done for server-side JS code.

Next, we learned how to write some basic JS statements, and learned three different ways to define JS variables:

- Variables defined with `var` can be changed later, and is _function-scoped_ (only available within the parent function)
- Variables defined with `let` can be changed, but is also _block-scoped_ (a bit more strictly scoped than `var`, we'll explore this later in the course!)
- Variables defined with `const` cannot be changed (except for arrays and/or objects, again we'll learn more about those later in the course!)

Finally, we are introduced to two of the most popular tools for enforcing code quality and formatting in out JS code, which are ESLint and Prettier. ESLint is a _linter_, or a tool that helps us identify or report potential issues in our JS code. ESLint is also configurable (lets us set different "rules" depending on our preferred coding style) and pluggable (lets us use predefined "rules" that other people have already spent time choosing well). Prettier enforces _formatting_ for our JS code, such as indentation, spaces between lines of code, or even adding/removing semicolons and enforcing consistency between single quotes (`'`) or double quotes (`"`).

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-1

### Day 2: June 21, 2022

**What we learned:**

- Basic JavaScript Types
  - Strings
  - Numbers
  - Objects
  - Null/Undefined
  - Booleans
- JavaScript Function basics
  - Built-in vs Custom functions

**My Notes:**
Today we learn about the basic data types that are included in JS:

- **Strings**: Used for holding text, denoted by single (`'`) or double quotes (`"`). Also has a special variant called _template strings_, denoted by backticks (`` ` ``) which can be used for more complex stuff such as interpolation and adding multiple lines.
- **Numbers**: Pretty much self explanatory 😅 JS supports basic arithmetic operations (`+`, `-`, `*`, `/`), as well as having a built-in `Math` helper methods that are useful for various everyday things such as rounding or generating random numbers.
- **Objects**: The biggest building block in JS. Almost everything in JS can be considered an object. Objects are a way to group related data into a single variable through a `{ key: value }` pair. The course will also have a section later dedicated to exploring objects in-depth!
- **Undefined**: A way to express "nothing" in JS. If you create a variable (or object property) and don't set anything to it, it will be `undefined`.
- **Null**: Another way to express "nothing" in JS. `null` is something that has been given an _explicit_ value of nothing, whereas `undefined` can be something that has _not yet_ been given a value.
- **Booleans**: Can either be `true` or `false`. We'll be using booleans a lot throughout the course to add logic in our JS code.

We also learn how JS handles equality. There are two ways to check equality in JS:

- Using **double equal signs** (`==`), JS performs what is called a _type coercion_, which attempts to put the two values into the same type before checking equality. This is where you might get funky stuff like `"10" == 10` returning `true`.
- Using **triple equal signs** (`===`), JS checks both value _and_ type for equality. More often than not, we'll want to work with the same data type when checking for equality (i.e. `"10" === 10` should return `false`). This is why **we should almost always be using `===`** when checking for equality in JS.

Finally, we also learn the basics of functions in JS. For today, we only take a look into using buit-in JS functions (such as those `Math` helper methods) as well as how to create our own functions in JS. We'll take a much deeper dive on functions in the upcoming lectures!

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-2
