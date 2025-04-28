# Week 6

Today we'll rebuild our movies page with React!

NOTE: We MUST use a local server today.  I will use the VSCode server, but you can use `python3 -m http.server` or similar.

### ES6 (JS) Classes

JavaScript has a notion of classes similar to other object-oriented languages.

However, quirks abound, because even things that look like keywords
such as `class` and `extends` are really just "syntactic sugar" on top
of classic JavaScript.  (Internally, JavaScript classes are just translated into
plain functions in JS.)

Therefore, here are the main things you should know when writing JS classes:

1. Functions inside of a class declaration are called "methods", and they 
   do NOT use the `function` keyword.  Just omit it.
2. Use the new-style "arrow function" syntax wherever possible, so that the keyword
   `this` is more likely to feel more intuitive inside the function.
3. Use the special function `constructor` to initialize instances of your object upon creation.


### Important Ideas This Week

* React was originally an attempt to bring object-oriented programming to the web
* It has only recently given up on the object-oriented paradigm, preferring a functional approach instead
* Lots of object-oriented React code still exists.
* You should be comfortable with ES6 "arrow functions" and "object destructuring" syntax (see links below)

### React Main Ideas
* A React "application" is a collection of React _components_.
* A React component can be a single function or a single class.
* Each React component has its own _state_.
* React components that are classes must define a `render()` method to visually draw the component. This method must return a single top-level element (that may contain as many child elements as you want).
* A React component that is a function must return a single top-level element (that may contain as many child elements as you want).

### Cheat Sheet for JSX

* JSX is a React-specific language.  It is a JavaScript/HTML hybrid.
* You can embed short JS expressions inside of JSX markup by using curly braces { }
* You can not mix entire ES6 statements (such as loops) inside of JSX but you can use short expressions
* JSX does NOT support `class="..."` on an element.  Use `className="..."` instead!
* JSX will **automatically** puts quotes around attribute values: `src={image_url}`
* You can use either JSX or `React.createElement(...)` to generate React elements.
* React will automatically re-render a component whenever its underlying state changes

# References

React-Specific:

* [React DeveloperTools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
* [React documentation](https://react.dev).
* ["Create React App" documentation](https://create-react-app.dev/).

* [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ES6 Destructuring Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Use Arrow Functions Instead of Class Methods In React](https://medium.com/quick-code/react-quick-tip-use-class-properties-and-arrow-functions-to-avoid-binding-this-to-methods-29628aca2e25)

