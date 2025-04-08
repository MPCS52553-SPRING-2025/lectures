document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#challenges")
  element.addEventListener("click", handleClick)

  const appleLink = document.querySelector("#apple")

  appleLink.addEventListener("click", function (event) {
    event.preventDefault()
    window.alert("Nice try.")
  })
})

function handleClick(event) {
  console.log(event)
  event.target.style.backgroundColor = "red"
  event.target.style.color = "white"
}
