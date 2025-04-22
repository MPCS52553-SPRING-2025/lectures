// State management options:
// - global variables
// - use HTML element content
// - use HTML data-* attributes
// - use global "app" variable (usually hooked into window)

window.app = { 
  counter: 0
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".like").addEventListener("click", function(event) {
    event.preventDefault();
    let counterElement = event.currentTarget.querySelector("span")
    window.app.counter += 1
    counterElement.textContent = window.app.counter
    event.currentTarget.style.color = "white"
    event.currentTarget.style.backgroundColor = "red"
    let link = event.currentTarget
    setTimeout(function() {
      link.style.color = "red"
      link.style.backgroundColor = "white"
    }, 1000)
  })
})

