import Item from './Item'


export default function Cart(props) {

  function onItemChanged(item) {
    props.onItemChanged(item)
  }
  const lineItems = props.items.map((item) => <Item key={item.name} onQtyChanged={onItemChanged} name={item.name} price={item.price} qty={item.qty} />)

  return (
    <div className="w-2/3">
      <h2 className="font-bold">Shopping Cart</h2>
      <div id="items">
        {lineItems}
      </div>
    </div>
  )
}
