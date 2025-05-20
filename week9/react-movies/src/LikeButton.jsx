import { useState, useEffect } from 'react'

export default function LikeButton(props) {

  const url = "https://mpcs-movies-ac5358d2aa9a.herokuapp.com"
  
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch(`${url}/votes/${props.identifier}`, { method: 'get' }).then(r => r.json()).then(data => setCount(data))
  })

  function handleLikeClicked(e) {
    e.preventDefault()
    fetch(`${url}/votes/${props.identifier}`, { method: 'post' }).then(r => r.json()).then(data => setCount(data))
  }
  return (
    <button onClick={handleLikeClicked} className="text-decoration-none btn text-danger ">&hearts;
      <span>{count}</span>
    </button>
  )
}
