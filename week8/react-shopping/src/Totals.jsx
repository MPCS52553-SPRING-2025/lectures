import { useState } from 'react'

export default function Totals(props) {
  const tax = props.amount * 0.08
  const total = props.amount + tax
  return (
    <div className="w-1/2 border-l-4 pl-4">
      <h2 className="font-bold mb-4">Receipt</h2>
      <div className="flex space-between">
        <p className="w-2/3">Subtotal:</p>
        <p>${props.amount.toFixed(2)}</p>
      </div>
      <div className="flex space-between mt-2">
        <p className="w-2/3">Tax:</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className="flex space-between mt-2">
        <p className="w-2/3 font-bold">TOTAL:</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  )
}
