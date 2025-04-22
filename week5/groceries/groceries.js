// When you type a grocery item into the text input and press [Enter]:
// - the new item should appear at the bottom of the list
// - the text input should be reset to a blank input field
// - the cursor should be blinking in the text input again

document.addEventListener("DOMContentLoaded", setupListeners)

function setupListeners() {
  document.querySelector("form").addEventListener("submit", addItemWithTemplate)
  document.querySelectorAll(".delete_btn").forEach(handleDeleteLink)
}

function handleDeleteLink(element) {
  element.addEventListener("click", (e) => {
    // e.preventDefault()
    const linkClicked = e.target
    const groceryItem = linkClicked.closest("li") // travel upward to nearest list item
    groceryItem.remove()
  })
}

function addItem(e) {
  e.preventDefault();
  
  // 1. Determine the text of the new grocery item
  const inputElement = document.querySelector("#new_item")
  const textToAdd = inputElement.value
  
  // 2. Create a "document fragment" of the HTML we want to dynamically create
  const newItem = document.createElement("li")
  newItem.innerHTML = `${textToAdd} <a href="" class="delete_btn">[Delete]</a>`
  
  // 3. Append the new element into the actual DOM
  const entireList = document.querySelector("#groceries")
  entireList.appendChild(newItem)
  
  // 4. Be ready for click events on the new element
  const newDeleteLink = newItem.querySelector("a")
  handleDeleteLink(newDeleteLink)

  // 5. Reset the input element
  inputElement.value = ""
}

function addItemWithTemplate(e) {
  e.preventDefault()

  // 1. Create a new new document fragment based on the template
  const template = document.querySelector("#newitem_template")
  const fragment = template.content.cloneNode(true)
  
  // 2. Update the span element based on the input field's value
  const newItemSpan = fragment.querySelector("li span")
  newItemSpan.textContent = document.querySelector("#new_item").value

  // 3. Be ready for click events on the new element
  handleDeleteLink(fragment.querySelector("a"))
  
  // 4. Append the new element into the actual DOM
  const entireList = document.querySelector("#groceries")
  entireList.appendChild(fragment)

  // 5. Reset the form to clear the input element
  document.querySelector("form").reset()

}