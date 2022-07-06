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

### Day 3: June 22, 2022

**What we learned:**

- More about Functions
  - Parameters and Arguments
  - Different ways to declare functions

**My Notes:** In today's lectures, we take a deeper dive on JS functions. Here's a quick recap on today's topics:

- **Anatomy of a JS Function**: Wes put together a neat cheatsheet that explains the different parts of a function. Check it out:
  ![Wes Bos's Function Definition Diagram](https://raw.githubusercontent.com/wesbos/beginner-javascript/master/function-definition.jpg)
- **Parameters/Arguments**: Can be passed into a function, which are then used like variables available within the function's scope. Parameters are the _placeholders_ (or the variable names) for the values to be passed to the function, while arguments are the _actual values_ passed to the function.
- **Default Parameter Values**: Parameters can have default values assigned to them upon defining the function. This allows us to call the function without passing in any value to those parameters, as they will just fall back to using these default values when you don't explicitly pass them.
- **Different ways to declare functions**:
  - **Function Declaration**: The classic way to declare functions: (`function f() { /* ... */ }`)
  - **Anonymous Function**: Functions without a name. Errors out on their own. Typically used as a quick way to pass functions into something else, such as callbacks: (`function() { /* ... */ }`)
  - **Function Expression**: Stores the function as a value in a variable: (`const f = function() { /* ... */ }`)
  - **Arrow Function**: A newer, more concise way to write functions: (`const f = () => { /* ... */ }`)
- **Hoisting**: Basically the ability to call functions before they are actually declared. Only applies to regular function declarations - functions stored within variables (like function expressions) are NOT hoisted.
- **IIFE**: Stands for **Immediately Invoked Function Expression**. IIFEs are functions that are immediately run upon declaration. Used to be a very popular way to call one-off functions in the old days of JS before it had modules and block scope.
- **Methods**: Functions that live inside objects.
- **`this`**: A reference to the object that it was called against. Especially useful when dealing with methods, and are basically the reason why you might or might not want to use arrow functions when declaring these methods.
- **Callback Functions**: Functions that are called after something is done, such as handling user clicks or time based events such as `setTimeout()` or `setInterval()`.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-3

### Day 4: June 23, 2022

**What we learned:** Debugging tools, Scope, Hoisting, and Closures

**My Notes:**

**Debugging Tools**
We explore different ways to debug our JS apps. The most common way to debug JS apps is through `console.log()` (and its other flavors such as `info`/`warn`/`error`). Logging to the console also provides us a _stack trace_, where we can see the function call/s that triggered the `console.log()` and help identify where to look for bugs. We may also make use of breakpoints (via the `debugger` command or manually setting breakpoints via the devtools), where we can then run our code line-by-line to take a closer look on how our code runs. We can also look at the `Network` tab to see the network requests our code may be making, letting us know how long those network requests take and examine the data getting passed around on each request.

**Scope**
Today we explore the different kinds of scope we encounter in JS:

- **Global Variables:** Exactly what it says on the tin. They are globally available, meaning they can be accessed anywhere within your application. In browser contexts, global variables are also attached to the `window` object, letting us reference them via `window.globalVariableName`.
- **Function Scope:** Variables defined within a function are only available within the bounds of that function (and any other functions defined within that function, as we'll see when we explore closures later). If there are other variables with the same name defined in an upper scope (i.e. global variables), the variable defined within the function takes priority (This behavior is called _variable shadowing_, which you might see an ESLint error about when coding along with the lectures)
- **Block Scope:** A unique behavior for variables defined using `let` or `const`. As the name implies, Block scoped variables are only accessible within the block they are defined in (usually between curly braces `{ }`). This is useful for preventing variables from unnecessarily leaking outside their containing blocks and potentially causing conflicts with other parts of the code.
- **Lexical/Static Scope:** Describes the way JS looks up variable definitions. JS will look up variables starting from where the function is _defined_, rather than where the function is _actually being ran_.

**Hoisting**
We already somewhat covered this yesterday. Today, we just explore more practical examples where hoisting can be useful.

**Closures**
Wes sums up closures quite nicely:

> Closures are the ability of a child (or inner) function to access variables from a higher level scope (i.e. from an outer function) even after the outer functions have been called or closed or closed over.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-4

### Day 5: June 24, 2022

**What we learned:** Basics of working with the DOM

**My Notes:** Today we start to build tangible examples within the browser using JavaScript's Document Object Model (DOM). Using the DOM, we can select existing elements within the webpage using `document.querySelector()` to select a single element, or `querySelectorAll()` to get a list of all elements that match a corresponding CSS selector string passed to the method. There are also other methods to more explicitly select elements such as `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, etc.

With the ability to select elements, we can now also start manipulating the properties of that element and/or work with its built-in methods and see the results in the webpage. For example, here's how we can work with the text contained within the selected element:

- `innerText`/`textContent`: Both can get (or set) the text contained within the selected element. The only difference is that `innerText` returns only the human readable content whereas `textContent` will get the contents of all of its child elements, including hidden elements and `<script>`/`<style>` elements.
- `innerHTML`: Gets (or sets) the HTML content of the selected element, turning it into (or parsing it from) a string.
- `insertAdjacentText()`: If you only want to append text content at the beginning or end of the selected element, this is a much easier way to do so (instead of using something like template strings).

We can also work with CSS classes with an element's `classList` object. an element's `classList` object has useful methods to `add()` or `remove()` classes, or even `toggle()` classes on or off. You can also easily check if the element `contains()` a specific class!

We can also work with other attributes for certain elements like `width`, `height`, or element-specific attributes like an `<img>` element's `alt` attribute. Elements have the `getAttribute()`, `setAttribute()`, and `hasAttribute()` methods which we can use to work with these attributes.

While we can add our own custom attributes using the `setAttribute` method, this is a somewhat discourage practice because it is possible to for it to have conflicts when future HTML standards change. Instead, we can use an element's special `dataset` object where we can add our own custom attributes. The `dataset` object then takes these custom attributes and appends them with `data-`, e.g. `dataset.description` turns into `data-description` when you go and inspect the element.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-5

### Day 6: June 25, 2022

**What we learned:** Different ways to create and manage DOM elements, and navigating through the DOM

**My Notes:** We can create new DOM elements using the `document.createElement()` method. Though the newly-created DOM elements don't yet appear in the actual page, we can still modify their contents/attributes/etc. with the various methods we've covered yesterday. We can then make these new elements show up in the page by using the `appendChild()` (old) or `append()` (new) methods on an existing element. We can also use the `insertAdjacentElement()` method to easily add a sibling element similar to how we did using `insertAdjacentText()` yesterday.

If creating individual elements using the above methods becomes too tedious, we can also write HTML elements using strings, and then use the `innerHTML` attribute or `insertAdjacentHTML()` method on an existing element to add the HTML to the page. We can even use template strings to interpolate variables in the HTML string! If for some reason we need to access some DOM node within a HTML string however, we'll need to parse the string first into a DOM fragment using the `document.createRange().createContextualFragment()` method.

HTML strings should be used with caution however, as malicious users may be able to run malicious code if we do not sanitize the user inputs before turning them into these HTML strings. Wes also has a lecture all about security wwhich will explore this topic in-depth later in the course.

We can also traverse through the DOM _elements_ (Actual HTML tags like `<div>`, ignoring text nodes) starting from an already selected element using these (self-explanatory) properties: `children`, `firstElementChild`, `lastElementChild`,`previousElementSibling`, `nextElementSibling`, and `parentElement`. We also have additional methods to traverse DOM _nodes_ (does NOT ignore text nodes): `childNodes`, `firstChild`, `lastChild`, `previousSibling`, `nextSibling`, and `parentNode`.

Wes also introduces us to the **"Cardio"** exercises, which aims to let us practice through this section's material through a series of exercises that are all related to one another. This section's Cardio exercise covers the different DOM properties and methods we've learned starting from yesterday, and walks us through the general workflow for working with the DOM staring from creating an element, adding content/classes/attributes/etc., adding more elements as children/siblings, and creating dynamic HTML content by writing a function that accepts some variables to be interpolated into the HTML string.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-6

### Day 7: June 26, 2022

**What we learned:** Working with event listeners, the `event` object, and event propagation.

**My Notes:** We've seen a preview of this topic on the past lectures and exercises, but today we officially learn about event listeners!

We can add an event listener to an element using the `addEventListener()` method, and passing it the event we want to listen for (`"click"`, `"mousemove"`, etc.) and a **_callback function_**, which is a function that gets called when the user triggers the event.

If we want to listen to events for multiple elements at once (i.e. elements returned by `document.querySelectorAll()`), we'll need to loop over the elements, or use the `forEach()` method to add the event listeners to the individual elements.

Of course, event listeners are nothing without the actual _events_ that we need to deal with! The callback function we passed in `addEventListener` will actually get called with an `event` parameter, which is an object containing several useful details about the actual event being triggered (like the screen coordinates where the user has clicked/moved their mouse on). More importantly, the `event` object also contains the `target` (which element triggered the event?) and `currentTarget` (which element is the event listener attached to?) attributes.

We also learn about **_event propagation_**, where events "bubble" up to the top of the DOM tree and triggers relevant event listeners along the way. We can take advantage of this by adding a third argument to our `addEventListener()` call, passing an object which can have multiple options such as `capture`. Setting `capture: true` lets us fire off the event at the _capture phase_ (going down from the top of the DOM to the actual element that triggered the event) rather than the _bubble phase_ (going from the element that triggered the event to the top of the DOM). If we want to stop the event from bubbling up (or down in the capture phase), we can also add `event.stopPropagation()` within our callback function.

Finally, we get a preview of the `this` keyword. When we inspect `this` within our event listener, we'll see that it (ideally) points to the element that the listener is attached to (similar to `event.currentTarget`). However when we use an arrow function as our callback function, `this` will instead point to the parent scope (like an outer nested function or the `window` object). We'll learn more about `this` in the upcoming sections!

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-7

### Day 8: June 27, 2022

**What we built:** An Etch-a-Sketch app using the HTML5 Canvas

**My Notes:** We have our first "real-world" application exercise today! The Etch-a-Sketch app project showcases the previous topics we've covered so far, from the basic JS fundamentals to working with events on DOM elements, in a more challenging context (heh) with the HTML5 Canvas API. We also get a preview of some of the later topics such as flow control using `switch` and destructuring.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-8

### Day 9: June 28, 2022

**What we built:**

- A modal that can be dismissed by clicking outside
- A button that is disabled until you fully scroll through some content
- Accessible tab panels

**My Notes:** We get some more practice on the previous topics with these exercises:

- **Click-Outside Modal:** We practiced adding event listeners into DOM elements and adding dynamic content by using a templateString as the modal's `innerHTML`.
- **Scroll-to-Accept:** We take our event listener workflow and apply it into the new `IntersectionObserver` API.
- **Tabs:** We practiced getting/setting attributes on elements, and learned how we can make use of `ARIA` attributes and use them in our JS code to make our components more accessible.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-9

### Day 10: June 29, 2022

**What we learned:** The basics of logic and flow control in JavaScript

**My Notes:**

In today's lectures, we learned how to add logic into our JS code by using `if`/`else` blocks to conditionally run code. As their name implies, `if` blocks only run the code within its block if the condition passed into it is truthy (more about that later), otherwise the block gets skipped and the code within the `else` block gets run instead.

We can also use the AND (`&&`) and `OR` (`||`) operators to chain multiple conditions. `&&` resolves as `true` only if both conditions are truthy, otherwise it resolves as `false`. `||` resolves as `true` if at least one of the conditions is truthy, otherwise it resolves as `false`. We can also use the `!` operator to turn `true` into `false`, and vice versa.

What are truthy (and/or falsy) values, you might ask? Truthy values are values that resolve (or _coerce_) as `true`, and falsy values are values that resolve as `false`. `undefined`, `null`, `NaN`, and empty strings (`""`) are considered _falsy_ values, everything else is truthy (including empty arrays (`[]`) and objects (`{}`)).

We can also make simple `if`/`else` blocks a bit quicker using the ternary operator (`?` with `:`). The ternary operator requires: (1) A condition, (2) What to do if the condition is truthy, and (3) What to do if the condition is falsy. Ternary operators allow us to simplify `if`/`else` blocks into one line, and even put them within other expressions!

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-10

### Day 11: June 30, 2022

**What we learned:**

- Flow control using `switch`/`case`
- `setInterval()`/`setTimeout()`
- Objects

**My Notes:**

We've seen this briefly during the Etch-a-Sketch project, but another way to write conditional code in JS is using `switch`/`case` blocks. Here, the multiple `case`s serve as a more concise substitute to chained `if`/`else if`/`else` blocks.

We can also run delayed code using `setTimeout()` and `setInterval()`. Like their names imply, `setTimeout()` runs its callback function _only once_ after a specified amount of time, while `setInterval()` _repeatedly_ runs the callback with the specified interval time.

We also take a closer look at objects in JS. Objects are the fundamental building blocks of JS, allowing us to group together properties and values (also called _"key-value pairs"_). We can also add functions (now called _methods_ in this case) into objects to make use of the `this` keyword to access the object's properties within the method. Throughout the course, we'll be using objects to neatly group together some collections of properties, values, and methods into a easily accessible reference.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-11

### Day 12: July 1, 2022

**What we learned:** A deep dive into Objects, Maps, and Arrays in JS

**My Notes:**

Continuing from yesterday's lectures, we take a closer look at JS Objects and the difference between a value and a reference. We see that primitive data types (i.e. strings, numbers) are stored as values while objects are stored via reference, meaning that when two variables point to the same object, any changes made using one of the variables as reference will also reflect on the other variable.

We also explore different options to make "safe" copies of an object without running into these reference issues. We can use the spread (`...`) operator to make a shallow copy (nested objects may have the same reference issue) of an object's contents into a separate variable. To make a deep copy of an object (ensuring all nested objects point to a new reference), we can use external libraries like Lodash (with its `_.cloneDeep()` method) instead of manually copying each nested object.

We also briefly talk about Maps, which is a data type functionally similar to objects but with some key differences such as being able to use other data types (even objects) as keys, preserving insertion order, and some more under-the-hood performance optimizations.

Finally we also talk about Arrays, which is a data type for storing _ordered_ collections of data. We learned how to use index numbers to access data inside an array. We also explore the most common array methods for inserting and removing data into an array, and briefly talk about _mutable_ (changes the data inside the array) and _immutable_ (DOES NOT change the data inside the array, instead typically creating a new copy) methods.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-12

### Day 13: July 2, 2022

**What we learned:** Lots and lots of array methods

**My Notes:**

Arrays have way too many methods to reasonably fit into regular course lectures. So instead of walking us through every single array method one by one, today's series of cardio exercises walks us through the most useful ones we'll be using when dealing with most common types of array data:

- **Static Methods**
  - `Array.of()`
  - `Array.from()`
  - `Array.isArray()`
  - `Object.keys()`
  - `Object.values()`
  - `Object.entries()`
- **Instance Methods**
  - `join()`
  - `split()`
  - `push()`
  - `pop()`
  - `unshift()`
  - `shift()`
  - `slice()`
  - `splice()`
  - `indexOf()`/`lastIndexOf()`
  - `includes()`
  - `reverse`
- **Callback Methods**
  - `find()`
  - `filter()`
  - `some()`
  - `every()`
  - `sort()`

I highly recommend going through these cardio exercises yourself to see these array methods in action!

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-13

### Day 14: July 3, 2022

**What we learned:** Array `forEach()`, `map()`, `filter()`, and `find()` methods

**My Notes:**

We take a closer look at some of the common methods we use for looping through an array:

- `forEach()` - We've been using this one quite a bit now! This method simply runs the callback function for every item in the array. `forEach()`, and actually most of the other array methods used for looping through an array, pass three things to the callback function: (1) the current item, (2) the _index_ of the current item, and (3) a reference to the array itself.
- `map()` - This method also runs a callback function for every item in the array. However, the callback function must now return something (e.g. transforming the current item into another value). `map()` then returns _a new array_ containing the transformed items.
- `filter()` - Returns _a new array_ containing all of the items that satisfy the given condition in the callback function.
- `find()` - Returns _a single item_ that satisfies the given condition in the callback function.

We also learned how to take advantage of **Higher Order Functions** to write more flexible code when dealing with multiple similar conditions, i.e. generating callback functions to `find()`/`filter()` by property in a complex object.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-14

### Day 15: July 4, 2022

**What we learned:** `Array.reduce()`, `for` loops, and `while` loops

**My Notes:**

The Array `reduce()` method still loops through the whole array and calls a callback function each time, but only returns a single value. The callback function manages what happens to that single value for every item in the array. This method is useful for a wide variety of things such as tallying up a total value for an array of numbers, counting the frequency of certain object properties, and so much more. We also have an exercise today where we used `reduce()` to count the frequency of every alphanumeric letter in an MDN docs page.

We also learn other ways to loop in JS:

- **`for` loop** - Requires three things: (1) an initial expression, (2) a condition, and (3) something to change that initial expression. The loop runs until the specified condition becomes `false`.
- **`while` loop** - Runs some code depending on a condition similar to an `if` block, but runs the code over and over until the condition becomes `false`.
- **`for...of` loop** - Similar to the Array `forEach()` method, this also loops over every single item. However, this can also loop on other iterables such as strings or maps.
- **`for...in` loop** - Loops over every key in an object. Unlike looping with `Object.keys()`, this also checks the object's prototype chain for other keys.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-15

### Day 16: July 5, 2022

**What we've built:** An app that detects (and censors) faces using the Experimental `FaceDetector` API

**My Notes:**

In today's project, we practice more with the HTML5 Canvas to display the user's webcam footage. We also check out the experimental `FaceDetector` API to, well, detect the user's face and then do some fun stuff like censoring the user's face by shrinking and then rescaling back to pixelate their face.

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-16

### Day 17: July 6, 2022

**What we've built:** sArCaStIc tExT GeNeRaToR

**My Notes:**

Today's project was a fun exercise that uses the array methods we've learned to transform some given text into _sArCaStIc tExT_. We also added a few more fun options like transforming each letter into weird Unicode characters and randomly adding pauses into each sentence. As a fun bonus for today, I also added an option to add r-r-r-random s-s-s-stutters to the text!

**Solution Link:** https://github.com/Insidiae/beginner-javascript-learning-club/tree/main/day-17
