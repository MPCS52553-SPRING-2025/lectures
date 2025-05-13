export default function LikeButton(props) {

  function handleLikeClicked(e) {
    e.preventDefault()
    props.onButtonClick(props.title)
  }
  return (
    <button onClick={handleLikeClicked} className="text-decoration-none btn text-danger ">&hearts;
      <span>{props.likeCount}</span>
    </button>
  )
}
