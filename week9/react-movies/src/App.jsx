import { React, useState } from 'react';
import Movie from './Movie.jsx'

function App() {

  let initialData = [
    { title: "The Princess Bride", poster_path: '/dvjqlp2sAhUeFjUOfQDgqwpphHj.jpg', release_date: '1999', vote_average: 10 },
    { title: "Spider - Man", poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg', release_date: '1999', vote_average: 10 },
    { title: "Star Wars", poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', release_date: '1999', vote_average: 10 },
    { title: "Jurassic Park", poster_path: 'https://image.tmdb.org/t/p/w185//b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg', release_date: '1993', vote_average: 10 },
    { title: "Doctor Strange", poster_path: '/7WfK17BXE6szXlm4WOxfswgbdsL.jpg', release_date: '1999', vote_average: 10 },
    { title: "Apollo 13", poster_path: '/kzj95o9FlVxKziQq36mjES3wxel.jpg', release_date: '1999', vote_average: 10 },
    { title: "The Matrix", poster_path: '//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', release_date: '1999', vote_average: 10 },
    { title: "Toy Story", poster_path: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg', release_date: '1999', vote_average: 10 },
  ]
  
  const [data, setData] = useState(initialData)
  const [likes, setLikes] = useState({}) // { "Apollo 13": 100, "Princess Bride": 5, ...}

  function incrementLikes(title) {
    // { "Apollo 13": 8, "Princess Bride": 5, ...}
    const currentLikeCount = likes[title] || 0
    let obj = { }
    obj[title] = currentLikeCount + 1   // obj: { "Princess Bride": 6 }
    const newLikes = { ...likes, ...obj }    
    setLikes(newLikes)
  }


  const movies = data.map(movie_data => <Movie onLikeClicked={incrementLikes}  likeCount={likes[movie_data.title] || 0} key={movie_data.title} title={movie_data.title} release_date={movie_data.release_date} poster_path={movie_data.poster_path} vote_average={movie_data.vote_average} />)

  function handleNowPlayingButton(event) {
    console.log(event)
    event.preventDefault();
    const url = urlForMovies("now_playing")
    fetch(url).then(response => response.json()).then(api_data => setData(api_data.results))
  }

  function handleTopRatedButton(event) {
    console.log(event)
    event.preventDefault();
    const url = urlForMovies("top_rated")
    fetch(url).then(response => response.json()).then(api_data => setData(api_data.results))
  }
  function handleOurMoviesButton(event) {
    console.log(event)
    event.preventDefault();
    setData(initialData)
  }

  function handleSearchSubmit(formData) {
    const keyword = formData.get("search")
    const url = urlForSearch(keyword)
    fetch(url).then(response => response.json()).then(data => setData(data.results))
  }

  return (
    <div>
      <header className="row mb-5 justify-content-between">
        <form className="col-sm-4" action={handleSearchSubmit}>
          <input className="form-control" autoFocus name="search" type="text" placeholder="Search by title...">
          </input>
        </form>

        <p className="mt-2">
          <button onClick={handleTopRatedButton} className="btn btn-primary" >Top-Rated Movies</button>
          <button onClick={handleNowPlayingButton} className="btn btn-primary ms-3">Now Playing</button>
          <button onClick={handleOurMoviesButton} className="btn btn-secondary ms-3">Our Movies</button>
        </p>
      </header>

      <div className="row justify-content-between flex-wrap gy-5" id="movies">
        {movies}
      </div>
    </div>
  )
}

function getApiKey() { return "bde024f3eb43f597aafe01ed9c9098c6" }

// Pass in the "resource" you want to retrieve: 'top_movies' or 'now_playing'
function urlForMovies(resource) {
  const apiKey = `api_key=${getApiKey()}`
  const language = "language=en-US"
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/movie/${resource}`
  return `${base_url}?${apiKey}&${language}&${region}&${filter}`
}

// Pass in the movite title or keyword to search for
function urlForSearch(keyword) {
  const apiKey = `api_key=${getApiKey()}`
  const language = "language=en-US"
  const search = `query=${keyword}`
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/search/movie`
  return `${base_url}?${apiKey}&${search}&${language}&${region}&${filter}`
}

export default App;

// To make development easier, we can make certain functions available to the browser
// by adding a reference into the built-in window object
window.urlForMovies = urlForMovies
window.urlForSearch = urlForSearch