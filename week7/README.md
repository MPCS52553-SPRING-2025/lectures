# Week 7

Today we'll work on a new Movies app, this time as a proper React application.

A complete, non-React solution is already provided in the `js-movies` directory.

### Getting Started

* Start by opening [the non-React solution](js-movies/index.html) in a local server.
* Play with the app and browse the code to get familiar with the main parts.
* Stop your local server before coding along in React.
* There are two React examples: react-intro and react-movies.

**If you want to code along...**

You will need to have Node installed (nodejs.org). 

For both the `react-intro` and `react-movies` examples, you need do this **only once** in each app (react-movies is shown here as the example):

``` shell
week7$ cd react-movies
week7/react-movies$ npm install
```

Start your local server like this:

``` shell
week7/react-movies $ npm run dev
```

**Press Ctrl-C to stop the server anytime.**

### Important Ideas This Week

We are connecting a LOT of dots today:

* Concept of "state" and circumstances where state management is complicated
* Concept of "representation"
* Lots of JS syntax knowledge
* Accessing remote data with `fetch()`
* Using `then()` as an alternative to `await()` to chain asynchronous functions together

  
### React Notes

* Remember, React is a _framework_.  It provides abstractions that make it easier 
  to create user interaction-heavy web pages.
* A key idea in React is to organize a page into separate _components_.
* Each component is responsible for a particular section of a page.
* Each component draws itself based on the data it contains (its _state_).
* You can assign a direct value to `this.state` ONLY in the `constructor()`
* Outside of the constructor, use `setState(...)` to update the state object.
* React automatically invokes the `render()` function whenever `this.state` changes.
* JSX expressions may consist of only 1 top-level element (or array)
* We can't run loops INSIDE of a JSX fragment, but we can render a pre-made array of JSX elements
* We can `return null` from the `render` function to have the component not draw anything.
* Use component _properties_ to pass data from parent to child.
* Inside the child component, use `this.props` to access the provided data.


### References

JavaScript-specific:

* [Demystifying Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ES6 Destructuring Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Use Arrow Functions Instead of Class Methods In React](https://medium.com/quick-code/react-quick-tip-use-class-properties-and-arrow-functions-to-avoid-binding-this-to-methods-29628aca2e25)

### Cheat Sheet for JSX

* JSX is a React-specific language.  It is a JavaScript/HTML hybrid.
* You can embed short JS expressions inside of JSX markup by using curly braces { }
* You can not mix entire ES6 statements (such as loops) inside of JSX but you can use short expressions
* JSX does NOT support `class="..."` on an element.  Use `className="..."` instead!
* JSX will **automatically** puts quotes around attribute values: `src={image_url}`
* You can use either JSX or `React.createElement(...)` to generate React elements.
* React will automatically re-render a component whenever its underlying state changes