import { useState } from 'react'

export default function Item(props) {
  const [qty, setQty] = useState(props.qty)

  function increaseQty(event) {
    event.preventDefault()
    setQty(qty + 1) 
    props.onQtyChanged({ name: props.name, qty: qty, price: props.price });
  }

  function reduceQty(event) {
    event.preventDefault()
    if (qty > 1) {
      setQty(qty - 1)
      props.onQtyChanged({name: props.name, qty: qty, price: props.price }); 
    }
  }
    
  return (
    <div className="flex space-between mt-4">
      <div className="flex items-center space-between w-2/3">
        <div className="flex items-center">
          <button className="bg-red-800 text-white p-2 rounded mr-2" onClick={reduceQty}>-</button>
          <p className="mx-2">{qty}</p>
          <button className="bg-green-800 text-white p-2 rounded mx-2" onClick={increaseQty}>+</button>
        </div>
        <p className="ml-4">{props.name}</p>
      </div>

      <p className="item_amount">${(props.price * qty).toFixed(2)}</p>
    </div>
  )
}