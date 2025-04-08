// This is a helpful function to generate a random number from 1 to 6
const pickRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// Your code goes here...
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#rollLink").addEventListener("click", rollDice)
})

function rollDice(event) {
  event.preventDefault()
  const n1 = pickRandomNumber()
  const n2 = pickRandomNumber()
  const dice = document.querySelectorAll("img")
  dice[0].src = "images/" + n1.toString() + ".png"
  dice[1].src = "images/" + n2.toString() + ".png"
}