import { useState } from 'react';

export default function Items(props) {
  const [inputValue, setInputValue] = useState("")

  function onAddItem(event) {
    event.preventDefault()
    props.onAddItem(inputValue)
    setInputValue("")
  }
  return (
    <div className="my-8">
      <h2 className="font-bold mb-2">Add Item</h2>
      <form onSubmit={onAddItem}>
        <input className="p-4 border-2 border-slate-300 rounded-lg w-1/2 italic font-bold text-green-900" value={inputValue} autoFocus type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Cookies, Ice Cream, etc..." />
      </form>
    </div>
  )

}
