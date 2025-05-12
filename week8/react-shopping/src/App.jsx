import { useState } from 'react'
import './styles/App.css';
import Cart from './Cart';
import Totals from './Totals';
import AddItemForm from './AddItemForm';
import Header from './Header'

function App() {
  const [items, setItems] = useState([])

  function calculateSubtotal() {
    let subtotal = 0
    for (const item of items) {
      subtotal += item.price * item.qty
    }
    return subtotal
  }
  
  function handleItemChanged(item) {
    const newItems = items.map(existing_item => {
      if (existing_item.name === item.name) {
        // return a new object that has the updated new qty
        return { name: item.name, qty: item.qty, price: item.price }
      } else {
        // leave item unchanged
        return existing_item
      }
    })
    setItems(newItems)
  }

  function handleAddItem(itemName) {
    const qty = 1
    const price = items.length + 1
    const newItems = [...items, { name: itemName, qty: qty, price: price }]
    setItems(newItems)
  }

  const subtotal = calculateSubtotal()

  return (
    <>
      <Header/>
      <AddItemForm onAddItem={handleAddItem} />
      
      <div className="flex space-between" id="main">
        <Cart items={items} onItemChanged={handleItemChanged}/>
        <Totals amount={subtotal}/>
      </div>
    </>
  )
}

export default App;
